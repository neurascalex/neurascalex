# Azure Static Web Apps Deployment Guide

## Fixed Issues

The following issues have been resolved:

1. **Incorrect output directory**: Changed from "." to "dist" (Vite's default build output)
2. **Missing build configuration**: Added explicit Node.js setup and build steps
3. **Wrong API location**: Changed from "api" to "" (no API functions)
4. **Missing SPA routing config**: Added `staticwebapp.config.json` for proper React Router support
5. **Incomplete build script**: Updated to include TypeScript compilation
6. **Missing Node version specification**: Added `.node-version` file
7. **Corrected secret name**: Fixed token name mismatch in workflow
8. **Added React type definitions**: Included @types/react and @types/react-dom

## Deployment Steps

### 1. Set up GitHub Secrets

In your GitHub repository, add the following secret:
- `AZURE_STATIC_WEB_APPS_API_TOKEN_YELLOW_SEA_065D13D03`: Your Azure Static Web Apps deployment token
- `GEMINI_API_KEY` (optional): Your Gemini API key if needed at build time

### 2. Install Dependencies Locally (Optional Test)

```bash
cd neurascalex
npm install
```

### 3. Test Build Locally

```bash
npm run build
```

This should create a `dist` folder with your built application.

### 4. Test Production Build Locally

```bash
npm run preview
```

### 5. Push to GitHub

```bash
git add .
git commit -m "Fix Azure Static Web Apps deployment configuration"
git push origin main
```

The GitHub Action will automatically:
- Install Node.js 20
- Install dependencies with `npm ci`
- Run TypeScript compilation and build
- Deploy to Azure Static Web Apps

## Configuration Files

- **`.github/workflows/azure-static-web-apps-yellow-sea-065d13d03.yml`**: GitHub Actions workflow
- **`staticwebapp.config.json`**: Azure Static Web Apps configuration for SPA routing
- **`.node-version`**: Specifies Node.js 20 for Azure
- **`vite.config.ts`**: Vite build configuration with proper output settings
- **`tsconfig.json`**: TypeScript configuration for production builds
- **`package.json`**: Updated with proper build scripts and type definitions

## Environment Variables

The app uses the following environment variables:
- `GEMINI_API_KEY`: API key for Google Gemini (set in GitHub Secrets and Azure configuration)

To add environment variables in Azure Static Web Apps:
1. Go to your Static Web App in Azure Portal
2. Navigate to "Configuration" → "Application settings"
3. Add `GEMINI_API_KEY` with your API key value

## Troubleshooting

### Build Fails
- Check GitHub Actions logs for specific error messages
- Ensure all dependencies are correctly listed in `package.json`
- Verify TypeScript has no compilation errors: `npm run lint`

### Routes Not Working (404 errors)
- The `staticwebapp.config.json` file handles SPA routing
- All routes fallback to `/index.html` as configured

### API Key Issues
- For runtime API keys, set them in Azure Portal Configuration
- For build-time requirements, add to GitHub Secrets

### Deployment Token Issues
- Verify the secret name matches exactly: `AZURE_STATIC_WEB_APPS_API_TOKEN_YELLOW_SEA_065D13D03`
- Regenerate the token from Azure Portal if needed

## Post-Deployment

After successful deployment:
1. Your app will be available at: `https://yellow-sea-065d13d03.azurestaticapps.net`
2. Check the deployment status in GitHub Actions
3. Verify all routes work correctly
4. Test the Gemini integration functionality

## Additional Resources

- [Azure Static Web Apps Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [Vite Build Configuration](https://vitejs.dev/config/)
- [React Router with SPA](https://reactrouter.com/en/main/start/overview)
