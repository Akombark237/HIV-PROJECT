# 🚀 HIV Crisis Support Platform - Deployment Guide

## 📋 Overview

This guide covers deploying the HIV Crisis Support Platform to various hosting providers. The platform is optimized for **Vercel** (recommended) and **Netlify**, with support for other platforms.

## 🎯 Quick Deploy

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/hiv-crisis-support)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/hiv-crisis-support)

## 🔧 Prerequisites

- **Node.js** 18+ 
- **npm** 9+
- **Git** for version control
- Platform account (Vercel/Netlify)

## 📦 Environment Variables

### Required Variables

```bash
# Application Configuration
NEXT_PUBLIC_APP_NAME="HIV Crisis Support - Cameroon"
NEXT_PUBLIC_APP_VERSION="1.0.0"
NEXT_PUBLIC_APP_URL="https://your-domain.com"
NEXT_PUBLIC_ENVIRONMENT="production"

# Emergency Services (Cameroon)
NEXT_PUBLIC_EMERGENCY_POLICE="117"
NEXT_PUBLIC_EMERGENCY_MEDICAL="115"
NEXT_PUBLIC_EMERGENCY_FIRE="118"
NEXT_PUBLIC_CRISIS_HOTLINE="+237-75-627-8901"

# Security
NEXTAUTH_SECRET="your-super-secret-key-here"
NEXTAUTH_URL="https://your-domain.com"
```

### Optional Variables

```bash
# Analytics & Monitoring
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID="GA-XXXXXXXXX"
NEXT_PUBLIC_SENTRY_DSN="your-sentry-dsn"

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS="true"
NEXT_PUBLIC_ENABLE_PWA="true"
NEXT_PUBLIC_ENABLE_OFFLINE_MODE="true"
```

## 🌐 Platform-Specific Deployment

### Vercel Deployment

#### Method 1: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to staging
vercel

# Deploy to production
vercel --prod
```

#### Method 2: Git Integration

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Push to `main` branch for automatic deployment

#### Vercel Configuration

The project includes `vercel.json` with:
- Security headers
- Caching strategies
- Redirects and rewrites
- Function timeouts

### Netlify Deployment

#### Method 1: Netlify CLI

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login to Netlify
netlify login

# Build and deploy
npm run build
npm run export
netlify deploy --dir=out

# Deploy to production
netlify deploy --prod --dir=out
```

#### Method 2: Git Integration

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build && npm run export`
3. Set publish directory: `out`
4. Set environment variables in Netlify dashboard

#### Netlify Configuration

The project includes `netlify.toml` with:
- Build settings
- Security headers
- Redirects
- Plugin configuration

### Other Platforms

#### AWS Amplify

```bash
# Install Amplify CLI
npm i -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

#### Digital Ocean App Platform

1. Create new app from GitHub repository
2. Set build command: `npm run build`
3. Set run command: `npm start`
4. Configure environment variables

## 🔒 Security Configuration

### Environment Variables Setup

1. **Never commit** `.env.local` or `.env.production`
2. Use platform-specific environment variable settings
3. Generate strong `NEXTAUTH_SECRET`:

```bash
openssl rand -base64 32
```

### Security Headers

All platforms are configured with:
- Content Security Policy (CSP)
- X-Frame-Options: DENY
- X-XSS-Protection
- Strict Transport Security
- Referrer Policy

## 📊 Performance Optimization

### Build Optimization

```bash
# Analyze bundle size
npm run build:analyze

# Check build output
npm run build

# Test production build locally
npm run start
```

### Caching Strategy

- **Static assets**: 1 year cache
- **Service Worker**: No cache (always fresh)
- **API responses**: Custom cache headers
- **Images**: Optimized with Next.js Image

## 🔍 Monitoring & Analytics

### Health Checks

```bash
# Check deployment health
curl -f https://your-domain.com/api/health

# Check service worker
curl -f https://your-domain.com/sw.js
```

### Performance Monitoring

- **Lighthouse CI** in GitHub Actions
- **Core Web Vitals** tracking
- **Error tracking** with Sentry (optional)
- **Analytics** with Google Analytics (optional)

## 🚨 Emergency Procedures

### Quick Rollback

#### Vercel
```bash
# List deployments
vercel ls

# Promote previous deployment
vercel promote [deployment-url] --scope=team
```

#### Netlify
```bash
# List deployments
netlify api listSiteDeploys --data='{"site_id":"your-site-id"}'

# Restore deployment
netlify api restoreSiteDeploy --data='{"site_id":"your-site-id","deploy_id":"deploy-id"}'
```

### Emergency Maintenance

1. Enable maintenance mode in platform dashboard
2. Update DNS to point to maintenance page
3. Notify users via social media/email

## 📋 Deployment Checklist

### Pre-Deployment

- [ ] Run `npm run lint` and fix issues
- [ ] Run `npm run type-check` and fix errors
- [ ] Test build locally with `npm run build && npm run start`
- [ ] Update environment variables
- [ ] Test emergency contact numbers
- [ ] Verify PWA functionality

### Post-Deployment

- [ ] Test all critical pages
- [ ] Verify emergency hotlines work
- [ ] Check PWA installation
- [ ] Test offline functionality
- [ ] Run Lighthouse audit
- [ ] Monitor error logs
- [ ] Update DNS if needed

## 🔧 Troubleshooting

### Common Issues

#### Build Failures

```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

#### Environment Variable Issues

```bash
# Check environment variables
npm run env:check

# Verify in browser console
console.log(process.env.NEXT_PUBLIC_APP_NAME)
```

#### Service Worker Issues

```bash
# Clear service worker cache
# In browser DevTools > Application > Storage > Clear storage
```

### Support

For deployment issues:
1. Check platform status pages
2. Review build logs
3. Test locally first
4. Contact platform support if needed

## 📚 Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [PWA Best Practices](https://web.dev/pwa-checklist/)

---

**⚠️ Important**: This platform provides critical healthcare services. Always test thoroughly before deploying to production and maintain backup deployment options.
