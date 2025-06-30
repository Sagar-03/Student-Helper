#!/bin/bash

# Deployment script to fix OAuth issue
echo "🚀 Deploying OAuth fix to production..."

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Fix: Google OAuth production URL routing

- Fix handleGoogleLogin to use hardcoded production URLs instead of env vars
- Ensure proper API URL detection for production environment
- Resolves 'Cannot GET /api/api/google/auth' error in production"

# Push to main branch (or whatever your default branch is)
git push origin main

echo "✅ Changes pushed to repository"
echo "🔄 Vercel should automatically deploy these changes"
echo ""
echo "📋 Next steps:"
echo "1. Wait for Vercel deployment to complete"
echo "2. Test Google OAuth at: https://student-helper-yave.vercel.app"
echo "3. Check browser console for any remaining issues"
echo ""
echo "🌐 Expected OAuth URL should be:"
echo "   https://student-helper-b5j4.onrender.com/api/google/auth?source=auth"
