# Deployment Troubleshooting Guide

## Hostinger Deployment Settings

### Required Configuration
- **Repository**: `https://github.com/crispygoat/Storyboard-ai-marketing`
- **Branch**: `main`
- **Framework**: Next.js
- **Node Version**: 18.17.0 or higher (18.x or 20.x recommended)
- **Build Command**: `npm run build`
- **Output Directory**: `out`
- **Install Command**: `npm install` (default)

### Common 503 Error Fixes

#### 1. Clear Build Cache
In Hostinger:
- Go to your application settings
- Find "Clear Cache" or "Rebuild" option
- Clear all caches and trigger a fresh build

#### 2. Check Build Logs
- Review the build logs in Hostinger dashboard
- Look for any npm install or build errors
- Common issues:
  - Node version mismatch
  - Missing dependencies
  - Build timeout

#### 3. Verify Node Version
Make sure Hostinger is using Node 18.x or 20.x:
- Check in Application Settings
- `.nvmrc` file specifies 18.17.0
- `package.json` engines field requires >=18.17.0

#### 4. DNS Propagation (If Using Custom Domain)
If you just switched to storyboardaitool.com:
- DNS can take 24-48 hours to fully propagate
- Try accessing via:
  - Old temp URL (if still available)
  - Direct IP address
  - Wait and retry

#### 5. Check Environment Variables
Make sure no environment variables are required that weren't set

#### 6. Restart Application
In Hostinger dashboard:
- Stop the application
- Wait 30 seconds
- Start it again

### Testing Locally

To verify the build works:
```bash
# Install dependencies
npm install

# Run dev server (should work)
npm run dev

# Build for production
npm run build

# Check output directory
ls -la out/

# The out/ directory should contain:
# - index.html (your main page)
# - _next/ folder (Next.js assets)
# - 404.html (error page)
```

### Hostinger-Specific Notes

1. **First Deploy**: Initial deployment might take longer
2. **Build Timeout**: If build takes >10 minutes, contact Hostinger support
3. **Resource Limits**: Check if your hosting plan has sufficient resources
4. **Port Configuration**: Hostinger should auto-configure ports for Next.js

### Alternative: Deploy Static Export Only

If Hostinger continues having issues with Next.js:

1. Build locally:
   ```bash
   npm run build
   ```

2. Upload just the `out/` folder contents via FTP/SFTP

3. Point document root to uploaded files

4. This gives you a pure static site without Node.js

### Support Resources

- Hostinger Support: Check their Next.js deployment docs
- Test Build Status: Review build logs for specific errors
- Verify Repository Access: Ensure Hostinger can access your GitHub repo

## Verification Checklist

After deployment, verify:
- [ ] Site loads at your domain
- [ ] All CSS styles are applied correctly
- [ ] Images and fonts load properly
- [ ] All links work (navigation, CTAs)
- [ ] LemonSqueezy checkout link works
- [ ] Site is responsive on mobile
- [ ] No console errors in browser DevTools

## Getting Help

If issues persist:
1. Share build logs from Hostinger
2. Check Hostinger's status page
3. Contact Hostinger support with:
   - Your repo URL
   - Build command used
   - Error messages from logs
