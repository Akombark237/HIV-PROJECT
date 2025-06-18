'use client';

import { useState } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  EyeOff, 
  AlertTriangle, 
  CheckCircle, 
  Settings, 
  Key, 
  Globe, 
  Smartphone, 
  Monitor, 
  Wifi, 
  Database, 
  UserCheck, 
  FileText, 
  Download, 
  Upload, 
  Trash2, 
  Edit, 
  Save, 
  X, 
  Plus, 
  Minus,
  Info,
  HelpCircle,
  ExternalLink,
  Copy,
  RefreshCw,
  Power,
  Bell,
  BellOff,
  ToggleLeft,
  ToggleRight,
  Fingerprint,
  Scan,
  QrCode,
  Clock,
  Calendar,
  Users,
  Mail,
  Phone,
  MessageCircle
} from 'lucide-react';

type SecuritySection = 'overview' | 'digital-safety' | 'privacy-protection' | 'emergency-features';

interface SecuritySetting {
  id: string;
  name: string;
  description: string;
  category: 'privacy' | 'security' | 'emergency' | 'data';
  enabled: boolean;
  level: 'basic' | 'advanced' | 'expert';
  impact: 'low' | 'medium' | 'high';
}

interface PrivacySetting {
  id: string;
  name: string;
  description: string;
  options: string[];
  currentValue: string;
  category: 'data-sharing' | 'communication' | 'visibility' | 'tracking';
}

interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  email?: string;
  priority: 'primary' | 'secondary' | 'emergency';
  canAccess: boolean;
}

const SafetySecurityPage = () => {
  const [activeSection, setActiveSection] = useState<SecuritySection>('overview');
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [emergencyMode, setEmergencyMode] = useState(false);
  const [quickExitEnabled, setQuickExitEnabled] = useState(true);

  const securitySettings: SecuritySetting[] = [
    {
      id: '1',
      name: 'Two-Factor Authentication',
      description: 'Add an extra layer of security to your account with SMS or app-based verification',
      category: 'security',
      enabled: true,
      level: 'basic',
      impact: 'high'
    },
    {
      id: '2',
      name: 'End-to-End Encryption',
      description: 'Encrypt all messages and data so only you and intended recipients can read them',
      category: 'privacy',
      enabled: true,
      level: 'basic',
      impact: 'high'
    },
    {
      id: '3',
      name: 'Anonymous Browsing',
      description: 'Browse the platform without leaving traces of your activity',
      category: 'privacy',
      enabled: false,
      level: 'advanced',
      impact: 'medium'
    },
    {
      id: '4',
      name: 'Auto-Delete Messages',
      description: 'Automatically delete messages after a specified time period',
      category: 'data',
      enabled: true,
      level: 'basic',
      impact: 'medium'
    },
    {
      id: '5',
      name: 'Emergency Data Wipe',
      description: 'Quickly delete all personal data in emergency situations',
      category: 'emergency',
      enabled: false,
      level: 'expert',
      impact: 'high'
    },
    {
      id: '6',
      name: 'Secure Session Timeout',
      description: 'Automatically log out after periods of inactivity',
      category: 'security',
      enabled: true,
      level: 'basic',
      impact: 'medium'
    }
  ];

  const privacySettings: PrivacySetting[] = [
    {
      id: '1',
      name: 'Data Sharing with Providers',
      description: 'Control what information is shared with healthcare providers',
      options: ['None', 'Basic Info Only', 'Medical History', 'Full Access'],
      currentValue: 'Medical History',
      category: 'data-sharing'
    },
    {
      id: '2',
      name: 'Communication Preferences',
      description: 'Choose how service providers can contact you',
      options: ['Platform Only', 'Email Allowed', 'Phone Allowed', 'All Methods'],
      currentValue: 'Platform Only',
      category: 'communication'
    },
    {
      id: '3',
      name: 'Profile Visibility',
      description: 'Control who can see your profile in community features',
      options: ['Private', 'Support Groups Only', 'Community Members', 'Public'],
      currentValue: 'Support Groups Only',
      category: 'visibility'
    },
    {
      id: '4',
      name: 'Activity Tracking',
      description: 'Allow the platform to track your activity for service improvement',
      options: ['Disabled', 'Anonymous Only', 'Limited Tracking', 'Full Tracking'],
      currentValue: 'Anonymous Only',
      category: 'tracking'
    }
  ];

  const emergencyContacts: EmergencyContact[] = [
    {
      id: '1',
      name: 'Dr. Amina Hassan',
      relationship: 'Primary Care Provider',
      phone: '+237-75-627-1234',
      email: 'dr.hassan@fmcyola.gov.ng',
      priority: 'primary',
      canAccess: true
    },
    {
      id: '2',
      name: 'Crisis Hotline',
      relationship: 'Emergency Support',
      phone: '+237-75-627-8901',
      priority: 'emergency',
      canAccess: false
    },
    {
      id: '3',
      name: 'Sarah Adamu',
      relationship: 'Trusted Friend',
      phone: '+237-80-1234-5678',
      email: 'sarah.adamu@email.com',
      priority: 'secondary',
      canAccess: false
    }
  ];

  const SecuritySettingCard = ({ setting }: { setting: SecuritySetting }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900">{setting.name}</h3>
            <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
              setting.level === 'basic' ? 'bg-green-100 text-green-700' :
              setting.level === 'advanced' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {setting.level}
            </span>
            <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
              setting.impact === 'high' ? 'bg-red-100 text-red-700' :
              setting.impact === 'medium' ? 'bg-yellow-100 text-yellow-700' :
              'bg-green-100 text-green-700'
            }`}>
              {setting.impact} impact
            </span>
          </div>
          <p className="text-gray-600 text-sm">{setting.description}</p>
        </div>
        <button
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            setting.enabled ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              setting.enabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
      
      <div className="flex items-center space-x-2 text-sm">
        <div className={`w-2 h-2 rounded-full ${
          setting.category === 'security' ? 'bg-blue-500' :
          setting.category === 'privacy' ? 'bg-green-500' :
          setting.category === 'emergency' ? 'bg-red-500' :
          'bg-purple-500'
        }`}></div>
        <span className="text-gray-500 capitalize">{setting.category}</span>
      </div>
    </div>
  );

  const PrivacySettingCard = ({ setting }: { setting: PrivacySetting }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{setting.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{setting.description}</p>
        
        <div className="space-y-2">
          {setting.options.map((option) => (
            <label key={option} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name={setting.id}
                value={option}
                checked={setting.currentValue === option}
                className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>
      
      <div className="flex items-center space-x-2 text-sm">
        <div className={`w-2 h-2 rounded-full ${
          setting.category === 'data-sharing' ? 'bg-blue-500' :
          setting.category === 'communication' ? 'bg-green-500' :
          setting.category === 'visibility' ? 'bg-purple-500' :
          'bg-orange-500'
        }`}></div>
        <span className="text-gray-500 capitalize">{setting.category.replace('-', ' ')}</span>
      </div>
    </div>
  );

  const EmergencyContactCard = ({ contact }: { contact: EmergencyContact }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{contact.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{contact.relationship}</p>
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>{contact.phone}</span>
            </div>
            {contact.email && (
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{contact.email}</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            contact.priority === 'primary' ? 'bg-blue-100 text-blue-800' :
            contact.priority === 'emergency' ? 'bg-red-100 text-red-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {contact.priority}
          </span>
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg">
            <Edit className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Can access emergency data:</span>
          <span className={`text-sm font-medium ${contact.canAccess ? 'text-green-600' : 'text-red-600'}`}>
            {contact.canAccess ? 'Yes' : 'No'}
          </span>
        </div>
        <button
          className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
            contact.canAccess ? 'bg-green-500' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
              contact.canAccess ? 'translate-x-5' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Safety & Security Features
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive digital safety, privacy protection, and emergency features designed to keep you secure
          </p>
        </div>

        {/* Emergency Controls */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setEmergencyMode(!emergencyMode)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-colors ${
                  emergencyMode ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <AlertTriangle className="w-5 h-5" />
                <span>Emergency Mode</span>
              </button>
              <button
                onClick={() => setQuickExitEnabled(!quickExitEnabled)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-colors ${
                  quickExitEnabled ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Power className="w-5 h-5" />
                <span>Quick Exit</span>
              </button>
              <button
                onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-colors ${
                  showAdvancedSettings ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Settings className="w-5 h-5" />
                <span>Advanced</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: 'overview' as const, label: 'Security Overview', icon: Shield },
              { id: 'digital-safety' as const, label: 'Digital Safety', icon: Globe },
              { id: 'privacy-protection' as const, label: 'Privacy Protection', icon: Lock },
              { id: 'emergency-features' as const, label: 'Emergency Features', icon: AlertTriangle }
            ].map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all text-lg ${
                    activeSection === section.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Security Overview */}
        {activeSection === 'overview' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Security Status</h3>
                <p className="text-green-600 font-medium">Excellent</p>
                <p className="text-sm text-gray-600">All security features active</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Lock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Privacy Level</h3>
                <p className="text-blue-600 font-medium">High</p>
                <p className="text-sm text-gray-600">Data minimization active</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Key className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Encryption</h3>
                <p className="text-purple-600 font-medium">End-to-End</p>
                <p className="text-sm text-gray-600">All data encrypted</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <AlertTriangle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Emergency Ready</h3>
                <p className="text-orange-600 font-medium">Configured</p>
                <p className="text-sm text-gray-600">Quick exit enabled</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Settings</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {securitySettings
                  .filter(setting => showAdvancedSettings || setting.level === 'basic')
                  .map((setting) => (
                    <SecuritySettingCard key={setting.id} setting={setting} />
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Digital Safety */}
        {activeSection === 'digital-safety' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Digital Safety</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Secure browsing instructions, data encryption protocols, and anonymous usage options
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Secure Browsing Instructions</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Browser Security</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Always use private/incognito browsing mode</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Clear browser history and cookies regularly</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Use a VPN when accessing sensitive content</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Disable location tracking and cookies</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Device Security</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>Use strong passwords and biometric locks</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>Enable automatic screen lock after inactivity</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>Keep software and apps updated</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>Avoid using public Wi-Fi for sensitive activities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Encryption Protocols</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Lock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">End-to-End Encryption</h4>
                  <p className="text-gray-600">All messages and data are encrypted from your device to the recipient</p>
                </div>
                <div className="text-center">
                  <Database className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Secure Storage</h4>
                  <p className="text-gray-600">Data is encrypted at rest using AES-256 encryption standards</p>
                </div>
                <div className="text-center">
                  <Key className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Key Management</h4>
                  <p className="text-gray-600">Encryption keys are managed securely and never stored in plain text</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
              <div className="flex items-start space-x-3">
                <Info className="w-6 h-6 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-blue-800 mb-2">Anonymous Usage Options</h3>
                  <p className="text-blue-700 mb-4">
                    You can use this platform anonymously without providing personal information.
                    Anonymous mode hides your identity while still allowing access to support services.
                  </p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Enable Anonymous Mode
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Privacy Protection */}
        {activeSection === 'privacy-protection' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Privacy Protection</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Data minimization practices, consent management, and user control over data sharing
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Privacy Settings</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {privacySettings.map((setting) => (
                  <PrivacySettingCard key={setting.id} setting={setting} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Minimization Practices</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">What We Collect</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Only essential information for service delivery</li>
                    <li>• Medical information with explicit consent</li>
                    <li>• Communication preferences</li>
                    <li>• Emergency contact information (optional)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">What We Don't Collect</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Unnecessary personal details</li>
                    <li>• Location data without permission</li>
                    <li>• Third-party tracking information</li>
                    <li>• Social media or external account data</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
              <div className="flex items-start space-x-3">
                <UserCheck className="w-6 h-6 text-green-600 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-green-800 mb-2">Consent Management</h3>
                  <p className="text-green-700 mb-4">
                    You have full control over your data. You can withdraw consent, modify permissions,
                    or delete your data at any time through your privacy settings.
                  </p>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                    Manage Consent
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Emergency Features */}
        {activeSection === 'emergency-features' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Features</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quick exit button, emergency contacts, and rapid data protection for crisis situations
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-red-800 mb-2">Quick Exit Feature</h3>
                  <p className="text-red-700 mb-4">
                    Press Ctrl+Shift+X (or Cmd+Shift+X on Mac) to immediately exit the platform and
                    redirect to a safe website. This feature works from any page.
                  </p>
                  <div className="flex items-center space-x-4">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                      Test Quick Exit
                    </button>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-700">Status:</span>
                      <span className={`font-medium ${quickExitEnabled ? 'text-green-600' : 'text-red-600'}`}>
                        {quickExitEnabled ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Emergency Contacts</h3>
                <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <Plus className="w-4 h-4" />
                  <span>Add Contact</span>
                </button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {emergencyContacts.map((contact) => (
                  <EmergencyContactCard key={contact.id} contact={contact} />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Emergency Protocols</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Immediate Actions</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                      <Power className="w-5 h-5 text-red-500" />
                      <div>
                        <p className="font-medium text-gray-900">Quick Exit</p>
                        <p className="text-sm text-gray-600">Immediately leave the platform safely</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                      <Phone className="w-5 h-5 text-orange-500" />
                      <div>
                        <p className="font-medium text-gray-900">Emergency Call</p>
                        <p className="text-sm text-gray-600">Direct dial to emergency services</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                      <Trash2 className="w-5 h-5 text-purple-500" />
                      <div>
                        <p className="font-medium text-gray-900">Data Wipe</p>
                        <p className="text-sm text-gray-600">Securely delete sensitive information</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Safety Features</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Lock className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-gray-900">Secure Mode</p>
                        <p className="text-sm text-gray-600">Enhanced privacy and security settings</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <Shield className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="font-medium text-gray-900">Safe Browsing</p>
                        <p className="text-sm text-gray-600">Anonymous and encrypted browsing</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                      <Bell className="w-5 h-5 text-yellow-500" />
                      <div>
                        <p className="font-medium text-gray-900">Alert System</p>
                        <p className="text-sm text-gray-600">Notify emergency contacts if needed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Crisis Support Resources</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-red-50 rounded-2xl">
                  <Phone className="w-10 h-10 text-red-500 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Emergency Services</h4>
                  <p className="text-sm text-gray-600 mb-3">Immediate emergency response</p>
                  <a href="tel:117" className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                    Call 117
                  </a>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-2xl">
                  <MessageCircle className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Crisis Hotline</h4>
                  <p className="text-sm text-gray-600 mb-3">24/7 crisis support and counseling</p>
                  <a href="tel:+234-75-627-8901" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Call Support
                  </a>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-2xl">
                  <Users className="w-10 h-10 text-green-500 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Safe Shelter</h4>
                  <p className="text-sm text-gray-600 mb-3">Emergency shelter and protection</p>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                    Find Shelter
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Security Notice */}
        <div className="mt-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Your Safety is Our Priority</h3>
          <p className="text-lg mb-6">
            All security features are designed to protect your privacy and ensure your safety.
            Regular security updates are applied automatically to maintain the highest level of protection.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-xl">
              <Shield className="w-5 h-5" />
              <span>Bank-Level Security</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-xl">
              <Lock className="w-5 h-5" />
              <span>End-to-End Encrypted</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-xl">
              <RefreshCw className="w-5 h-5" />
              <span>Regular Updates</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetySecurityPage;
