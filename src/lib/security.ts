// Security utilities and configurations for HIV Crisis Support Platform

export const SECURITY_CONFIG = {
  // Content Security Policy
  CSP: {
    'default-src': ["'self'"],
    'script-src': [
      "'self'",
      "'unsafe-inline'", // Required for Next.js
      "'unsafe-eval'", // Required for development
      'https://www.google-analytics.com',
      'https://www.googletagmanager.com',
      'https://vercel.live',
    ],
    'style-src': [
      "'self'",
      "'unsafe-inline'", // Required for Tailwind CSS
      'https://fonts.googleapis.com',
    ],
    'font-src': [
      "'self'",
      'https://fonts.gstatic.com',
    ],
    'img-src': [
      "'self'",
      'data:',
      'https:',
      'blob:',
    ],
    'media-src': [
      "'self'",
      'data:',
      'https:',
    ],
    'connect-src': [
      "'self'",
      'https://www.google-analytics.com',
      'https://vitals.vercel-insights.com',
      'wss://ws.pusher.com', // For real-time features
    ],
    'frame-src': ["'none'"],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'frame-ancestors': ["'none'"],
    'upgrade-insecure-requests': [],
  },

  // Trusted domains for external resources
  TRUSTED_DOMAINS: [
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'www.google-analytics.com',
    'www.googletagmanager.com',
    'vercel.live',
    'vitals.vercel-insights.com',
  ],

  // Emergency exit configuration
  EMERGENCY_EXIT: {
    enabled: true,
    redirectUrl: 'https://www.google.com',
    keyboardShortcut: 'Ctrl+Shift+X',
  },

  // Rate limiting configuration
  RATE_LIMITS: {
    general: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
    },
    auth: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 5, // limit each IP to 5 auth requests per windowMs
    },
    crisis: {
      windowMs: 1 * 60 * 1000, // 1 minute
      max: 10, // limit crisis endpoint calls
    },
  },

  // Sensitive endpoints that require extra protection
  SENSITIVE_ENDPOINTS: [
    '/api/auth',
    '/api/crisis',
    '/api/emergency',
    '/admin-dashboard',
    '/authentication/profile',
  ],

  // Headers for security
  SECURITY_HEADERS: {
    'X-DNS-Prefetch-Control': 'on',
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
  },
};

// Generate CSP string from configuration
export function generateCSP(): string {
  return Object.entries(SECURITY_CONFIG.CSP)
    .map(([directive, sources]) => {
      if (sources.length === 0) return directive;
      return `${directive} ${sources.join(' ')}`;
    })
    .join('; ');
}

// Validate if a URL is from a trusted domain
export function isTrustedDomain(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return SECURITY_CONFIG.TRUSTED_DOMAINS.includes(urlObj.hostname);
  } catch {
    return false;
  }
}

// Sanitize user input to prevent XSS
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
}

// Generate nonce for inline scripts (if needed)
export function generateNonce(): string {
  return Buffer.from(crypto.getRandomValues(new Uint8Array(16))).toString('base64');
}

// Emergency exit function
export function triggerEmergencyExit(): void {
  if (typeof window !== 'undefined' && SECURITY_CONFIG.EMERGENCY_EXIT.enabled) {
    // Clear sensitive data
    localStorage.clear();
    sessionStorage.clear();
    
    // Clear cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    
    // Redirect to safe site
    window.location.replace(SECURITY_CONFIG.EMERGENCY_EXIT.redirectUrl);
  }
}

// Setup emergency exit keyboard shortcut
export function setupEmergencyExit(): void {
  if (typeof window !== 'undefined') {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'X') {
        event.preventDefault();
        triggerEmergencyExit();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Return cleanup function
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }
}

// Validate environment variables for security
export function validateSecurityConfig(): void {
  const requiredEnvVars = [
    'NEXTAUTH_SECRET',
    'NEXT_PUBLIC_APP_URL',
  ];

  const missingVars = requiredEnvVars.filter(
    (varName) => !process.env[varName]
  );

  if (missingVars.length > 0) {
    console.warn(
      `Missing required environment variables for security: ${missingVars.join(', ')}`
    );
  }

  // Warn if using default/weak secrets
  if (process.env.NEXTAUTH_SECRET === 'dev-secret-key-change-in-production') {
    console.warn('Using default NEXTAUTH_SECRET - change this in production!');
  }
}
