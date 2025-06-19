// Custom server for HIV Crisis Support Platform on Render
// This server handles static files and provides better performance on Render

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = '0.0.0.0'; // Bind to all interfaces for Render
const port = process.env.PORT || 3000;

// Initialize Next.js app
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      // Security headers for all requests
      res.setHeader('X-Frame-Options', 'DENY');
      res.setHeader('X-XSS-Protection', '1; mode=block');
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('Referrer-Policy', 'origin-when-cross-origin');
      res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(self), interest-cohort=()');
      
      // HTTPS redirect in production
      if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https') {
        res.writeHead(301, {
          Location: `https://${req.headers.host}${req.url}`
        });
        res.end();
        return;
      }

      // Emergency exit redirect
      if (query.exit === 'true') {
        res.writeHead(302, {
          Location: 'https://www.google.com'
        });
        res.end();
        return;
      }

      // Handle service worker with proper headers
      if (pathname === '/sw.js') {
        res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
        res.setHeader('Service-Worker-Allowed', '/');
      }

      // Handle manifest with caching
      if (pathname === '/manifest.json') {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }

      // Handle static assets with long-term caching
      if (pathname.startsWith('/_next/static/') || pathname.startsWith('/icons/')) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }

      // Handle health check
      if (pathname === '/api/health') {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      }

      // Let Next.js handle the request
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  })
  .once('error', (err) => {
    console.error('Server error:', err);
    process.exit(1);
  })
  .listen(port, hostname, () => {
    console.log(`🏥 HIV Crisis Support Platform ready on http://${hostname}:${port}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
    console.log(`📞 Emergency Services: Police (117), Medical (115), Fire (118)`);
    console.log(`🚨 Crisis Hotline: ${process.env.NEXT_PUBLIC_CRISIS_HOTLINE || '+237-75-627-8901'}`);
    
    // Log important configuration
    if (process.env.NODE_ENV === 'production') {
      console.log('✅ Production mode - Security headers enabled');
      console.log('✅ HTTPS redirect enabled');
      console.log('✅ Static asset caching enabled');
    }
    
    // Warn about missing environment variables
    if (!process.env.NEXTAUTH_SECRET) {
      console.warn('⚠️  NEXTAUTH_SECRET not set - authentication may not work');
    }
    
    if (!process.env.NEXT_PUBLIC_APP_URL) {
      console.warn('⚠️  NEXT_PUBLIC_APP_URL not set - some features may not work correctly');
    }
  });
});
