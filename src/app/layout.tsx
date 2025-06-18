import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HIV Crisis Support - Cameroon",
  description: "Comprehensive HIV crisis support and gender-based violence management platform for Cameroon",
  keywords: ["HIV support", "GBV", "gender-based violence", "Cameroon", "crisis support", "healthcare", "emergency", "confidential"],
  authors: [{ name: "HIV Crisis Support Team" }],
  creator: "HIV Crisis Support Platform",
  publisher: "HIV Crisis Support - Cameroon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "HIV Support",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_CM",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://hiv-crisis-support.vercel.app",
    siteName: "HIV Crisis Support - Cameroon",
    title: "HIV Crisis Support - Cameroon",
    description: "Comprehensive HIV crisis support and gender-based violence management platform for Cameroon",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HIV Crisis Support Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HIV Crisis Support - Cameroon",
    description: "Comprehensive HIV crisis support and gender-based violence management platform for Cameroon",
    images: ["/twitter-image.png"],
    creator: "@HIVCrisisSupport",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="HIV Support" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="HIV Support" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50`}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>

        {/* Main content wrapper */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        {/* Offline indicator */}
        <div id="offline-indicator" className="hidden fixed bottom-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          <span className="text-sm font-medium">You are offline</span>
        </div>

        {/* Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Service Worker Registration
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }

              // Quick Exit Feature
              document.addEventListener('keydown', function(e) {
                if (e.ctrlKey && e.shiftKey && e.key === 'X') {
                  e.preventDefault();
                  window.location.href = 'https://www.google.com';
                }
              });

              // Network Status
              function updateOnlineStatus() {
                const indicator = document.getElementById('offline-indicator');
                if (navigator.onLine) {
                  indicator.classList.add('hidden');
                } else {
                  indicator.classList.remove('hidden');
                }
              }

              window.addEventListener('online', updateOnlineStatus);
              window.addEventListener('offline', updateOnlineStatus);
              updateOnlineStatus();
            `,
          }}
        />
      </body>
    </html>
  );
}
