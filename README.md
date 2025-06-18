# 🏥 HIV Crisis Support Platform - Cameroon

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/hiv-crisis-support)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/hiv-crisis-support)

> **⚠️ Critical Healthcare Platform**: This application provides life-saving crisis support and emergency services for People Living with HIV (PLHIV) in Cameroon.

## 🎯 Mission

Provide comprehensive, secure, and accessible crisis support for HIV patients experiencing or at risk of gender-based violence, with integrated healthcare services and emergency response capabilities.

## ✨ Key Features

### 🚨 Crisis Support
- **24/7 Emergency Hotlines** (+237 format)
- **Panic Button** with quick exit (Ctrl+Shift+X)
- **Anonymous Crisis Chat** for confidential support
- **Safety Planning Tools** for personal protection

### 🏥 Medical Integration
- **HIV Care Coordination** with healthcare providers
- **Appointment Scheduling** and reminders
- **Medication Adherence** tracking
- **Telemedicine** capabilities

### 🛡️ Safety & Security
- **End-to-end Encryption** for all communications
- **Anonymous Usage** options
- **Quick Exit** functionality
- **Offline Emergency** access

### 🌍 Accessibility
- **Multi-language Support** (English/French)
- **Screen Reader** compatibility
- **High Contrast** mode
- **Mobile-first** responsive design

### 📱 Progressive Web App
- **Offline Functionality** for emergency access
- **Push Notifications** for important updates
- **App-like Experience** on mobile devices
- **Background Sync** for offline actions

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+
- **npm** 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/hiv-crisis-support.git
cd hiv-crisis-support

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Environment Setup

Create `.env.local` with required variables:

```bash
# Application Configuration
NEXT_PUBLIC_APP_NAME="HIV Crisis Support - Cameroon"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Emergency Services (Cameroon)
NEXT_PUBLIC_EMERGENCY_POLICE="117"
NEXT_PUBLIC_EMERGENCY_MEDICAL="115"
NEXT_PUBLIC_CRISIS_HOTLINE="+237-75-627-8901"

# Security
NEXTAUTH_SECRET="your-secret-key-here"
```

## 🏗️ Technology Stack

### Frontend
- **Next.js 15.3.3** - React framework with App Router
- **React 19** - Latest React with modern features
- **TypeScript 5** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling

### Performance & SEO
- **Server-Side Rendering** (SSR)
- **Static Site Generation** (SSG)
- **Image Optimization** with Next.js Image
- **Bundle Analysis** and optimization

### Security
- **Content Security Policy** (CSP)
- **Security Headers** implementation
- **Rate Limiting** for sensitive endpoints
- **Input Sanitization** and validation

### PWA Features
- **Service Worker** for offline functionality
- **Web App Manifest** for installation
- **Background Sync** for offline actions
- **Push Notifications** support

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── crisis-support/    # Emergency crisis intervention
│   ├── medical-support/   # Healthcare integration
│   ├── hiv-care-integration/ # HIV-specific care
│   ├── safety-security/   # Safety planning tools
│   ├── communication-tools/ # Secure messaging
│   ├── providers/         # Service provider directory
│   └── ...
├── components/            # Reusable UI components
├── lib/                   # Utility functions and configs
└── middleware.ts          # Security and routing middleware

public/
├── icons/                 # PWA icons and favicons
├── manifest.json          # PWA manifest
├── sw.js                  # Service worker
└── robots.txt             # SEO configuration
```

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server

# Quality Assurance
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
npm run type-check      # TypeScript type checking

# Deployment
npm run build:analyze   # Analyze bundle size
npm run export          # Export static files
npm run deploy:vercel   # Deploy to Vercel
npm run deploy:netlify  # Deploy to Netlify
```

### Code Quality

- **ESLint** with Next.js configuration
- **TypeScript** strict mode
- **Prettier** code formatting
- **Husky** pre-commit hooks

## 🚀 Deployment

### Quick Deploy

#### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

#### Netlify
```bash
npm i -g netlify-cli
npm run build && npm run export
netlify deploy --prod --dir=out
```

### Detailed Deployment Guide

See [DEPLOYMENT.md](./DEPLOYMENT.md) for comprehensive deployment instructions including:
- Platform-specific configurations
- Environment variable setup
- Security considerations
- Performance optimization
- Monitoring and health checks

## 🔒 Security Features

### Data Protection
- **End-to-end Encryption** for sensitive communications
- **No Location Tracking** without explicit consent
- **Anonymous Registration** options
- **Secure Data Storage** with encryption

### Emergency Features
- **Quick Exit** (Ctrl+Shift+X) clears data and redirects
- **Panic Button** for immediate help
- **Offline Emergency** contacts always available
- **Secure Communication** channels

## 🌍 Localization

### Supported Languages
- **English** (Primary)
- **French** (Secondary)

### Regional Adaptations
- **Cameroon Phone Numbers** (+237 format)
- **Local Emergency Services** (117, 115, 118)
- **Cultural Sensitivity** in content and design
- **Regional Service Providers** integration

## 📊 Performance

### Optimization Features
- **Code Splitting** for faster loading
- **Image Optimization** with WebP/AVIF
- **Caching Strategies** for static assets
- **Bundle Analysis** and tree shaking

### Monitoring
- **Lighthouse CI** for performance tracking
- **Core Web Vitals** monitoring
- **Error Tracking** with comprehensive logging
- **Health Checks** for uptime monitoring

## 🤝 Contributing

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** changes (`git commit -m 'Add amazing feature'`)
4. **Push** to branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards

- Follow **TypeScript** best practices
- Use **semantic commit** messages
- Ensure **accessibility** compliance
- Test on **multiple devices** and browsers
- Maintain **security** standards

## 📞 Emergency Contacts (Cameroon)

- **Police Emergency**: 117
- **Medical Emergency**: 115
- **Fire Emergency**: 118
- **Crisis Hotline**: +237-75-627-8901
- **GBV Support**: +237-80-9999-9999

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Healthcare Providers** in Cameroon
- **Crisis Support Organizations**
- **Open Source Community**
- **Accessibility Advocates**

## 📞 Support

For technical support or deployment issues:
- Create an issue in this repository
- Contact the development team
- Check the [DEPLOYMENT.md](./DEPLOYMENT.md) guide

---

**⚠️ Important**: This platform provides critical healthcare services. Always test thoroughly and maintain high security standards.
