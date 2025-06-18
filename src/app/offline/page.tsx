'use client';

import { useState, useEffect } from 'react';
import { 
  WifiOff, 
  RefreshCw, 
  Phone, 
  AlertTriangle, 
  Heart, 
  Shield, 
  Clock, 
  CheckCircle,
  Download,
  FileText,
  Users,
  MessageCircle
} from 'lucide-react';

const OfflinePage = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [lastSync, setLastSync] = useState<string | null>(null);

  useEffect(() => {
    // Check online status
    setIsOnline(navigator.onLine);

    // Listen for online/offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Get last sync time from localStorage
    const lastSyncTime = localStorage.getItem('lastSync');
    if (lastSyncTime) {
      setLastSync(new Date(lastSyncTime).toLocaleString());
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleRetry = () => {
    if (isOnline) {
      window.location.reload();
    }
  };

  const emergencyContacts = [
    {
      name: 'Emergency Services',
      number: '117',
      description: 'Police, Fire, Medical Emergency'
    },
    {
      name: 'HIV Crisis Hotline',
      number: '+237-75-627-8901',
      description: '24/7 HIV and GBV support'
    },
    {
      name: 'National GBV Hotline',
      number: '+237-80-9999-9999',
      description: 'Gender-based violence support'
    }
  ];

  const offlineFeatures = [
    {
      title: 'Emergency Contacts',
      description: 'Access critical phone numbers even offline',
      icon: Phone,
      available: true
    },
    {
      title: 'Safety Planning',
      description: 'View and update your personal safety plan',
      icon: Shield,
      available: true
    },
    {
      title: 'Educational Content',
      description: 'Access downloaded educational materials',
      icon: FileText,
      available: true
    },
    {
      title: 'Crisis Protocols',
      description: 'Step-by-step emergency response guides',
      icon: AlertTriangle,
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className={`p-4 rounded-full ${isOnline ? 'bg-green-100' : 'bg-red-100'}`}>
              {isOnline ? (
                <CheckCircle className="w-12 h-12 text-green-500" />
              ) : (
                <WifiOff className="w-12 h-12 text-red-500" />
              )}
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isOnline ? 'Connection Restored' : 'You\'re Offline'}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isOnline 
              ? 'Your internet connection has been restored. You can now access all features.'
              : 'Don\'t worry - you can still access essential features and emergency contacts while offline.'
            }
          </p>
          {lastSync && (
            <p className="text-sm text-gray-500 mt-2">
              Last synced: {lastSync}
            </p>
          )}
        </div>

        {/* Connection Status */}
        <div className={`mb-8 p-6 rounded-2xl ${isOnline ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200'} border-2`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
              <span className={`font-medium ${isOnline ? 'text-green-800' : 'text-yellow-800'}`}>
                {isOnline ? 'Online' : 'Offline Mode'}
              </span>
            </div>
            <button
              onClick={handleRetry}
              disabled={!isOnline}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isOnline 
                  ? 'bg-green-500 text-white hover:bg-green-600' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <RefreshCw className="w-4 h-4" />
              <span>{isOnline ? 'Reload Page' : 'Waiting for Connection'}</span>
            </button>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Emergency Contacts</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Phone className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.name}</h3>
                <a 
                  href={`tel:${contact.number}`}
                  className="text-2xl font-bold text-red-600 hover:text-red-800 block mb-2"
                >
                  {contact.number}
                </a>
                <p className="text-sm text-gray-600">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Offline Features */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Available Offline</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {offlineFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl p-6 shadow-lg ${
                    feature.available ? 'hover:shadow-xl cursor-pointer' : 'opacity-50'
                  } transition-all duration-300`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${
                      feature.available ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        feature.available ? 'text-blue-500' : 'text-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                      {feature.available && (
                        <div className="mt-3">
                          <span className="inline-flex items-center space-x-1 text-sm text-green-600 font-medium">
                            <CheckCircle className="w-4 h-4" />
                            <span>Available</span>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Offline Tips */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Offline Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">What You Can Do</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Call emergency contacts directly</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Access downloaded educational content</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Review your safety plan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Use crisis response protocols</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">When You're Back Online</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span className="text-gray-700">Your data will automatically sync</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MessageCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span className="text-gray-700">Pending messages will be sent</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Download className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span className="text-gray-700">New content will be downloaded</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-blue-500 mt-0.5" />
                  <span className="text-gray-700">You can access all communication tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Safety Notice */}
        <div className="mt-8 bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold text-red-800 mb-2">Emergency Safety Notice</h3>
              <p className="text-red-700">
                If you are in immediate danger, please call emergency services (199) or use any available phone to contact local authorities. 
                Your safety is the top priority, regardless of internet connectivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfflinePage;
