# PowerShell deployment script to fix OAuth issue
Write-Host "🚀 Deploying OAuth fix to production..." -ForegroundColor Green

# Navigate to project directory (adjust if needed)
Set-Location "C:\Users\SAGAR\Desktop\Student-Helper"

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Fix: Google OAuth production URL routing

- Fix handleGoogleLogin to use hardcoded production URLs instead of env vars
- Ensure proper API URL detection for production environment  
- Resolves 'Cannot GET /api/api/google/auth' error in production"

# Push to main branch (or whatever your default branch is)
git push origin main

Write-Host "✅ Changes pushed to repository" -ForegroundColor Green
Write-Host "🔄 Vercel should automatically deploy these changes" -ForegroundColor Yellow
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. Wait for Vercel deployment to complete"
Write-Host "2. Test Google OAuth at: https://student-helper-yave.vercel.app"
Write-Host "3. Check browser console for any remaining issues"
Write-Host ""
Write-Host "🌐 Expected OAuth URL should be:" -ForegroundColor Magenta
Write-Host "   https://student-helper-b5j4.onrender.com/api/google/auth?source=auth"
