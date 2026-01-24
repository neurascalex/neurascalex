const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Disable caching for all routes
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  next();
});

// Serve static files from the current directory
app.use(express.static(__dirname, {
  etag: false,
  lastModified: false,
  maxAge: 0
}));

// Handle SPA routing - send all requests to index.html
app.get('*', (req, res) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
