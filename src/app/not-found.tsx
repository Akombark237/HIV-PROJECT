'use client';

import Link from 'next/link';
import { Home, Phone, AlertTriangle, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-6 bg-blue-100 rounded-full">
            <AlertTriangle className="w-16 h-16 text-blue-600" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Don't worry - you can still access all our crisis support services.
        </p>

        {/* Emergency Notice */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-center mb-4">
            <Phone className="w-6 h-6 text-red-600 mr-2" />
            <h3 className="text-lg font-bold text-red-800">Need Immediate Help?</h3>
          </div>
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

        {/* Navigation Options */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Link
            href="/"
            className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          
          <Link
            href="/crisis-support"
            className="flex items-center justify-center space-x-2 bg-red-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-red-600 transition-colors"
          >
            <AlertTriangle className="w-5 h-5" />
            <span>Crisis Support</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center space-x-2 bg-gray-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-gray-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Quick Access Links */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link href="/medical-support" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Medical Support
            </Link>
            <Link href="/hiv-care-integration" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              HIV Care
            </Link>
            <Link href="/safety-security" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Safety Planning
            </Link>
            <Link href="/support-resources" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Find Resources
            </Link>
            <Link href="/communication-tools" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Secure Chat
            </Link>
            <Link href="/educational-content" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Education
            </Link>
            <Link href="/GBV/Hub" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              GBV Support
            </Link>
            <Link href="/help-support" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Help & FAQ
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-sm text-gray-500">
          <p>HIV Crisis Support Platform - Cameroon</p>
          <p>Available 24/7 for emergency support</p>
        </div>
      </div>
    </div>
  );
}
