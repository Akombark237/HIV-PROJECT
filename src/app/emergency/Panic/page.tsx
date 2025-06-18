'use client';

import { useState, useEffect } from 'react';
import { 
  Shield, 
  Phone, 
  MapPin, 
  AlertTriangle, 
  Heart, 
  Users, 
  MessageCircle, 
  Settings, 
  Home, 
  Volume2,
  VolumeX,
  CheckCircle,
  Eye,
  EyeOff
} from 'lucide-react';

type ScreenType = 'home' | 'emergency' | 'support' | 'settings';

interface EmergencyContact {
  id: number;
  name: string;
  number: string;
  priority: number;
}

const HivGbvSupportApp = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [emergencyMode, setEmergencyMode] = useState(false);
  const [silentMode, setSilentMode] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [emergencyContacts] = useState<EmergencyContact[]>([
    { id: 1, name: 'Health Provider', number: '+237 123 456 789', priority: 1 },
    { id: 2, name: 'Police', number: '+237 117', priority: 2 },
    { id: 3, name: 'Trusted Friend', number: '+237 987 654 321', priority: 3 }
  ]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isCountingDown && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (isCountingDown && countdown === 0) {
      setEmergencyMode(true);
      setIsCountingDown(false);
      setCountdown(5);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isCountingDown, countdown]);

  const handlePanicButton = () => {
    setIsCountingDown(true);
  };

  const cancelEmergency = () => {
    setIsCountingDown(false);
    setCountdown(5);
  };

  const confirmEmergency = () => {
    setEmergencyMode(true);
    setIsCountingDown(false);
    setCountdown(5);
  };

  const HeaderComponent = () => (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white p-4 rounded-b-3xl shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold">SafeSpace</h1>
            <p className="text-xs opacity-90">HIV+ Support & Protection</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setSilentMode(!silentMode)}
            className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all"
          >
            {silentMode ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-xs font-medium">Online</span>
          </div>
        </div>
      </div>
    </div>
  );

  const EmergencyResponseScreen = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Emergency Response</h2>
        <p className="text-gray-600">Quick access to immediate help and support</p>
      </div>

      {/* Panic Button Section */}
      <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-3xl border border-red-100 shadow-lg">
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-bold text-red-800">Panic Button</h3>
          <p className="text-red-600 text-sm">Press and hold for immediate emergency assistance</p>
          
          {isCountingDown ? (
            <div className="space-y-4">
              <div className="bg-red-500 text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto text-3xl font-bold animate-pulse">
                {countdown}
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={cancelEmergency}
                  className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-2xl font-semibold hover:bg-gray-600 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmEmergency}
                  className="flex-1 bg-red-500 text-white py-3 px-6 rounded-2xl font-semibold hover:bg-red-600 transition-all"
                >
                  Send Now
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={handlePanicButton}
              className="bg-red-500 hover:bg-red-600 text-white w-32 h-32 rounded-full flex items-center justify-center mx-auto shadow-2xl transform hover:scale-105 transition-all duration-200 active:scale-95"
            >
              <div className="text-center">
                <AlertTriangle className="w-12 h-12 mx-auto mb-2" />
                <span className="text-sm font-bold">EMERGENCY</span>
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Silent Alarm Feature */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-3xl border border-blue-100 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              {silentMode ? <EyeOff className="w-6 h-6 text-blue-600" /> : <Eye className="w-6 h-6 text-blue-600" />}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-800">Silent Alarm</h4>
              <p className="text-blue-600 text-sm">Discreet emergency notification</p>
            </div>
          </div>
          <button
            onClick={() => setSilentMode(!silentMode)}
            className={`w-16 h-8 rounded-full p-1 transition-all duration-300 ${
              silentMode ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-lg transform transition-all duration-300 ${
                silentMode ? 'translate-x-8' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* GPS Location Sharing */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-3xl border border-green-100 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-800">Location Sharing</h4>
              <p className="text-green-600 text-sm">Share your location with emergency contacts</p>
            </div>
          </div>
          <button
            onClick={() => setLocationEnabled(!locationEnabled)}
            className={`w-16 h-8 rounded-full p-1 transition-all duration-300 ${
              locationEnabled ? 'bg-green-500' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-lg transform transition-all duration-300 ${
                locationEnabled ? 'translate-x-8' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Phone className="w-5 h-5 mr-2 text-purple-600" />
          Emergency Contacts
        </h4>
        <div className="space-y-3">
          {emergencyContacts.map((contact, index) => (
            <div key={contact.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                  index === 0 ? 'bg-purple-500' : index === 1 ? 'bg-red-500' : 'bg-blue-500'
                }`}>
                  {contact.priority}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{contact.name}</p>
                  <p className="text-gray-600 text-sm">{contact.number}</p>
                </div>
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-all">
                <Phone className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const HomeScreen = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to SafeSpace</h2>
        <p className="text-gray-600">Your secure platform for HIV+ support and GBV prevention</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => setCurrentScreen('emergency')}
          className="bg-gradient-to-br from-red-500 to-pink-500 text-white p-6 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
        >
          <AlertTriangle className="w-8 h-8 mx-auto mb-2" />
          <span className="text-sm font-semibold">Emergency</span>
        </button>
        <button className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-6 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          <Heart className="w-8 h-8 mx-auto mb-2" />
          <span className="text-sm font-semibold">Health Support</span>
        </button>
        <button className="bg-gradient-to-br from-green-500 to-emerald-500 text-white p-6 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          <Users className="w-8 h-8 mx-auto mb-2" />
          <span className="text-sm font-semibold">Community</span>
        </button>
        <button className="bg-gradient-to-br from-purple-500 to-violet-500 text-white p-6 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          <MessageCircle className="w-8 h-8 mx-auto mb-2" />
          <span className="text-sm font-semibold">Counseling</span>
        </button>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-2xl">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-sm font-medium text-gray-800">Health check-in completed</p>
              <p className="text-xs text-gray-600">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-2xl">
            <MessageCircle className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-sm font-medium text-gray-800">New message from counselor</p>
              <p className="text-xs text-gray-600">1 day ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const BottomNavigation = () => (
    <div className="bg-white border-t border-gray-200 p-4 rounded-t-3xl shadow-2xl">
      <div className="flex justify-around">
        {([
          { id: 'home' as const, icon: Home, label: 'Home' },
          { id: 'emergency' as const, icon: AlertTriangle, label: 'Emergency' },
          { id: 'support' as const, icon: Heart, label: 'Support' },
          { id: 'settings' as const, icon: Settings, label: 'Settings' }
        ] as const).map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentScreen(item.id)}
            className={`flex flex-col items-center space-y-1 p-2 rounded-2xl transition-all ${
              currentScreen === item.id
                ? 'bg-purple-100 text-purple-600'
                : 'text-gray-500 hover:text-purple-600 hover:bg-purple-50'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const EmergencyOverlay = () => (
    emergencyMode && (
      <div className="fixed inset-0 bg-red-500 bg-opacity-95 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-sm mx-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-bold text-red-800 mb-2">Emergency Alert Sent</h3>
          <p className="text-red-600 text-sm mb-6">
            Your emergency contacts have been notified and help is on the way.
          </p>
          <div className="space-y-3">
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Location shared</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Contacts notified</span>
            </div>
          </div>
          <button
            onClick={() => setEmergencyMode(false)}
            className="w-full bg-red-500 text-white py-3 px-6 rounded-2xl font-semibold mt-6 hover:bg-red-600 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      <div className="max-w-md mx-auto bg-white shadow-2xl min-h-screen relative">
        <HeaderComponent />
        
        <div className="p-6 pb-24">
          {currentScreen === 'home' && <HomeScreen />}
          {currentScreen === 'emergency' && <EmergencyResponseScreen />}
          {currentScreen === 'support' && (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 mx-auto text-blue-500 mb-4" />
              <h2 className="text-xl font-bold text-gray-800">Health Support</h2>
              <p className="text-gray-600 mt-2">Coming soon...</p>
            </div>
          )}
          {currentScreen === 'settings' && (
            <div className="text-center py-12">
              <Settings className="w-16 h-16 mx-auto text-purple-500 mb-4" />
              <h2 className="text-xl font-bold text-gray-800">Settings</h2>
              <p className="text-gray-600 mt-2">Coming soon...</p>
            </div>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <BottomNavigation />
        </div>

        <EmergencyOverlay />
      </div>
    </div>
  );
};

export default HivGbvSupportApp;