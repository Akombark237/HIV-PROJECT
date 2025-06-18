'use client';

import { useState } from 'react';
import { 
  Shield, 
  Heart, 
  Phone, 
  MessageCircle, 
  User, 
  Settings, 
  AlertTriangle, 
  Lock, 
  Eye, 
  EyeOff, 
  Globe, 
  Bell, 
  Download,
  Trash2,
  MapPin,
  FileText,
  HelpCircle,
  Users,
  BookOpen,
  ChevronRight,
  Menu,
  X,
  Home,
  UserPlus,
  LogIn
} from 'lucide-react';

type ScreenType = 'welcome' | 'login' | 'register' | 'dashboard' | 'profile' | 'emergency' | 'support' | 'hotline' | 'chat' | 'community' | 'resources' | 'services' | 'safety';

interface UserProfile {
  name: string;
  language: string;
  notifications: boolean;
  emergencyContact: string;
  safetyPlan: string;
  preferredServices: string[];
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  onClick: () => void;
}

const HIVGBVSupportApp = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('welcome');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: '',
    language: 'en',
    notifications: true,
    emergencyContact: '',
    safetyPlan: '',
    preferredServices: []
  });



  // Welcome Screen
  const WelcomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex flex-col items-center justify-center p-6 text-white">
      <div className="text-center mb-8 animate-pulse">
        <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Shield className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-4">SafeConnect</h1>
        <p className="text-xl opacity-90">Supporting HIV+ Individuals Against GBV</p>
      </div>
      
      <div className="w-full max-w-md space-y-4">
        <button 
          onClick={() => setCurrentScreen('login')}
          className="w-full bg-white/20 backdrop-blur-sm border border-white/30 py-4 px-6 rounded-2xl font-semibold hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-3"
        >
          <LogIn className="w-5 h-5" />
          Sign In
        </button>
        <button 
          onClick={() => setCurrentScreen('register')}
          className="w-full bg-white text-purple-600 py-4 px-6 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3"
        >
          <UserPlus className="w-5 h-5" />
          Create Account
        </button>
        <button 
          onClick={() => setCurrentScreen('emergency')}
          className="w-full bg-red-500/80 backdrop-blur-sm py-4 px-6 rounded-2xl font-semibold hover:bg-red-600/80 transition-all duration-300 flex items-center justify-center gap-3"
        >
          <AlertTriangle className="w-5 h-5" />
          Emergency Access
        </button>
      </div>
    </div>
  );

  // Login Screen
  const LoginScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex flex-col items-center justify-center p-6 text-white">
      <div className="w-full max-w-md">
        <button 
          onClick={() => setCurrentScreen('welcome')}
          className="mb-6 text-white/80 hover:text-white transition-colors"
        >
          ← Back
        </button>
        
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Secure Sign In</h2>
            <p className="text-white/80 mt-2">Your privacy is our priority</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Username/Email</label>
              <input 
                type="text" 
                className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Enter your username or email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"}
                  className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 pr-12"
                  placeholder="Enter your password"
                />
                <button 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-white/60 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button 
              onClick={() => {
                setIsLoggedIn(true);
                setCurrentScreen('dashboard');
              }}
              className="w-full bg-white text-blue-600 py-4 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Sign In Securely
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Registration Screen
  const RegisterScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-blue-700 flex flex-col items-center justify-center p-6 text-white">
      <div className="w-full max-w-md">
        <button 
          onClick={() => setCurrentScreen('welcome')}
          className="mb-6 text-white/80 hover:text-white transition-colors"
        >
          ← Back
        </button>
        
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold">Create Account</h2>
            <p className="text-white/80 mt-2">Join our supportive community</p>
          </div>

          <div className="space-y-4">
            <input 
              type="text" 
              className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Full Name (Optional)"
            />
            
            <input 
              type="email" 
              className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Email Address"
            />
            
            <input 
              type="tel" 
              className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Phone Number (Optional)"
            />
            
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 pr-12"
                placeholder="Create Password"
              />
              <button 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4 text-white/60 hover:text-white"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex items-start gap-3">
              <input type="checkbox" id="privacy" className="mt-1 w-4 h-4 rounded" />
              <label htmlFor="privacy" className="text-sm text-white/80">
                I agree to the privacy policy and understand my data is encrypted and secure
              </label>
            </div>

            <button 
              onClick={() => {
                setIsLoggedIn(true);
                setCurrentScreen('dashboard');
              }}
              className="w-full bg-white text-green-600 py-4 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Dashboard Screen
  const DashboardScreen = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">SafeConnect</h1>
          <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
            <Bell className="w-6 h-6" />
          </button>
        </div>
        <p className="mt-2 text-purple-100">Your safe space for support</p>
      </div>

      {/* Quick Actions */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button 
            onClick={() => setCurrentScreen('emergency')}
            className="bg-red-500 text-white p-6 rounded-2xl shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
          >
            <AlertTriangle className="w-8 h-8 mb-2" />
            <span className="font-semibold">Emergency</span>
          </button>
          <button 
            onClick={() => setCurrentScreen('support')}
            className="bg-blue-500 text-white p-6 rounded-2xl shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            <Heart className="w-8 h-8 mb-2" />
            <span className="font-semibold">Get Support</span>
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 gap-4">
          <ServiceCard 
            icon={<Phone className="w-6 h-6" />}
            title="Hotline"
            description="24/7 support line"
            color="bg-green-500"
            onClick={() => setCurrentScreen('hotline')}
          />
          <ServiceCard 
            icon={<MessageCircle className="w-6 h-6" />}
            title="Chat Support"
            description="Anonymous chat"
            color="bg-purple-500"
            onClick={() => setCurrentScreen('chat')}
          />
          <ServiceCard 
            icon={<Users className="w-6 h-6" />}
            title="Community"
            description="Connect with others"
            color="bg-orange-500"
            onClick={() => setCurrentScreen('community')}
          />
          <ServiceCard 
            icon={<BookOpen className="w-6 h-6" />}
            title="Resources"
            description="Information & guides"
            color="bg-teal-500"
            onClick={() => setCurrentScreen('resources')}
          />
          <ServiceCard 
            icon={<MapPin className="w-6 h-6" />}
            title="Find Services"
            description="Local support"
            color="bg-indigo-500"
            onClick={() => setCurrentScreen('services')}
          />
          <ServiceCard 
            icon={<FileText className="w-6 h-6" />}
            title="Safety Plan"
            description="Personal safety"
            color="bg-pink-500"
            onClick={() => setCurrentScreen('safety')}
          />
        </div>
      </div>
    </div>
  );

  // Service Card Component
  const ServiceCard = ({ icon, title, description, color, onClick }: ServiceCardProps) => (
    <button 
      onClick={onClick}
      className={`${color} text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-left`}
    >
      <div className="flex items-center justify-between mb-2">
        {icon}
        <ChevronRight className="w-4 h-4" />
      </div>
      <h3 className="font-semibold text-sm">{title}</h3>
      <p className="text-xs opacity-90">{description}</p>
    </button>
  );

  // Profile Screen
  const ProfileScreen = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentScreen('dashboard')}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            ← Back
          </button>
          <h1 className="text-xl font-bold">Profile & Settings</h1>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Profile Info */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Your Profile</h2>
              <p className="text-gray-600">Manage your account settings</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name (Optional)</label>
              <input 
                type="text" 
                value={userProfile.name}
                onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
              <input 
                type="tel" 
                value={userProfile.emergencyContact}
                onChange={(e) => setUserProfile({...userProfile, emergencyContact: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Emergency contact number"
              />
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Preferences</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-600" />
                <span className="text-gray-800">Language</span>
              </div>
              <select 
                value={userProfile.language}
                onChange={(e) => setUserProfile({...userProfile, language: e.target.value})}
                className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="ar">العربية</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="text-gray-800">Notifications</span>
              </div>
              <button 
                onClick={() => setUserProfile({...userProfile, notifications: !userProfile.notifications})}
                className={`w-12 h-6 rounded-full transition-colors ${userProfile.notifications ? 'bg-purple-500' : 'bg-gray-300'}`}
              >
                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${userProfile.notifications ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Safety Planning */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Safety Planning</h3>
          
          <textarea 
            value={userProfile.safetyPlan}
            onChange={(e) => setUserProfile({...userProfile, safetyPlan: e.target.value})}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 h-24"
            placeholder="Create your personal safety plan..."
          />
        </div>

        {/* Data Management */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Data Management</h3>
          
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-gray-600" />
                <span className="text-gray-800">Export My Data</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            
            <button className="w-full flex items-center justify-between p-3 border border-red-300 rounded-xl hover:bg-red-50 transition-colors text-red-600">
              <div className="flex items-center gap-3">
                <Trash2 className="w-5 h-5" />
                <span>Delete All Data</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Emergency Screen
  const EmergencyScreen = () => (
    <div className="min-h-screen bg-red-600 text-white p-6">
      <div className="text-center mb-8">
        <AlertTriangle className="w-16 h-16 mx-auto mb-4 animate-pulse" />
        <h1 className="text-3xl font-bold mb-2">Emergency Support</h1>
        <p className="text-red-100">Immediate help is available</p>
      </div>

      <div className="space-y-4 mb-8">
        <button className="w-full bg-white text-red-600 py-4 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3">
          <Phone className="w-5 h-5" />
          Call Emergency Hotline
        </button>
        
        <button className="w-full bg-red-700 py-4 px-6 rounded-xl font-semibold hover:bg-red-800 transition-all duration-300 flex items-center justify-center gap-3">
          <MessageCircle className="w-5 h-5" />
          Emergency Chat
        </button>
        
        <button className="w-full bg-red-700 py-4 px-6 rounded-xl font-semibold hover:bg-red-800 transition-all duration-300 flex items-center justify-center gap-3">
          <MapPin className="w-5 h-5" />
          Find Nearest Shelter
        </button>
      </div>

      <div className="bg-red-700/50 rounded-xl p-4 mb-6">
        <h3 className="font-semibold mb-2">Quick Safety Tips:</h3>
        <ul className="text-sm space-y-1 text-red-100">
          <li>• Trust your instincts</li>
          <li>• Have an exit plan</li>
          <li>• Keep important documents safe</li>
          <li>• Tell someone you trust</li>
        </ul>
      </div>

      <button 
        onClick={() => setCurrentScreen(isLoggedIn ? 'dashboard' : 'welcome')}
        className="w-full bg-white/20 backdrop-blur-sm py-3 px-6 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
      >
        Back to Safety
      </button>
    </div>
  );

  // Sidebar Component
  const Sidebar = () => (
    <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
      
      <div className={`absolute left-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Menu</h2>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <button 
            onClick={() => {
              setCurrentScreen('dashboard');
              setSidebarOpen(false);
            }}
            className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <Home className="w-5 h-5 text-gray-600" />
            <span className="text-gray-800">Dashboard</span>
          </button>
          
          <button 
            onClick={() => {
              setCurrentScreen('profile');
              setSidebarOpen(false);
            }}
            className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <User className="w-5 h-5 text-gray-600" />
            <span className="text-gray-800">Profile & Settings</span>
          </button>
          
          <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-xl transition-colors">
            <HelpCircle className="w-5 h-5 text-gray-600" />
            <span className="text-gray-800">Help & Support</span>
          </button>
          
          <button 
            onClick={() => {
              setIsLoggedIn(false);
              setCurrentScreen('welcome');
              setSidebarOpen(false);
            }}
            className="w-full flex items-center gap-3 p-3 hover:bg-red-100 rounded-xl transition-colors text-red-600"
          >
            <Settings className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );

  // Render current screen
  const renderScreen = () => {
    switch(currentScreen) {
      case 'welcome':
        return <WelcomeScreen />;
      case 'login':
        return <LoginScreen />;
      case 'register':
        return <RegisterScreen />;
      case 'dashboard':
        return <DashboardScreen />;
      case 'profile':
        return <ProfileScreen />;
      case 'emergency':
        return <EmergencyScreen />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div className="relative">
      {renderScreen()}
      <Sidebar />
    </div>
  );
};

export default HIVGBVSupportApp;