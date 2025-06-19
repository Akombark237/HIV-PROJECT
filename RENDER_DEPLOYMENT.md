# 🚀 HIV Crisis Support Platform - Render Deployment Guide

## 📋 Overview

This guide covers deploying the HIV Crisis Support Platform to **Render.com**, a modern cloud platform that provides easy deployment with automatic builds, SSL certificates, and global CDN.

## 🎯 Why Render?

- **Easy Deployment**: Git-based deployments with automatic builds
- **Free SSL**: Automatic HTTPS certificates
- **Global CDN**: Fast content delivery worldwide
- **Auto-scaling**: Automatic scaling based on traffic
- **Health Monitoring**: Built-in health checks and monitoring
- **Environment Management**: Easy environment variable management

## 🚀 Quick Deploy

### Option 1: One-Click Deploy

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/Akombark237/HIV-PROJECT)

### Option 2: Manual Setup

1. **Fork/Clone Repository**
   ```bash
   git clone https://github.com/Akombark237/HIV-PROJECT.git
   cd HIV-PROJECT
   ```

2. **Create Render Account**
   - Visit [render.com](https://render.com)
   - Sign up with GitHub account

3. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the HIV-PROJECT repository

## 🔧 Render Configuration

### Service Settings

```yaml
Name: hiv-crisis-support-cameroon
Runtime: Node
Region: Oregon (or closest to your users)
Branch: main
Build Command: npm ci && npm run build
Start Command: npm start
```

### Environment Variables

Set these in your Render dashboard:

#### Required Variables
```bash
NODE_ENV=production
NEXT_PUBLIC_APP_NAME="HIV Crisis Support - Cameroon"
NEXT_PUBLIC_APP_VERSION="1.0.0"
NEXT_PUBLIC_ENVIRONMENT=production
RENDER=true

# Emergency Services (Cameroon)
NEXT_PUBLIC_EMERGENCY_POLICE=117
NEXT_PUBLIC_EMERGENCY_MEDICAL=115
NEXT_PUBLIC_EMERGENCY_FIRE=118
NEXT_PUBLIC_CRISIS_HOTLINE="+237-75-627-8901"

# Localization
NEXT_PUBLIC_DEFAULT_LOCALE=en
NEXT_PUBLIC_SUPPORTED_LOCALES="en,fr"
NEXT_PUBLIC_DEFAULT_TIMEZONE="Africa/Douala"

# Features
NEXT_PUBLIC_ENABLE_PWA=true
NEXT_PUBLIC_ENABLE_OFFLINE_MODE=true
```

#### Secret Variables (Generate these)
```bash
# Generate with: openssl rand -base64 32
NEXTAUTH_SECRET=your-super-secret-key-here

# Your Render app URL (e.g., https://your-app.onrender.com)
NEXT_PUBLIC_APP_URL=https://your-app-name.onrender.com
```

#### Optional Variables
```bash
# Analytics (if using)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX

# Error tracking (if using)
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn

# Database (if using)
DATABASE_URL=postgresql://username:password@hostname:port/database
```

## 📁 Project Structure for Render

The project includes these Render-specific files:

```
├── render.yaml                 # Render service configuration
├── server.js                   # Custom server for better performance
├── .env.render                 # Environment variables template
├── scripts/deploy-render.sh    # Deployment script
└── src/app/api/
    ├── health/route.ts         # Health check endpoint
    └── status/route.ts         # Detailed status endpoint
```

## 🔍 Health Checks

Render automatically monitors your application using:

- **Health Check Path**: `/api/health`
- **Status Endpoint**: `/api/status` (detailed monitoring)

### Health Check Response
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "service": "HIV Crisis Support - Cameroon",
  "version": "1.0.0",
  "uptime": 3600,
  "checks": {
    "server": "ok",
    "emergencyServices": {
      "police": "ok",
      "medical": "ok",
      "crisis": "ok"
    }
  }
}
```

## 🚀 Deployment Process

### Automatic Deployment

1. **Push to GitHub**: Any push to `main` branch triggers deployment
   ```bash
   git add .
   git commit -m "Deploy to Render"
   git push origin main
   ```

2. **Monitor Deployment**: Check progress in Render dashboard

### Manual Deployment Script

Use the provided deployment script:

```bash
# Make script executable (Linux/Mac)
chmod +x scripts/deploy-render.sh

# Run deployment
./scripts/deploy-render.sh deploy

# Or just run checks
./scripts/deploy-render.sh check
```

## 🔒 Security Configuration

### Automatic Security Features

- **HTTPS Enforcement**: Automatic SSL certificates
- **Security Headers**: Configured in `server.js`
- **CORS Protection**: Proper CORS headers
- **Emergency Exit**: Quick exit functionality (Ctrl+Shift+X)

### Security Headers Applied
```
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Referrer-Policy: origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(self)
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## 📊 Performance Optimization

### Render Optimizations

- **Static Asset Caching**: Long-term caching for static files
- **Service Worker**: Offline functionality
- **Image Optimization**: Next.js image optimization
- **Bundle Splitting**: Automatic code splitting

### Performance Monitoring

Monitor your app performance:
- **Render Dashboard**: Built-in metrics
- **Health Endpoints**: `/api/health` and `/api/status`
- **Lighthouse**: Regular performance audits

## 🌍 Custom Domain Setup

1. **Add Custom Domain** in Render dashboard
2. **Update DNS** records:
   ```
   Type: CNAME
   Name: your-domain.com
   Value: your-app.onrender.com
   ```
3. **Update Environment Variable**:
   ```bash
   NEXT_PUBLIC_APP_URL=https://your-domain.com
   ```

## 🔧 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Check build logs in Render dashboard
# Common fixes:
npm ci --production=false
npm run build
```

#### Environment Variable Issues
```bash
# Verify in Render dashboard
# Check /api/status endpoint for configuration
curl https://your-app.onrender.com/api/status
```

#### Health Check Failures
```bash
# Test health endpoint
curl https://your-app.onrender.com/api/health

# Check server logs in Render dashboard
```

### Debug Mode

Enable debug logging by adding:
```bash
DEBUG=true
NEXT_PUBLIC_SHOW_DEBUG_INFO=true
```

## 📞 Emergency Services Verification

After deployment, verify emergency services:

1. **Test Emergency Numbers**:
   - Police: 117
   - Medical: 115
   - Fire: 118
   - Crisis: +237-75-627-8901

2. **Check Status Endpoint**:
   ```bash
   curl https://your-app.onrender.com/api/status
   ```

3. **Verify PWA Installation**:
   - Visit your app on mobile
   - Check "Add to Home Screen" option

## 💰 Render Pricing

### Free Tier
- **750 hours/month** of usage
- **Automatic sleep** after 15 minutes of inactivity
- **Perfect for testing** and low-traffic applications

### Paid Plans
- **Starter ($7/month)**: No sleep, custom domains
- **Standard ($25/month)**: More resources, priority support
- **Pro ($85/month)**: High performance, advanced features

## 📈 Scaling Considerations

### Horizontal Scaling
- Render automatically scales based on traffic
- Configure auto-scaling in service settings

### Database Scaling
- Use Render PostgreSQL for data persistence
- Consider Redis for session storage

### CDN and Caching
- Render includes global CDN
- Configure caching headers for optimal performance

## 🎯 Post-Deployment Checklist

- [ ] **Application loads** correctly
- [ ] **Emergency services** are accessible
- [ ] **PWA installation** works
- [ ] **Offline mode** functions
- [ ] **Health checks** pass
- [ ] **Custom domain** configured (if applicable)
- [ ] **SSL certificate** active
- [ ] **Environment variables** set correctly
- [ ] **Performance** meets requirements

## 📞 Support

### Render Support
- **Documentation**: [render.com/docs](https://render.com/docs)
- **Community**: [community.render.com](https://community.render.com)
- **Status**: [status.render.com](https://status.render.com)

### Application Support
- **Health Check**: `https://your-app.onrender.com/api/health`
- **Status**: `https://your-app.onrender.com/api/status`
- **GitHub Issues**: [HIV-PROJECT Issues](https://github.com/Akombark237/HIV-PROJECT/issues)

---

**🏥 Your HIV Crisis Support Platform is now ready to save lives on Render! 💙**

The platform provides critical healthcare services with professional-grade reliability and security.
