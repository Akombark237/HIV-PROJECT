'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home, Phone, Bug } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
    
    // In production, you would send this to your error tracking service
    if (process.env.NODE_ENV === 'production') {
      // Example: Sentry, LogRocket, etc.
      // errorTrackingService.captureException(error);
    }
  }, [error]);

  const handleReportError = () => {
    // Create error report
    const errorReport = {
      message: error.message,
      stack: error.stack,
      digest: error.digest,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    // In a real app, this would send to your error reporting endpoint
    console.log('Error report:', errorReport);
    
    // For now, we'll copy to clipboard
    navigator.clipboard.writeText(JSON.stringify(errorReport, null, 2))
      .then(() => {
        alert('Error report copied to clipboard. Please share this with our support team.');
      })
      .catch(() => {
        alert('Unable to copy error report. Please manually report this issue.');
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-6 bg-red-100 rounded-full">
            <AlertTriangle className="w-16 h-16 text-red-600" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Something went wrong</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          We encountered an unexpected error. Don't worry - our crisis support services are still available.
        </p>

        {/* Emergency Notice */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-center mb-4">
            <Phone className="w-6 h-6 text-red-600 mr-2" />
            <h3 className="text-lg font-bold text-red-800">Need Immediate Help?</h3>
          </div>
          <p className="text-red-700 mb-4">
            If you need emergency assistance, please use these direct contact methods:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="tel:117"
              className="flex items-center justify-center space-x-2 bg-red-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Emergency: 117</span>
            </a>
            <a
              href="tel:+237-75-627-8901"
              className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Crisis Hotline</span>
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <button
            onClick={reset}
            className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Try Again</span>
          </button>
          
          <Link
            href="/"
            className="flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          
          <button
            onClick={handleReportError}
            className="flex items-center justify-center space-x-2 bg-gray-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-gray-600 transition-colors"
          >
            <Bug className="w-5 h-5" />
            <span>Report Error</span>
          </button>
        </div>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-gray-100 rounded-2xl p-6 mb-8 text-left">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Error Details (Development)</h3>
            <div className="bg-white rounded-lg p-4 overflow-auto">
              <p className="text-sm text-red-600 font-mono mb-2">
                <strong>Message:</strong> {error.message}
              </p>
              {error.digest && (
                <p className="text-sm text-gray-600 font-mono mb-2">
                  <strong>Digest:</strong> {error.digest}
                </p>
              )}
              {error.stack && (
                <details className="mt-4">
                  <summary className="text-sm font-semibold text-gray-700 cursor-pointer">
                    Stack Trace
                  </summary>
                  <pre className="text-xs text-gray-600 mt-2 overflow-auto">
                    {error.stack}
                  </pre>
                </details>
              )}
            </div>
          </div>
        )}

        {/* Alternative Access */}
        <div className="bg-blue-50 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-blue-800 mb-4">Alternative Access</h3>
          <p className="text-blue-700 mb-4">
            You can still access our services through these direct links:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link href="/crisis-support" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Crisis Support
            </Link>
            <Link href="/medical-support" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Medical Support
            </Link>
            <Link href="/safety-security" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Safety Planning
            </Link>
            <Link href="/offline" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Offline Mode
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-sm text-gray-500">
          <p>HIV Crisis Support Platform - Cameroon</p>
          <p>We're working to resolve this issue. Emergency services remain available.</p>
        </div>
      </div>
    </div>
  );
}
