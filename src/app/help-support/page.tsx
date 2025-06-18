'use client';

import { useState } from 'react';
import { 
  HelpCircle, 
  MessageCircle, 
  Book, 
  Video, 
  Search, 
  ChevronDown, 
  ChevronRight, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Bug, 
  Lightbulb, 
  Server, 
  Bell, 
  Download, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  ExternalLink, 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  Send, 
  FileText, 
  Users, 
  Shield, 
  Heart,
  Zap,
  Activity,
  Wifi,
  WifiOff
} from 'lucide-react';

type SupportSection = 'faq' | 'guides' | 'videos' | 'live-chat' | 'technical' | 'status';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'medical' | 'safety' | 'technical' | 'privacy';
  helpful: number;
  notHelpful: number;
}

interface UserGuide {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  steps: string[];
  downloadUrl?: string;
}

interface VideoTutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  thumbnailUrl: string;
  videoUrl: string;
  transcript?: string;
  subtitles: string[];
}

interface BugReport {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  reportedBy: string;
  dateReported: string;
  category: string;
}

interface SystemStatus {
  service: string;
  status: 'operational' | 'degraded' | 'outage' | 'maintenance';
  lastUpdated: string;
  description: string;
}

const HelpSupportPage = () => {
  const [activeSection, setActiveSection] = useState<SupportSection>('faq');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'How do I access crisis support services?',
      answer: 'You can access crisis support services 24/7 by calling our emergency hotline at +237-75-627-8901, using the Crisis Support page on our platform, or contacting emergency services at 117 if you are in immediate danger.',
      category: 'general',
      helpful: 45,
      notHelpful: 2
    },
    {
      id: '2',
      question: 'Is my personal information secure and private?',
      answer: 'Yes, we use end-to-end encryption for all communications and data. Your personal information is protected with bank-level security, and you have full control over what information is shared and with whom.',
      category: 'privacy',
      helpful: 38,
      notHelpful: 1
    },
    {
      id: '3',
      question: 'How do I schedule a medical appointment?',
      answer: 'Go to the Medical Support page, select "Schedule Appointment," choose your preferred provider and time slot. You can schedule both in-person and telemedicine appointments based on availability.',
      category: 'medical',
      helpful: 42,
      notHelpful: 3
    },
    {
      id: '4',
      question: 'What should I do if I feel unsafe?',
      answer: 'If you feel unsafe, immediately contact emergency services (199) or our crisis hotline. Use the Quick Exit feature (Ctrl+Shift+X) to safely leave the platform. You can also access our Safety Planning tools for personalized safety strategies.',
      category: 'safety',
      helpful: 51,
      notHelpful: 0
    },
    {
      id: '5',
      question: 'How do I use the platform offline?',
      answer: 'The platform works offline for critical features including emergency contacts, safety plans, and downloaded educational content. When you reconnect, your data will automatically sync.',
      category: 'technical',
      helpful: 29,
      notHelpful: 4
    }
  ];

  const userGuides: UserGuide[] = [
    {
      id: '1',
      title: 'Getting Started with HIV Crisis Support',
      description: 'Complete guide to setting up your account and accessing services',
      category: 'Getting Started',
      difficulty: 'beginner',
      estimatedTime: '10 minutes',
      steps: [
        'Create your account with secure credentials',
        'Complete your privacy and security settings',
        'Set up emergency contacts',
        'Explore available services and resources',
        'Configure accessibility and language preferences'
      ],
      downloadUrl: '/guides/getting-started.pdf'
    },
    {
      id: '2',
      title: 'Creating a Personal Safety Plan',
      description: 'Step-by-step guide to developing an effective safety plan',
      category: 'Safety Planning',
      difficulty: 'intermediate',
      estimatedTime: '20 minutes',
      steps: [
        'Assess your current safety situation',
        'Identify safe places and trusted contacts',
        'Plan escape routes and transportation',
        'Prepare important documents and items',
        'Set up communication strategies',
        'Review and update your plan regularly'
      ],
      downloadUrl: '/guides/safety-planning.pdf'
    },
    {
      id: '3',
      title: 'Using Secure Communication Tools',
      description: 'Learn how to safely communicate with providers and peers',
      category: 'Communication',
      difficulty: 'intermediate',
      estimatedTime: '15 minutes',
      steps: [
        'Understanding end-to-end encryption',
        'Setting up secure messaging',
        'Joining peer support groups',
        'Using anonymous communication options',
        'Managing your communication preferences'
      ],
      downloadUrl: '/guides/secure-communication.pdf'
    }
  ];

  const videoTutorials: VideoTutorial[] = [
    {
      id: '1',
      title: 'Platform Overview and Navigation',
      description: 'Complete walkthrough of the HIV Crisis Support platform',
      duration: '8:45',
      category: 'Getting Started',
      thumbnailUrl: '/videos/thumbnails/overview.jpg',
      videoUrl: '/videos/platform-overview.mp4',
      subtitles: ['English', 'Hausa', 'Fulfulde']
    },
    {
      id: '2',
      title: 'Emergency Features and Quick Exit',
      description: 'Learn about safety features and emergency protocols',
      duration: '5:30',
      category: 'Safety',
      thumbnailUrl: '/videos/thumbnails/emergency.jpg',
      videoUrl: '/videos/emergency-features.mp4',
      subtitles: ['English', 'Hausa', 'Fulfulde']
    },
    {
      id: '3',
      title: 'Accessing Medical Support Services',
      description: 'How to schedule appointments and manage your health',
      duration: '12:15',
      category: 'Medical Support',
      thumbnailUrl: '/videos/thumbnails/medical.jpg',
      videoUrl: '/videos/medical-support.mp4',
      subtitles: ['English', 'Hausa', 'Fulfulde']
    }
  ];

  const systemStatus: SystemStatus[] = [
    {
      service: 'Main Platform',
      status: 'operational',
      lastUpdated: '2024-06-21T12:00:00Z',
      description: 'All systems functioning normally'
    },
    {
      service: 'Crisis Support Hotline',
      status: 'operational',
      lastUpdated: '2024-06-21T12:00:00Z',
      description: '24/7 support available'
    },
    {
      service: 'Medical Appointments',
      status: 'operational',
      lastUpdated: '2024-06-21T11:45:00Z',
      description: 'Booking and management systems online'
    },
    {
      service: 'Secure Messaging',
      status: 'operational',
      lastUpdated: '2024-06-21T12:00:00Z',
      description: 'End-to-end encrypted messaging available'
    },
    {
      service: 'Educational Content',
      status: 'operational',
      lastUpdated: '2024-06-21T10:30:00Z',
      description: 'All content accessible and up-to-date'
    }
  ];

  const filteredFAQs = faqItems.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const FAQCard = ({ faq }: { faq: FAQItem }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <button
        onClick={() => toggleFAQ(faq.id)}
        className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
          {expandedFAQ === faq.id ? (
            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
          )}
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
            faq.category === 'general' ? 'bg-blue-100 text-blue-800' :
            faq.category === 'medical' ? 'bg-green-100 text-green-800' :
            faq.category === 'safety' ? 'bg-red-100 text-red-800' :
            faq.category === 'technical' ? 'bg-purple-100 text-purple-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {faq.category}
          </span>
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <ThumbsUp className="w-3 h-3" />
            <span>{faq.helpful}</span>
          </div>
        </div>
      </button>
      
      {expandedFAQ === faq.id && (
        <div className="px-6 pb-6">
          <div className="border-t border-gray-200 pt-4">
            <p className="text-gray-700 leading-relaxed mb-4">{faq.answer}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Was this helpful?</span>
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">Yes</span>
                </button>
                <button className="flex items-center space-x-1 px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
                  <ThumbsDown className="w-4 h-4" />
                  <span className="text-sm">No</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const GuideCard = ({ guide }: { guide: UserGuide }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
          <p className="text-gray-600 mb-3">{guide.description}</p>
          <div className="flex items-center space-x-4 text-sm">
            <span className={`px-3 py-1 rounded-lg font-medium ${
              guide.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
              guide.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {guide.difficulty}
            </span>
            <div className="flex items-center space-x-1 text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{guide.estimatedTime}</span>
            </div>
          </div>
        </div>
        {guide.downloadUrl && (
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
            <Download className="w-5 h-5" />
          </button>
        )}
      </div>
      
      <div className="space-y-2">
        <h4 className="font-medium text-gray-900">Steps:</h4>
        <ul className="space-y-1">
          {guide.steps.slice(0, 3).map((step, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
              <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
          {guide.steps.length > 3 && (
            <li className="text-sm text-gray-500 ml-7">
              +{guide.steps.length - 3} more steps
            </li>
          )}
        </ul>
      </div>
    </div>
  );

  const VideoCard = ({ video }: { video: VideoTutorial }) => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <div className="aspect-video bg-gray-200 flex items-center justify-center">
          <Play className="w-12 h-12 text-gray-400" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
          {video.duration}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{video.description}</p>
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-lg">
            {video.category}
          </span>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500">Subtitles:</span>
            <div className="flex space-x-1">
              {video.subtitles.slice(0, 2).map((lang, index) => (
                <span key={index} className="px-1 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Help & Support
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive support resources, guides, and assistance for the HIV crisis support platform
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <a
            href="tel:+234-75-627-8901"
            className="flex items-center space-x-3 p-4 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
          >
            <Phone className="w-6 h-6" />
            <div>
              <p className="font-bold">Crisis Hotline</p>
              <p className="text-sm opacity-90">24/7 Support</p>
            </div>
          </a>
          <button
            onClick={() => setChatOpen(true)}
            className="flex items-center space-x-3 p-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
            <div>
              <p className="font-bold">Live Chat</p>
              <p className="text-sm opacity-90">Get instant help</p>
            </div>
          </button>
          <a
            href="mailto:support@hiv-support-adamawa.org"
            className="flex items-center space-x-3 p-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors"
          >
            <Mail className="w-6 h-6" />
            <div>
              <p className="font-bold">Email Support</p>
              <p className="text-sm opacity-90">Non-urgent queries</p>
            </div>
          </a>
          <button
            onClick={() => setActiveSection('status')}
            className="flex items-center space-x-3 p-4 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors"
          >
            <Activity className="w-6 h-6" />
            <div>
              <p className="font-bold">System Status</p>
              <p className="text-sm opacity-90">Check service health</p>
            </div>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: 'faq' as const, label: 'FAQ', icon: HelpCircle },
              { id: 'guides' as const, label: 'User Guides', icon: Book },
              { id: 'videos' as const, label: 'Video Tutorials', icon: Video },
              { id: 'live-chat' as const, label: 'Live Chat', icon: MessageCircle },
              { id: 'technical' as const, label: 'Technical Support', icon: Bug },
              { id: 'status' as const, label: 'System Status', icon: Server }
            ].map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all ${
                    activeSection === section.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        {activeSection === 'faq' && (
          <div className="space-y-8">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <FAQCard key={faq.id} faq={faq} />
              ))}
            </div>
          </div>
        )}

        {/* User Guides Section */}
        {activeSection === 'guides' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">User Guides & Tutorials</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Step-by-step guides to help you make the most of the HIV crisis support platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          </div>
        )}

        {/* Video Tutorials Section */}
        {activeSection === 'videos' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Demonstrations</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Visual tutorials with subtitles in multiple languages
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoTutorials.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        )}

        {/* Technical Support Section */}
        {activeSection === 'technical' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Support</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Report bugs, request features, and get technical assistance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Bug className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Report a Bug</h3>
                <p className="text-gray-600 mb-4">Found an issue? Let us know so we can fix it quickly.</p>
                <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
                  Report Bug
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Feature Request</h3>
                <p className="text-gray-600 mb-4">Suggest new features or improvements to the platform.</p>
                <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
                  Request Feature
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Performance Issue</h3>
                <p className="text-gray-600 mb-4">Report slow loading or performance problems.</p>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Report Issue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* System Status Section */}
        {activeSection === 'status' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">System Status</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real-time status of all platform services and components
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Service Status</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 font-medium">All Systems Operational</span>
                </div>
              </div>

              <div className="space-y-4">
                {systemStatus.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        service.status === 'operational' ? 'bg-green-500' :
                        service.status === 'degraded' ? 'bg-yellow-500' :
                        service.status === 'outage' ? 'bg-red-500' :
                        'bg-blue-500'
                      }`}></div>
                      <div>
                        <h4 className="font-medium text-gray-900">{service.service}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-lg text-sm font-medium ${
                        service.status === 'operational' ? 'bg-green-100 text-green-800' :
                        service.status === 'degraded' ? 'bg-yellow-100 text-yellow-800' :
                        service.status === 'outage' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        Updated: {new Date(service.lastUpdated).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpSupportPage;
