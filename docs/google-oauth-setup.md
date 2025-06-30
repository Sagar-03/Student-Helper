# Google OAuth Configuration Guide

## Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. **IMPORTANT: Enable Google Classroom API first**
   - Navigate to **APIs & Services** > **Library**
   - Search for "Google Classroom API"
   - Click on it and press "Enable"
   - Wait for the API to be enabled (may take a few minutes)
3. Navigate to **APIs & Services** > **Credentials**
4. Select your OAuth 2.0 Client ID or create a new one

### Configure correct URIs

#### JavaScript Origins
Add ONLY the base URL with no path and no trailing slash:
- `http://localhost:5173`  ✅
- `http://localhost:5000`  ✅

#### Redirect URIs
Add the complete URL including path:
- `http://localhost:5000/api/google/callback`  ✅

## Environment Variables
Make sure your environment variables in `.env` match exactly:

```
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REDIRECT_URI=http://localhost:5000/api/google/callback
FRONTEND_URL=http://localhost:5173
```

## Common Errors

- **"Invalid Origin: URIs must not contain a path or end with '/'"** - Only add domains without paths to JavaScript Origins
- **"redirect_uri_mismatch"** - Make sure the redirect URI in your code exactly matches what's in Google Cloud Console
- **"Invalid Referer"** - Check your JavaScript Origins are correctly set
- **"Google Classroom API has not been used in project... or it is disabled"** - You need to enable the Google Classroom API in the Google Cloud Console (see step 2 above)

## Quick Fix for Current Error

If you're seeing the error about Google Classroom API not being enabled:

1. Go to: https://console.developers.google.com/apis/api/classroom.googleapis.com/overview?project=919863351219
2. Click "Enable" button
3. Wait 2-5 minutes for the change to propagate
4. Restart your server and try again

## Testing

After making these changes, restart your servers and try logging in again.
