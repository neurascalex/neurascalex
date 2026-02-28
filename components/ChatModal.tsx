
import React, { useState, useEffect, useRef } from 'react';
import { X, Send, ThumbsUp, ThumbsDown } from 'lucide-react';
import {
  fetchImprovedChatResponse,
  getClinicSettings,
  getStarterQuestions,
  getDoctorDetails,
  fetchUserIP,
  insertUserChatSession,
  saveReaction,
  trackButtonClick,
  sendEmail,
  API_URLS
} from '../services/chatApi';
import { parseMarkdown, truncateText, getHeaderMaxLength } from '../utils/helpers';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  specialist: {
    name: string;
    image: string;
    title: string;
    widgetId: string;
  } | null;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  message_id?: number;
  session_id?: string;
  userReaction?: boolean | null;
  followUpQuestion?: string;
  suggestedTopics?: string[];
  isError?: boolean;
}

interface ChatConfig {
  apiBaseUrl: string;
  indexName: string;
  welcomeMessage: string | null;
  clinicName: string;
  logoUrl: string;
  privacyNoticeText: string;
  privacyNoticeUrl: string;
  bookNowText: string;
  bookNowShow: boolean;
  bookNowUrl: string;
  sendEmailText: string;
  sendEmailShow: boolean;
  ctaTwoText: string;
  ctaTwoShow: boolean;
  ctaTwoUrl: string;
  ctaThreeText: string;
  ctaThreeShow: boolean;
  ctaThreeUrl: string;
  brandColour: string;
  textColour: string;
}

interface StarterQuestionsData {
  q1?: string;
  a1?: string;
  q2?: string;
  a2?: string;
  q3?: string;
  a3?: string;
}

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose, specialist }) => {
  // State
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [showStarterQuestions, setShowStarterQuestions] = useState(true);
  const [userIP, setUserIP] = useState('127.0.0.1');
  const [userChatSessionId, setUserChatSessionId] = useState<string | null>(null);
  const [sessionTracked, setSessionTracked] = useState(false);
  const [doctorDetails, setDoctorDetails] = useState<any>(null);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [headerMaxLength, setHeaderMaxLength] = useState(getHeaderMaxLength());
  const [starterQuestions, setStarterQuestions] = useState<StarterQuestionsData | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [initialized, setInitialized] = useState(false);

  // Email form state
  const [emailFormData, setEmailFormData] = useState({ name: '', email: '', message: '' });
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  // Configuration state
  const [chatConfig, setChatConfig] = useState<ChatConfig>({
    apiBaseUrl: API_URLS.pythonApi,
    indexName: 'default',
    welcomeMessage: null,
    clinicName: 'Healthcare AI Assistant',
    logoUrl: '',
    privacyNoticeText: "I'm an AI assistant. Please consult a healthcare professional for medical advice.",
    privacyNoticeUrl: '',
    bookNowText: 'Book Demo',
    bookNowShow: true,
    bookNowUrl: '',
    sendEmailText: 'Send Email',
    sendEmailShow: true,
    ctaTwoText: 'More Info',
    ctaTwoShow: false,
    ctaTwoUrl: '',
    ctaThreeText: 'Contact Us',
    ctaThreeShow: false,
    ctaThreeUrl: '',
    brandColour: '#667eea',
    textColour: '#ffffff'
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Initialize chatbot when modal opens
  useEffect(() => {
    if (isOpen && specialist?.widgetId && !initialized) {
      initializeChatbot();
    }
  }, [isOpen, specialist?.widgetId]);

  // Reset when modal closes
  useEffect(() => {
    if (!isOpen) {
      setMessages([]);
      setShowStarterQuestions(true);
      setUserChatSessionId(null);
      setSessionTracked(false);
      setInitialized(false);
      setInputValue('');
      setShowEmailForm(false);
    }
  }, [isOpen]);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Resize handler
  useEffect(() => {
    const handleResize = () => setHeaderMaxLength(getHeaderMaxLength());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const initializeChatbot = async () => {
    if (!specialist?.widgetId) return;

    setIsInitializing(true);
    const widgetId = specialist.widgetId;

    // Fetch IP (non-blocking)
    try {
      const ip = await fetchUserIP();
      setUserIP(ip);
    } catch (error) {
      console.warn('Failed to fetch IP, using fallback:', error);
    }

    // Fetch doctor details (non-blocking)
    try {
      const details = await getDoctorDetails(widgetId);
      setDoctorDetails(details);
    } catch (error) {
      console.warn('Failed to fetch doctor details:', error);
    }

    // Fetch clinic settings (non-blocking)
    let settings: any = {};
    try {
      settings = await getClinicSettings(widgetId);
      setChatConfig(prev => ({
        ...prev,
        welcomeMessage: settings.IntroMessage || null,
        clinicName: settings.ClinicName || 'Healthcare AI Assistant',
        logoUrl: settings.LogoUrl || '',
        privacyNoticeText: settings.PrivacyNoticeText || "I'm an AI assistant. Please consult a healthcare professional for medical advice.",
        privacyNoticeUrl: settings.PrivacyNoticeUrl || '',
        bookNowUrl: settings.BookNowUrl || '',
        bookNowText: settings.BookNowLabel || 'Book Demo',
        bookNowShow: settings.BookNowShow === 'True',
        sendEmailText: settings.SendAnEmailLabel || 'Send Email',
        sendEmailShow: settings.SendAnEmailShow === 'True',
        ctaTwoUrl: settings.CTATwoUrl || '',
        ctaTwoText: settings.CTATwoLabel || 'More Info',
        ctaTwoShow: settings.CTATwoShow === 'True',
        ctaThreeUrl: settings.CTAThreeUrl || '',
        ctaThreeText: settings.CTAThreeLabel || 'Contact Us',
        ctaThreeShow: settings.CTAThreeShow === 'True',
        brandColour: settings.BrandColour || '#667eea',
        textColour: settings.TextColour || '#ffffff'
      }));
    } catch (error) {
      console.warn('Failed to fetch clinic settings:', error);
    }

    // Fetch starter questions (non-blocking)
    try {
      const questions = await getStarterQuestions(widgetId);
      setStarterQuestions(questions);
    } catch (error) {
      console.warn('Failed to fetch starter questions:', error);
    }

    // Set intro message if available, otherwise use default
    if (settings.IntroMessage) {
      setMessages([
        {
          id: 1,
          text: settings.IntroMessage,
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
    } else {
      setMessages([
        {
          id: 1,
          text: `Hello! I'm the AI assistant for ${specialist?.name || 'this specialist'}. How can I help you today?`,
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
    }

    setInitialized(true);
    setIsInitializing(false);
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleReaction = async (messageId: number, sessionId: string, reaction: boolean) => {
    if (!specialist?.widgetId) return;

    try {
      const currentMessage = messages.find(msg => msg.message_id === messageId);
      if (!currentMessage) return;

      const newReaction = currentMessage.userReaction === reaction ? null : reaction;

      setMessages(prev =>
        prev.map(msg =>
          msg.message_id === messageId ? { ...msg, userReaction: newReaction } : msg
        )
      );

      await saveReaction(sessionId, messageId, newReaction, specialist.widgetId, chatConfig.apiBaseUrl);
    } catch (error) {
      console.error('Error saving reaction:', error);
      setMessages(prev =>
        prev.map(msg =>
          msg.message_id === messageId ? { ...msg, userReaction: null } : msg
        )
      );
    }
  };

  const handleSendMessage = async (message: string) => {
    if (!message.trim() || isLoading || !specialist?.widgetId) return;

    setShowStarterQuestions(false);

    // Create session on first message if not already created
    let sessionId = userChatSessionId;
    if (!userChatSessionId && userIP && specialist.widgetId) {
      try {
        sessionId = await insertUserChatSession(userIP, specialist.widgetId);
        setUserChatSessionId(sessionId);
        setSessionTracked(true);
        console.log('Session created on first message:', sessionId);
      } catch (error) {
        console.error('Failed to create session:', error);
        return;
      }
    }

    const userMessage: Message = {
      id: Date.now(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setInputValue('');

    try {
      const response = await fetchImprovedChatResponse(
        message,
        sessionId!,
        specialist.widgetId,
        chatConfig.apiBaseUrl
      );

      const botMessage: Message = {
        id: Date.now() + 1,
        text: response.response || response.message || 'Sorry, I could not process your request.',
        sender: 'bot',
        timestamp: new Date(),
        message_id: response.message_id,
        session_id: response.session_id || userChatSessionId || undefined,
        userReaction: null,
        followUpQuestion: response.follow_up_question,
        suggestedTopics: response.suggested_topics
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStarterQuestion = async (questionText: string, answerText: string | null = null) => {
    if (isLoading || !specialist?.widgetId) return;

    setShowStarterQuestions(false);

    // Create session on first message if not already created
    let sessionId = userChatSessionId;
    if (!userChatSessionId && userIP && specialist.widgetId) {
      try {
        sessionId = await insertUserChatSession(userIP, specialist.widgetId);
        setUserChatSessionId(sessionId);
        setSessionTracked(true);
        console.log('Session created on first message:', sessionId);
      } catch (error) {
        console.error('Failed to create session:', error);
        return;
      }
    }

    const userMessage: Message = {
      id: Date.now(),
      text: questionText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    if (answerText) {
      const botMessage: Message = {
        id: Date.now() + 1,
        text: answerText,
        sender: 'bot',
        timestamp: new Date(),
        userReaction: null
      };
      setMessages(prev => [...prev, botMessage]);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetchImprovedChatResponse(
        questionText,
        sessionId!,
        specialist.widgetId,
        chatConfig.apiBaseUrl
      );

      const botMessage: Message = {
        id: Date.now() + 1,
        text: response.response || response.message || 'Sorry, I could not process your request.',
        sender: 'bot',
        timestamp: new Date(),
        message_id: response.message_id,
        session_id: response.session_id || userChatSessionId || undefined,
        userReaction: null,
        followUpQuestion: response.follow_up_question,
        suggestedTopics: response.suggested_topics
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookNow = async () => {
    if (userChatSessionId && specialist?.widgetId) {
      try {
        await trackButtonClick(userChatSessionId, chatConfig.bookNowText, specialist.widgetId);
      } catch (error) {
        console.error('Failed to track Book Now click:', error);
      }
    }

    if (chatConfig.bookNowUrl) {
      window.open(chatConfig.bookNowUrl, '_blank');
    }
  };

  const handleSendEmail = async () => {
    if (userChatSessionId && specialist?.widgetId) {
      try {
        await trackButtonClick(userChatSessionId, chatConfig.sendEmailText, specialist.widgetId);
      } catch (error) {
        console.error('Failed to track Send Email click:', error);
      }
    }
    setShowEmailForm(true);
  };

  const handleCTATwo = async () => {
    if (userChatSessionId && specialist?.widgetId) {
      try {
        await trackButtonClick(userChatSessionId, chatConfig.ctaTwoText, specialist.widgetId);
      } catch (error) {
        console.error('Failed to track CTA Two click:', error);
      }
    }

    if (chatConfig.ctaTwoUrl) {
      window.open(chatConfig.ctaTwoUrl, '_blank');
    }
  };

  const handleCTAThree = async () => {
    if (userChatSessionId && specialist?.widgetId) {
      try {
        await trackButtonClick(userChatSessionId, chatConfig.ctaThreeText, specialist.widgetId);
      } catch (error) {
        console.error('Failed to track CTA Three click:', error);
      }
    }

    if (chatConfig.ctaThreeUrl) {
      window.open(chatConfig.ctaThreeUrl, '_blank');
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!emailFormData.name.trim() || !emailFormData.email.trim() || !emailFormData.message.trim()) {
      setEmailError('Please fill in all required fields.');
      return;
    }

    setEmailLoading(true);

    try {
      await sendEmail(emailFormData.name, emailFormData.email, emailFormData.message, specialist?.widgetId || null);
      setEmailSuccess(true);
      setTimeout(() => {
        setShowEmailForm(false);
        setEmailFormData({ name: '', email: '', message: '' });
        setEmailSuccess(false);
      }, 2000);
    } catch (err: any) {
      setEmailError(err.message || 'Failed to send email. Please try again.');
      setEmailLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  const getLatestBotMessageIndex = () => {
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].sender === 'bot' && !messages[i].isError) {
        return i;
      }
    }
    return -1;
  };

  const latestBotMessageIndex = getLatestBotMessageIndex();

  if (!isOpen || !specialist) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[85vh] max-h-[700px]">
        
        {/* Initializing Loader Overlay */}
        {isInitializing && (
          <div className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-16 h-16">
                <div 
                  className="absolute inset-0 rounded-full border-4 border-t-transparent animate-spin"
                  style={{ borderColor: `${chatConfig.brandColour}40`, borderTopColor: chatConfig.brandColour }}
                ></div>
              </div>
              <div className="text-center">
                <p className="text-gray-700 font-medium">Loading AI Assistant</p>
                <p className="text-gray-500 text-sm mt-1">Preparing your conversation...</p>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div 
          className="p-4 flex items-center justify-between text-white"
          style={{ backgroundColor: chatConfig.brandColour }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 overflow-hidden">
              {chatConfig.logoUrl ? (
                <img 
                  src={chatConfig.logoUrl} 
                  alt={chatConfig.clinicName}
                  className="w-full h-full object-cover"
                />
              ) : specialist.image ? (
                <img 
                  src={specialist.image} 
                  alt={specialist.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span className="text-xl">🤖</span>
              )}
            </div>
            <h2 className="text-lg font-bold truncate max-w-[200px]">
              {truncateText(chatConfig.clinicName !== 'Healthcare AI Assistant' ? chatConfig.clinicName : `${specialist.name.split(' ')[1] || specialist.name} AI`, headerMaxLength)}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50 px-4 py-4">
          {messages.map((message, index) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
              <div className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'} max-w-[80%]`}>
                <div
                  className={`px-4 py-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'text-white rounded-br-sm'
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-sm'
                  }`}
                  style={message.sender === 'user' ? { backgroundColor: chatConfig.brandColour } : {}}
                  dangerouslySetInnerHTML={{ __html: parseMarkdown(message.text) }}
                />

                {/* Reaction buttons */}
                {message.sender === 'bot' && message.message_id && !message.isError && index === latestBotMessageIndex && (
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleReaction(message.message_id!, message.session_id!, true)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                        message.userReaction === true
                          ? 'bg-green-500 text-white'
                          : 'bg-white border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <ThumbsUp className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleReaction(message.message_id!, message.session_id!, false)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                        message.userReaction === false
                          ? 'bg-red-500 text-white'
                          : 'bg-white border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <ThumbsDown className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Follow-up question */}
                {index === latestBotMessageIndex && message.followUpQuestion && !message.isError && (
                  <button
                    onClick={() => setInputValue(message.followUpQuestion!)}
                    className="mt-2 bg-purple-50 border border-purple-200 rounded-lg px-3 py-2 text-sm text-purple-800 hover:bg-purple-100 transition flex items-center gap-2"
                  >
                    <span>💡</span>
                    <span>{message.followUpQuestion}</span>
                  </button>
                )}

                {/* Suggested topics */}
                {index === latestBotMessageIndex && message.suggestedTopics && message.suggestedTopics.length > 0 && !message.isError && (
                  <div className="mt-2 w-full">
                    <div className="text-xs text-gray-500 font-medium mb-1">🏷️ Suggested Topics</div>
                    <div className="flex flex-wrap gap-2">
                      {message.suggestedTopics.map((topic, idx) => (
                        <button
                          key={idx}
                          onClick={() => setInputValue(`Tell me about ${topic}`)}
                          className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-600 hover:bg-gray-200 transition"
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-sm">
                <div className="flex gap-1 items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            </div>
          )}

          {/* Starter Questions */}
          {showStarterQuestions && starterQuestions && (starterQuestions.q1 || starterQuestions.q2 || starterQuestions.q3) && (
            <div className="px-2 my-3 flex flex-col items-end gap-2">
              <div className="text-xs font-medium text-gray-500 text-right">
                Choose a topic to get started:
              </div>
              <div className="flex flex-col gap-2 items-end w-full">
                {starterQuestions.q1 && (
                  <button
                    onClick={() => handleStarterQuestion(starterQuestions.q1!, starterQuestions.a1 || null)}
                    disabled={isLoading}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition disabled:opacity-60 text-right max-w-full"
                  >
                    {starterQuestions.q1}
                  </button>
                )}
                {starterQuestions.q2 && (
                  <button
                    onClick={() => handleStarterQuestion(starterQuestions.q2!, starterQuestions.a2 || null)}
                    disabled={isLoading}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition disabled:opacity-60 text-right max-w-full"
                  >
                    {starterQuestions.q2}
                  </button>
                )}
                {starterQuestions.q3 && (
                  <button
                    onClick={() => handleStarterQuestion(starterQuestions.q3!, starterQuestions.a3 || null)}
                    disabled={isLoading}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition disabled:opacity-60 text-right max-w-full"
                  >
                    {starterQuestions.q3}
                  </button>
                )}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* CTA Buttons */}
        {(chatConfig.bookNowShow || chatConfig.sendEmailShow || chatConfig.ctaTwoShow || chatConfig.ctaThreeShow) && (
          <div className="px-4 py-2 overflow-x-auto flex gap-2 border-t border-gray-100">
            {chatConfig.bookNowShow && (
              <button
                onClick={handleBookNow}
                style={{ borderColor: chatConfig.brandColour, color: chatConfig.brandColour }}
                className="px-4 py-1.5 border-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 hover:opacity-80 transition"
              >
                {chatConfig.bookNowText}
              </button>
            )}
            {chatConfig.ctaTwoShow && (
              <button
                onClick={handleCTATwo}
                style={{ borderColor: chatConfig.brandColour, color: chatConfig.brandColour }}
                className="px-4 py-1.5 border-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 hover:opacity-80 transition"
              >
                {chatConfig.ctaTwoText}
              </button>
            )}
            {chatConfig.sendEmailShow && (
              <button
                onClick={handleSendEmail}
                style={{ borderColor: chatConfig.brandColour, color: chatConfig.brandColour }}
                className="px-4 py-1.5 border-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 hover:opacity-80 transition"
              >
                {chatConfig.sendEmailText}
              </button>
            )}
            {chatConfig.ctaThreeShow && (
              <button
                onClick={handleCTAThree}
                style={{ borderColor: chatConfig.brandColour, color: chatConfig.brandColour }}
                className="px-4 py-1.5 border-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 hover:opacity-80 transition"
              >
                {chatConfig.ctaThreeText}
              </button>
            )}
          </div>
        )}

        {/* Input Area */}
        <div className="px-4 py-3 border-t border-gray-200 bg-white">
          <div className="flex gap-3 items-end">
            <textarea
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                e.target.style.height = 'auto';
                e.target.style.height = Math.min(e.target.scrollHeight, 100) + 'px';
              }}
              onKeyPress={handleKeyPress}
              placeholder="Type your question..."
              disabled={isLoading}
              className="flex-1 px-4 py-3 border border-gray-200 rounded-2xl resize-none focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 max-h-24 overflow-y-auto bg-white text-sm"
              rows={1}
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || isLoading}
              style={{ backgroundColor: chatConfig.brandColour }}
              className="flex-shrink-0 w-11 h-11 rounded-full text-white flex items-center justify-center hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-white border-t border-gray-100">
          <div className="text-xs text-gray-500 font-medium text-center mb-1">
            Educational information only. Not a substitute for professional medical advice.
          </div>
          <div className="text-xs text-gray-400 text-center">
            Powered by{' '}
            <a
              href="https://www.neurascalex.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 font-semibold hover:underline"
            >
              NeurascaleX
            </a>
          </div>
        </div>
      </div>

      {/* Email Form Modal */}
      {showEmailForm && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[110] p-4"
          onClick={() => setShowEmailForm(false)}
        >
          <div
            className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Send us an Email</h3>
                <button onClick={() => setShowEmailForm(false)} className="p-1 hover:bg-gray-100 rounded transition">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleEmailSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name*</label>
                  <input
                    type="text"
                    value={emailFormData.name}
                    onChange={(e) => { setEmailFormData(prev => ({ ...prev, name: e.target.value })); setEmailError(null); }}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Email*</label>
                  <input
                    type="email"
                    value={emailFormData.email}
                    onChange={(e) => { setEmailFormData(prev => ({ ...prev, email: e.target.value })); setEmailError(null); }}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message*</label>
                  <textarea
                    value={emailFormData.message}
                    onChange={(e) => { setEmailFormData(prev => ({ ...prev, message: e.target.value })); setEmailError(null); }}
                    placeholder="Please tell us how we can help you..."
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg resize-none focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-200 min-h-24"
                    required
                  />
                </div>

                {emailLoading && (
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                    <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                    <span>Sending email...</span>
                  </div>
                )}

                {emailSuccess && (
                  <div className="text-green-600 text-sm mb-4 text-center">
                    ✅ Email sent successfully! We'll get back to you soon.
                  </div>
                )}

                {emailError && (
                  <div className="text-red-600 text-sm mb-4 text-center">
                    ❌ {emailError}
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setShowEmailForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={emailLoading || emailSuccess}
                    style={{ backgroundColor: chatConfig.brandColour }}
                    className="flex-1 px-4 py-2 text-white rounded-lg hover:opacity-90 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatModal;
