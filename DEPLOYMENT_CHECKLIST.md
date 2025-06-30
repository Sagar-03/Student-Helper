# Google OAuth Production Deployment Checklist

## 🚨 Current Issue Resolution

After deployment, users are experiencing Google OAuth authentication failures. Follow this checklist to resolve all issues.

## 1. Backend Environment Variables (Render.com)

Set these environment variables in your Render.com dashboard:

```bash
# Required
NODE_ENV=production
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-super-secret-jwt-key-for-production

# Google OAuth
GOOGLE_CLIENT_ID=919863351219-1qd1k5hsbejgg6b1sqjb3b6bqnl19pdt.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-actual-google-client-secret-here
GOOGLE_PROJECT_ID=919863351219

# Production URLs
PRODUCTION_BACKEND_URL=https://student-helper-b5j4.onrender.com
PRODUCTION_FRONTEND_URL=https://student-helper-yave.vercel.app
```

## 2. Google Cloud Console Configuration

### Navigate to: [Google Cloud Console](https://console.cloud.google.com/)

#### A. Enable APIs
1. Go to **APIs & Services** > **Library**
2. Search for and enable:
   - Google Classroom API
   - Google OAuth2 API
   - Google+ API (if needed)

#### B. Configure OAuth 2.0 Client
1. Go to **APIs & Services** > **Credentials**
2. Select your OAuth 2.0 Client ID
3. Configure **Authorized JavaScript origins**:
   ```
   https://student-helper-yave.vercel.app
   https://student-helper-b5j4.onrender.com
   http://localhost:5173 (for local development)
   http://localhost:5000 (for local development)
   ```

4. Configure **Authorized redirect URIs**:
   ```
   https://student-helper-b5j4.onrender.com/api/google/callback
   http://localhost:5000/api/google/callback (for local development)
   ```

## 3. Frontend Environment Variables (Vercel)

Ensure your Vercel environment variables are set:

```bash
VITE_API_URL=https://student-helper-b5j4.onrender.com
VITE_GOOGLE_CLIENT_ID=919863351219-1qd1k5hsbejgg6b1sqjb3b6bqnl19pdt.apps.googleusercontent.com
VITE_FRONTEND_URL=https://student-helper-yave.vercel.app
```

## 4. Verification Steps

After making all changes:

1. **Redeploy Backend**: Trigger a new deployment on Render.com
2. **Redeploy Frontend**: Trigger a new deployment on Vercel
3. **Test OAuth Flow**:
   - Visit: https://student-helper-yave.vercel.app/auth
   - Click "Login with Google"
   - Should redirect to: `https://student-helper-b5j4.onrender.com/api/google/auth?source=auth`
   - After Google auth, should redirect back to your frontend with a token

## 5. Common Issues & Solutions

### Issue: "Cannot GET /api/api/google/auth"
- **Cause**: Double `/api` in URL
- **Solution**: ✅ Already fixed in axiosConfig.js

### Issue: "redirect_uri_mismatch"
- **Cause**: Google Cloud Console redirect URI doesn't match
- **Solution**: Ensure exact match in Google Cloud Console

### Issue: "Access blocked: This app's request is invalid"
- **Cause**: JavaScript origins not configured
- **Solution**: Add all domains to authorized origins

### Issue: CORS errors
- **Cause**: Backend not allowing frontend origin
- **Solution**: ✅ Already fixed in server.js CORS config

## 6. Testing Commands

Test your deployed endpoints:

```bash
# Test auth endpoint
curl https://student-helper-b5j4.onrender.com/api/google/auth

# Test backend health
curl https://student-helper-b5j4.onrender.com/api/auth

# Test frontend
curl https://student-helper-yave.vercel.app
```

## 7. Monitoring

Check logs in:
- **Render.com**: Backend logs for OAuth errors
- **Vercel**: Function logs for frontend issues
- **Google Cloud Console**: API usage and errors

## 8. Final Checklist

- [ ] Backend environment variables set on Render.com
- [ ] Google Cloud Console URIs configured
- [ ] Frontend environment variables set on Vercel
- [ ] Both apps redeployed
- [ ] OAuth flow tested end-to-end
- [ ] Error monitoring setup

## 🎯 Expected Flow

1. User clicks "Login with Google" on frontend
2. Redirects to: `https://student-helper-b5j4.onrender.com/api/google/auth?source=auth`
3. Backend redirects to Google OAuth
4. User authorizes app on Google
5. Google redirects to: `https://student-helper-b5j4.onrender.com/api/google/callback`
6. Backend processes auth and redirects to: `https://student-helper-yave.vercel.app/auth?token=...`
7. Frontend stores token and navigates to dashboard

If any step fails, check the corresponding section above.
