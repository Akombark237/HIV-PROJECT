import { Heart, Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="text-center">
        {/* Loading Animation */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Outer spinning ring */}
            <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            
            {/* Inner heart icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Heart className="w-8 h-8 text-blue-600 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Loading HIV Crisis Support</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Preparing your secure access to crisis support services...
        </p>

        {/* Progress Indicators */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Establishing secure connection</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Loading emergency services</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Preparing crisis support tools</span>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 max-w-md mx-auto">
          <p className="text-red-800 text-sm font-medium mb-2">
            Need immediate help while loading?
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="tel:117"
              className="text-red-600 hover:text-red-800 font-semibold text-sm"
            >
              Emergency: 117
            </a>
            <a
              href="tel:+237-75-627-8901"
              className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
            >
              Crisis Hotline
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-xs text-gray-400">
          <p>HIV Crisis Support Platform - Cameroon</p>
        </div>
      </div>
    </div>
  );
}
