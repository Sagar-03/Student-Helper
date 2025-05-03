# Google OAuth Configuration Guide

## Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services** > **Credentials**
3. Select your OAuth 2.0 Client ID or create a new one

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

## Testing

After making these changes, restart your servers and try logging in again.
