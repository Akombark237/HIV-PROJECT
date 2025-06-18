'use client';

import { useState } from 'react';
import { Phone, Shield, Heart, MessageCircle, AlertTriangle, Users, BookOpen, Map, Settings, Menu, X, Volume2, VolumeX } from 'lucide-react';

type ScreenType = 'home' | 'emergency' | 'support' | 'education' | 'community' | 'resources' | 'settings';

interface EmergencyContact {
  type: string;
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

interface MenuItem {
  id: ScreenType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SupportService {
  title: string;
  description: string;
  contacts: string[];
  color: string;
}

const HivGbvSupportApp = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [emergencyMode, setEmergencyMode] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);

  // Emergency hotlines data based on multi-stakeholder approach
  const emergencyContacts: EmergencyContact[] = [
    { type: 'GBV 24/7 Support', number: '+237-800-GBV-HELP', icon: Shield, color: 'bg-red-500' },
    { type: 'HIV Counseling', number: '+237-800-HIV-CARE', icon: Heart, color: 'bg-blue-500' },
    { type: 'Mental Health Crisis', number: '+237-800-MENTAL-H', icon: MessageCircle, color: 'bg-purple-500' },
    { type: 'Legal Aid Emergency', number: '+237-800-LEGAL-AID', icon: Users, color: 'bg-green-500' },
    { type: 'Police Emergency', number: '117', icon: AlertTriangle, color: 'bg-orange-500' },
    { type: 'Medical Emergency', number: '115', icon: Phone, color: 'bg-pink-500' }
  ];

  const menuItems: MenuItem[] = [
    { id: 'home' as const, label: 'Home', icon: Shield },
    { id: 'emergency' as const, label: 'Emergency', icon: AlertTriangle },
    { id: 'support' as const, label: 'Support Services', icon: Heart },
    { id: 'education' as const, label: 'Education', icon: BookOpen },
    { id: 'community' as const, label: 'Community', icon: Users },
    { id: 'resources' as const, label: 'Find Help', icon: Map },
    { id: 'settings' as const, label: 'Settings', icon: Settings }
  ];

  const supportServices: SupportService[] = [
    { 
      title: 'Healthcare Providers', 
      description: 'HIV care specialists and GBV-trained medical staff',
      contacts: ['Regional Hospital HIV Unit', 'Community Health Centers'],
      color: 'bg-gradient-to-r from-blue-400 to-blue-600'
    },
    { 
      title: 'Law Enforcement', 
      description: 'Police and Gendarmerie trained in GBV response',
      contacts: ['GBV Unit Police', 'Gendarmerie Major'],
      color: 'bg-gradient-to-r from-orange-400 to-orange-600'
    },
    { 
      title: 'Social Services', 
      description: 'Family welfare and women empowerment offices',
      contacts: ['Social Affairs Delegation', 'Women Protection Unit'],
      color: 'bg-gradient-to-r from-green-400 to-green-600'
    },
    { 
      title: 'Legal Support', 
      description: 'Lawyers and legal aid services',
      contacts: ['Legal Aid Clinic', 'Human Rights Lawyers'],
      color: 'bg-gradient-to-r from-purple-400 to-purple-600'
    },
    { 
      title: 'Civil Society', 
      description: 'NGOs and community organizations',
      contacts: ['AFADA', 'APRODAPHIN', 'Local CBOs'],
      color: 'bg-gradient-to-r from-pink-400 to-pink-600'
    }
  ];

  const HomeScreen = () => (
    <div className="space-y-8 md:space-y-12">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 rounded-3xl md:rounded-[3rem] p-8 md:p-16 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20 rounded-3xl md:rounded-[3rem]"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8">Safe Space</h2>
          <p className="text-purple-100 mb-8 md:mb-12 text-lg md:text-2xl leading-relaxed">You&apos;re not alone. Get support when you need it most.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => setCurrentScreen('emergency')}
              className="bg-red-500 hover:bg-red-600 px-8 md:px-12 py-4 md:py-6 rounded-full font-semibold transition-all transform hover:scale-105 text-lg md:text-xl"
            >
              Emergency Help
            </button>
            <button
              onClick={() => setCurrentScreen('support')}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-8 md:px-12 py-4 md:py-6 rounded-full font-semibold transition-all text-lg md:text-xl"
            >
              Find Support
            </button>
          </div>
        </div>
        <div className="absolute -top-8 -right-8 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-12 -left-12 w-36 h-36 md:w-48 md:h-48 bg-purple-300/20 rounded-full blur-lg"></div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {([
          { icon: Phone, label: 'Call Hotline', screen: 'emergency' as const, color: 'bg-red-50 text-red-600 border-red-200' },
          { icon: MessageCircle, label: 'Anonymous Chat', screen: 'support' as const, color: 'bg-blue-50 text-blue-600 border-blue-200' },
          { icon: BookOpen, label: 'Learn More', screen: 'education' as const, color: 'bg-green-50 text-green-600 border-green-200' },
          { icon: Map, label: 'Find Services', screen: 'resources' as const, color: 'bg-purple-50 text-purple-600 border-purple-200' }
        ] as const).map((action, index) => (
          <button
            key={index}
            onClick={() => setCurrentScreen(action.screen)}
            className={`p-8 md:p-12 rounded-2xl md:rounded-3xl border-2 ${action.color} transition-all hover:scale-105 hover:shadow-lg`}
          >
            <action.icon className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6" />
            <p className="font-semibold text-lg md:text-xl">{action.label}</p>
          </button>
        ))}
      </div>

      {/* Daily Check-in */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl md:rounded-3xl p-8 md:p-12">
        <h3 className="text-2xl md:text-4xl font-bold text-amber-800 mb-4 md:mb-6">Daily Wellness Check</h3>
        <p className="text-amber-700 mb-6 md:mb-8 text-lg md:text-xl">How are you feeling today?</p>
        <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
          {['😊', '😐', '😟', '😢'].map((emoji, index) => (
            <button key={index} className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full text-3xl md:text-5xl hover:scale-110 transition-transform shadow-md">
              {emoji}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const EmergencyScreen = () => (
    <div className="space-y-8 md:space-y-12">
      {/* Emergency Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl md:rounded-[3rem] p-8 md:p-16 text-white">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">Emergency Support</h2>
        <p className="text-red-100 text-lg md:text-2xl">Immediate help is available 24/7</p>
      </div>

      {/* Panic Button */}
      <div className="text-center py-12 md:py-20">
        <button
          onClick={() => setEmergencyMode(!emergencyMode)}
          className={`w-48 h-48 md:w-64 md:h-64 rounded-full font-bold text-white text-xl md:text-3xl shadow-2xl transition-all transform ${
            emergencyMode
              ? 'bg-gradient-to-br from-red-600 to-red-800 animate-pulse scale-110'
              : 'bg-gradient-to-br from-red-500 to-red-600 hover:scale-105'
          }`}
        >
          {emergencyMode ? 'CALLING...' : 'EMERGENCY\nCALL'}
        </button>
        <p className="mt-6 md:mt-8 text-gray-600 text-lg md:text-xl">Tap for immediate emergency response</p>
      </div>

      {/* Emergency Contacts */}
      <div className="space-y-4 md:space-y-6">
        <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8">Crisis Hotlines</h3>
        {emergencyContacts.map((contact, index) => (
          <div key={index} className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center space-x-6 md:space-x-8">
              <div className={`w-16 h-16 md:w-24 md:h-24 ${contact.color} rounded-full flex items-center justify-center`}>
                <contact.icon className="w-8 h-8 md:w-12 md:h-12 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 text-xl md:text-2xl">{contact.type}</h4>
                <p className="text-gray-600 text-lg md:text-xl">{contact.number}</p>
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold transition-colors text-lg md:text-xl">
                Call
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Safety Features */}
      <div className="bg-gray-50 rounded-2xl md:rounded-3xl p-8 md:p-12">
        <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8">Safety Features</h3>
        <div className="space-y-6 md:space-y-8">
          <div className="flex items-center justify-between">
            <span className="font-medium text-lg md:text-2xl">Silent Mode</span>
            <button className="w-16 h-8 md:w-20 md:h-10 bg-green-500 rounded-full relative">
              <div className="w-7 h-7 md:w-9 md:h-9 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-lg md:text-2xl">Location Sharing</span>
            <button className="w-16 h-8 md:w-20 md:h-10 bg-blue-500 rounded-full relative">
              <div className="w-7 h-7 md:w-9 md:h-9 bg-white rounded-full absolute right-0.5 top-0.5"></div>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium text-lg md:text-2xl">Emergency Contacts</span>
            <button className="text-blue-600 font-semibold text-lg md:text-xl">Manage</button>
          </div>
        </div>
      </div>
    </div>
  );

  const SupportScreen = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Support Services</h2>
        <p className="text-blue-100">Multi-stakeholder support network</p>
      </div>

      <div className="space-y-4">
        {supportServices.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className={`h-2 ${service.color}`}></div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="space-y-2">
                {service.contacts.map((contact, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <span className="text-sm font-medium text-gray-700">{contact}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                      Contact
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const EducationScreen = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Education & Resources</h2>
        <p className="text-green-100">Knowledge is power and protection</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {[
          { title: 'Understanding GBV', subtitle: 'Recognize different forms of violence', color: 'bg-red-50 border-red-200 text-red-700' },
          { title: 'HIV & Relationships', subtitle: 'Disclosure strategies and communication', color: 'bg-blue-50 border-blue-200 text-blue-700' },
          { title: 'Mental Health Support', subtitle: 'Coping strategies and self-care', color: 'bg-purple-50 border-purple-200 text-purple-700' },
          { title: 'Legal Rights', subtitle: 'Know your rights and legal protections', color: 'bg-green-50 border-green-200 text-green-700' },
          { title: 'Safety Planning', subtitle: 'Create a personal safety plan', color: 'bg-orange-50 border-orange-200 text-orange-700' }
        ].map((topic, index) => (
          <div key={index} className={`border-2 rounded-2xl p-6 ${topic.color} hover:shadow-md transition-shadow cursor-pointer`}>
            <h3 className="font-bold text-lg mb-2">{topic.title}</h3>
            <p className="text-sm opacity-80">{topic.subtitle}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs font-semibold opacity-60">Interactive Module</span>
              <BookOpen className="w-5 h-5 opacity-60" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const CommunityScreen = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Community Support</h2>
        <p className="text-pink-100">Connect with others who understand</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Anonymous Support Groups</h3>
          <div className="space-y-3">
            {[
              { name: 'HIV+ Women Support Circle', time: 'Tuesdays 7PM', members: '24 members' },
              { name: 'Survivors Network', time: 'Thursdays 6PM', members: '18 members' },
              { name: 'Couples Counseling Group', time: 'Saturdays 10AM', members: '12 couples' }
            ].map((group, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-800">{group.name}</h4>
                    <p className="text-sm text-gray-600">{group.time}</p>
                    <p className="text-xs text-purple-600 mt-1">{group.members}</p>
                  </div>
                  <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Join
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Peer Support</h3>
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-4 border border-blue-100">
            <p className="text-gray-700 mb-3">Connect with trained peer counselors who have similar experiences.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">
              Request Peer Counselor
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ResourcesScreen = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Find Help Near You</h2>
        <p className="text-teal-100">Locate services in your area</p>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="font-bold text-lg mb-4 text-gray-800">Service Locator</h3>
        <div className="space-y-4">
          <div className="flex space-x-3">
            <input 
              type="text" 
              placeholder="Enter your location..." 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">
              Search
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-4">
            {[
              { label: 'Hospitals', icon: Heart, color: 'bg-red-100 text-red-600' },
              { label: 'Police Stations', icon: Shield, color: 'bg-blue-100 text-blue-600' },
              { label: 'Legal Aid', icon: Users, color: 'bg-green-100 text-green-600' },
              { label: 'NGOs', icon: Map, color: 'bg-purple-100 text-purple-600' }
            ].map((service, index) => (
              <button key={index} className={`p-4 rounded-xl ${service.color} transition-all hover:scale-105`}>
                <service.icon className="w-6 h-6 mx-auto mb-2" />
                <p className="text-sm font-semibold">{service.label}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="font-bold text-lg mb-4 text-gray-800">Regional Services - Adamawa</h3>
        <div className="space-y-3">
          {[
            { name: 'Regional Hospital HIV Care Unit', type: 'Healthcare', distance: '0.5km' },
            { name: 'Women Empowerment Office', type: 'Social Services', distance: '1.2km' },
            { name: 'AFADA GBV Support Center', type: 'NGO', distance: '0.8km' },
            { name: 'Legal Aid Clinic', type: 'Legal Support', distance: '1.5km' }
          ].map((service, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
              <div>
                <h4 className="font-semibold text-gray-800">{service.name}</h4>
                <p className="text-sm text-gray-600">{service.type} • {service.distance}</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                Directions
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SettingsScreen = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-3xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Settings</h2>
        <p className="text-gray-300">Customize your experience</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Privacy & Security</h3>
          <div className="space-y-4">
            {[
              { label: 'App Lock', sublabel: 'Require PIN to open app', enabled: true },
              { label: 'Anonymous Mode', sublabel: 'Hide personal information', enabled: true },
              { label: 'Data Encryption', sublabel: 'Encrypt all stored data', enabled: true },
              { label: 'Quick Exit', sublabel: 'Double-tap to close app quickly', enabled: true }
            ].map((setting, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">{setting.label}</p>
                  <p className="text-sm text-gray-600">{setting.sublabel}</p>
                </div>
                <button className={`w-12 h-6 rounded-full relative ${setting.enabled ? 'bg-green-500' : 'bg-gray-300'}`}>
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${setting.enabled ? 'right-0.5' : 'left-0.5'}`}></div>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="font-bold text-lg mb-4 text-gray-800">Emergency Contacts</h3>
          <div className="space-y-3">
            <button className="w-full text-left bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
              <p className="font-semibold text-gray-800">Trusted Contact 1</p>
              <p className="text-sm text-gray-600">+237 6XX XXX XXX</p>
            </button>
            <button className="w-full text-left bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
              <p className="font-semibold text-gray-800">Trusted Contact 2</p>
              <p className="text-sm text-gray-600">Not set</p>
            </button>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl p-4 font-semibold">
              + Add Emergency Contact
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h3 className="font-bold text-lg mb-4 text-gray-800">App Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-800">Sound Notifications</span>
              <button 
                onClick={() => setIsSoundEnabled(!isSoundEnabled)}
                className="flex items-center space-x-2"
              >
                {isSoundEnabled ? <Volume2 className="w-5 h-5 text-blue-600" /> : <VolumeX className="w-5 h-5 text-gray-400" />}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-800">Language</span>
              <select className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2">
                <option>English</option>
                <option>French</option>
                <option>Fulfulde</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderScreen = () => {
    switch(currentScreen) {
      case 'emergency': return <EmergencyScreen />;
      case 'support': return <SupportScreen />;
      case 'education': return <EducationScreen />;
      case 'community': return <CommunityScreen />;
      case 'resources': return <ResourcesScreen />;
      case 'settings': return <SettingsScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="flex items-center justify-between p-6 md:p-8">
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-gray-800 text-xl md:text-3xl">SafeSupport</h1>
              <p className="text-sm md:text-lg text-gray-500">HIV & GBV Support</p>
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 md:p-4 hover:bg-gray-100 rounded-full transition-colors"
          >
            {isMenuOpen ? <X className="w-8 h-8 md:w-10 md:h-10" /> : <Menu className="w-8 h-8 md:w-10 md:h-10" />}
          </button>
        </div>
      </div>

      {/* Slide-out Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMenuOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-96 md:w-[500px] bg-white shadow-xl p-8 md:p-12" onClick={e => e.stopPropagation()}>
            <div className="space-y-4 mt-20 md:mt-24">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentScreen(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-4 md:space-x-6 p-6 md:p-8 rounded-xl transition-colors text-lg md:text-xl ${
                    currentScreen === item.id
                      ? 'bg-blue-500 text-white'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <item.icon className="w-7 h-7 md:w-9 md:h-9" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="p-6 md:p-12 pb-32 md:pb-40">
        {renderScreen()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl bg-white border-t border-gray-200 px-6 md:px-12 py-4 md:py-6">
        <div className="flex justify-around">
          {([
            { id: 'home' as const, icon: Shield, label: 'Home' },
            { id: 'emergency' as const, icon: AlertTriangle, label: 'Emergency' },
            { id: 'support' as const, icon: Heart, label: 'Support' },
            { id: 'community' as const, icon: Users, label: 'Community' }
          ] as const).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCurrentScreen(tab.id)}
              className={`flex flex-col items-center py-3 md:py-4 px-4 md:px-6 rounded-lg transition-colors ${
                currentScreen === tab.id
                  ? 'text-blue-600'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <tab.icon className={`w-8 h-8 md:w-10 md:h-10 mb-2 ${currentScreen === tab.id ? 'text-blue-600' : ''}`} />
              <span className="text-sm md:text-base font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HivGbvSupportApp;