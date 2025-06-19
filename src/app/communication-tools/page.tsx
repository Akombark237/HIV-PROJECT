'use client';

import { useState } from 'react';
import { 
  MessageCircle, 
  Users, 
  Globe, 
  Share2, 
  Send, 
  Lock, 
  Shield, 
  Eye, 
  EyeOff,
  Phone,
  Video,
  FileText,
  Image as ImageIcon,
  Paperclip,
  Smile,
  MoreVertical,
  Search,
  Filter,
  Settings,
  Bell,
  BellOff,
  UserPlus,
  UserMinus,
  Flag,
  Heart,
  ThumbsUp,
  Reply,
  Forward,
  Download,
  Upload,
  Clock,
  CheckCircle,
  AlertTriangle,
  Info,
  X,
  Plus,
  Minus
} from 'lucide-react';

type CommunicationTool = 'messaging' | 'peer-chat' | 'forums' | 'resources';

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderType: 'user' | 'provider' | 'moderator';
  content: string;
  timestamp: string;
  type: 'text' | 'image' | 'file' | 'voice';
  encrypted: boolean;
  read: boolean;
  reactions?: { emoji: string; count: number; users: string[] }[];
}

interface ChatRoom {
  id: string;
  name: string;
  description: string;
  type: 'support-group' | 'topic-based' | 'crisis-support' | 'general';
  participants: number;
  moderators: string[];
  isPrivate: boolean;
  lastActivity: string;
  unreadCount: number;
}

interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: string;
  authorType: 'user' | 'expert' | 'moderator';
  category: string;
  timestamp: string;
  replies: number;
  likes: number;
  views: number;
  tags: string[];
  pinned: boolean;
  locked: boolean;
}

interface SharedResource {
  id: string;
  title: string;
  description: string;
  type: 'document' | 'link' | 'video' | 'audio' | 'image';
  url: string;
  sharedBy: string;
  sharedDate: string;
  category: string;
  downloads: number;
  rating: number;
  verified: boolean;
}

const CommunicationToolsPage = () => {
  const [activeTool, setActiveTool] = useState<CommunicationTool>('messaging');
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [messageText, setMessageText] = useState('');
  const [isEncrypted, setIsEncrypted] = useState(true);
  const [showPrivacyMode, setShowPrivacyMode] = useState(false);

  const messages: Message[] = [
    {
      id: '1',
      senderId: 'provider1',
      senderName: 'Dr. Amina Hassan',
      senderType: 'provider',
      content: 'Hello! I received your message about your recent appointment. How are you feeling today?',
      timestamp: '2024-06-21T10:30:00Z',
      type: 'text',
      encrypted: true,
      read: true
    },
    {
      id: '2',
      senderId: 'user1',
      senderName: 'You',
      senderType: 'user',
      content: 'Thank you for checking in. I\'m doing better since our last session. The safety plan has been helpful.',
      timestamp: '2024-06-21T10:35:00Z',
      type: 'text',
      encrypted: true,
      read: true
    },
    {
      id: '3',
      senderId: 'provider1',
      senderName: 'Dr. Amina Hassan',
      senderType: 'provider',
      content: 'That\'s wonderful to hear. Remember, I\'m here if you need any support. Your next appointment is scheduled for next week.',
      timestamp: '2024-06-21T10:40:00Z',
      type: 'text',
      encrypted: true,
      read: false
    }
  ];

  const chatRooms: ChatRoom[] = [
    {
      id: '1',
      name: 'HIV Support Circle',
      description: 'Peer support group for people living with HIV',
      type: 'support-group',
      participants: 24,
      moderators: ['mod1', 'mod2'],
      isPrivate: true,
      lastActivity: '2024-06-21T11:00:00Z',
      unreadCount: 3
    },
    {
      id: '2',
      name: 'Women\'s Empowerment Forum',
      description: 'Discussion space for women\'s rights and empowerment',
      type: 'topic-based',
      participants: 156,
      moderators: ['mod3'],
      isPrivate: false,
      lastActivity: '2024-06-21T09:45:00Z',
      unreadCount: 7
    },
    {
      id: '3',
      name: 'Crisis Support Network',
      description: '24/7 crisis support and emergency assistance',
      type: 'crisis-support',
      participants: 45,
      moderators: ['mod1', 'mod4', 'mod5'],
      isPrivate: true,
      lastActivity: '2024-06-21T11:30:00Z',
      unreadCount: 0
    },
    {
      id: '4',
      name: 'Health & Wellness',
      description: 'General health discussions and wellness tips',
      type: 'general',
      participants: 89,
      moderators: ['mod2'],
      isPrivate: false,
      lastActivity: '2024-06-21T08:20:00Z',
      unreadCount: 12
    }
  ];

  const forumPosts: ForumPost[] = [
    {
      id: '1',
      title: 'Understanding Your Rights: A Comprehensive Guide',
      content: 'This post covers the fundamental rights that every person has, especially in the context of healthcare and personal safety...',
      author: 'Legal Expert Sarah',
      authorType: 'expert',
      category: 'Legal Rights',
      timestamp: '2024-06-20T14:30:00Z',
      replies: 23,
      likes: 45,
      views: 234,
      tags: ['rights', 'legal', 'healthcare'],
      pinned: true,
      locked: false
    },
    {
      id: '2',
      title: 'Medication Adherence Tips That Actually Work',
      content: 'Sharing some practical strategies that have helped me maintain consistent medication adherence...',
      author: 'Community Member',
      authorType: 'user',
      category: 'Health & Treatment',
      timestamp: '2024-06-21T09:15:00Z',
      replies: 12,
      likes: 28,
      views: 156,
      tags: ['medication', 'adherence', 'tips'],
      pinned: false,
      locked: false
    },
    {
      id: '3',
      title: 'Safety Planning Workshop - June 25th',
      content: 'Join us for an interactive workshop on creating effective personal safety plans...',
      author: 'Workshop Coordinator',
      authorType: 'moderator',
      category: 'Events & Workshops',
      timestamp: '2024-06-19T16:00:00Z',
      replies: 8,
      likes: 15,
      views: 89,
      tags: ['workshop', 'safety', 'planning'],
      pinned: false,
      locked: false
    }
  ];

  const sharedResources: SharedResource[] = [
    {
      id: '1',
      title: 'Emergency Contact List Template',
      description: 'Customizable template for organizing emergency contacts and important phone numbers',
      type: 'document',
      url: '/resources/emergency-contacts-template.pdf',
      sharedBy: 'Safety Coordinator',
      sharedDate: '2024-06-20',
      category: 'Safety Planning',
      downloads: 145,
      rating: 4.8,
      verified: true
    },
    {
      id: '2',
      title: 'Meditation for Stress Relief',
      description: 'Guided meditation audio specifically designed for stress and trauma relief',
      type: 'audio',
      url: '/resources/stress-relief-meditation.mp3',
      sharedBy: 'Wellness Expert',
      sharedDate: '2024-06-18',
      category: 'Mental Health',
      downloads: 89,
      rating: 4.6,
      verified: true
    },
    {
      id: '3',
      title: 'Know Your Rights Infographic',
      description: 'Visual guide to understanding your legal rights and protections',
      type: 'image',
      url: '/resources/rights-infographic.png',
      sharedBy: 'Legal Aid Team',
      sharedDate: '2024-06-21',
      category: 'Legal Information',
      downloads: 67,
      rating: 4.9,
      verified: true
    }
  ];

  const MessageCard = ({ message }: { message: Message }) => (
    <div className={`flex ${message.senderType === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
        message.senderType === 'user' 
          ? 'bg-blue-500 text-white' 
          : message.senderType === 'provider'
          ? 'bg-green-100 text-green-900'
          : 'bg-purple-100 text-purple-900'
      }`}>
        {message.senderType !== 'user' && (
          <p className="text-xs font-medium mb-1">{message.senderName}</p>
        )}
        <p className="text-sm">{message.content}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs opacity-75">
            {new Date(message.timestamp).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false
            })}
          </span>
          {message.encrypted && (
            <Lock className="w-3 h-3 opacity-75" />
          )}
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
            Communication Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Secure messaging, peer support, community forums, and resource sharing for HIV patients and GBV survivors
          </p>
        </div>

        {/* Privacy Controls */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowPrivacyMode(!showPrivacyMode)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-colors ${
                  showPrivacyMode ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {showPrivacyMode ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                <span>Privacy Mode</span>
              </button>
              <button
                onClick={() => setIsEncrypted(!isEncrypted)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-colors ${
                  isEncrypted ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Lock className="w-5 h-5" />
                <span>End-to-End Encryption</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: 'messaging' as const, label: 'Secure Messaging', icon: MessageCircle },
              { id: 'peer-chat' as const, label: 'Peer Support Chat', icon: Users },
              { id: 'forums' as const, label: 'Community Forums', icon: Globe },
              { id: 'resources' as const, label: 'Resource Sharing', icon: Share2 }
            ].map((tool) => {
              const Icon = tool.icon;
              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveTool(tool.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all text-lg ${
                    activeTool === tool.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tool.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Secure Messaging */}
        {activeTool === 'messaging' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Secure Messaging with Service Providers</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Communicate securely with healthcare providers, counselors, and support staff using end-to-end encryption
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-blue-500 text-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Dr. Amina Hassan</h3>
                      <p className="text-blue-100">HIV Specialist • Online</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
                      <Phone className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
                      <Video className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="h-96 overflow-y-auto p-6">
                {messages.map((message) => (
                  <MessageCard key={message.id} message={message} />
                ))}
              </div>

              <div className="border-t border-gray-200 p-4">
                <div className="flex items-center space-x-3">
                  <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg">
                    <ImageIcon className="w-5 h-5" />
                  </button>
                  <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg">
                    <Smile className="w-5 h-5" />
                  </button>
                  <button className="bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600 transition-colors">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                {isEncrypted && (
                  <div className="flex items-center space-x-2 mt-2 text-sm text-green-600">
                    <Lock className="w-4 h-4" />
                    <span>Messages are end-to-end encrypted</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Messaging Features</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Lock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">End-to-End Encryption</h4>
                  <p className="text-gray-600">All messages are encrypted and only you and your provider can read them</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Secure Storage</h4>
                  <p className="text-gray-600">Messages are stored securely and automatically deleted after 30 days</p>
                </div>
                <div className="text-center">
                  <Eye className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Privacy Controls</h4>
                  <p className="text-gray-600">Control who can contact you and manage your privacy settings</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Peer Support Chat */}
        {activeTool === 'peer-chat' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Peer Support Chat Rooms</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Connect with others in moderated support groups for peer counseling and community support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chatRooms.map((room) => (
                <ChatRoomCard key={room.id} room={room} onSelectChat={setSelectedChat} />
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Chat Room Guidelines</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Community Standards</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Respect all community members and their experiences</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Maintain confidentiality and privacy of shared information</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Provide support and encouragement to fellow members</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Report any inappropriate behavior to moderators</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Safety Features</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>24/7 moderation by trained professionals</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>Anonymous participation options available</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>Crisis intervention protocols in place</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>Secure and encrypted communication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Community Forums */}
        {activeTool === 'forums' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Community Forums</h2>
                <p className="text-lg text-gray-600">
                  Participate in community discussions, ask questions, and share experiences
                </p>
              </div>
              <button className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors">
                <Plus className="w-5 h-5" />
                <span>New Post</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {forumPosts.map((post) => (
                <ForumPostCard key={post.id} post={post} />
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Forum Categories</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-2xl">
                  <Heart className="w-10 h-10 text-blue-500 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Health & Treatment</h4>
                  <p className="text-sm text-gray-600">HIV care, medication, and health topics</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-2xl">
                  <Shield className="w-10 h-10 text-green-500 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Safety & Support</h4>
                  <p className="text-sm text-gray-600">GBV support and safety planning</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-2xl">
                  <FileText className="w-10 h-10 text-purple-500 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Legal Rights</h4>
                  <p className="text-sm text-gray-600">Legal information and rights awareness</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-2xl">
                  <Users className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Community</h4>
                  <p className="text-sm text-gray-600">General discussions and events</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Resource Sharing */}
        {activeTool === 'resources' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Resource Sharing Platform</h2>
                <p className="text-lg text-gray-600">
                  Share and access helpful resources, documents, and educational materials
                </p>
              </div>
              <button className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition-colors">
                <Upload className="w-5 h-5" />
                <span>Share Resource</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sharedResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Resource Categories</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Safety Planning</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Emergency contact templates</li>
                    <li>• Safety plan worksheets</li>
                    <li>• Crisis response guides</li>
                    <li>• Digital safety tools</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Health & Wellness</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Medication tracking sheets</li>
                    <li>• Health monitoring tools</li>
                    <li>• Wellness guides</li>
                    <li>• Mental health resources</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Legal & Rights</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Rights information sheets</li>
                    <li>• Legal process guides</li>
                    <li>• Court preparation materials</li>
                    <li>• Advocacy resources</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Safety Notice */}
        <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Communication Safety</h3>
          <p className="text-lg mb-6">
            All communication tools include privacy controls, encryption, and moderation to ensure your safety and security
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-xl">
              <Lock className="w-5 h-5" />
              <span>End-to-End Encrypted</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-xl">
              <Shield className="w-5 h-5" />
              <span>24/7 Moderated</span>
            </div>
            <div className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-xl">
              <Eye className="w-5 h-5" />
              <span>Privacy Protected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationToolsPage;

  const ChatRoomCard = ({ room, onSelectChat }: { room: ChatRoom; onSelectChat: (id: string) => void }) => (
    <div
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-200"
      onClick={() => onSelectChat(room.id)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{room.name}</h3>
          <p className="text-gray-600 text-sm mb-2">{room.description}</p>
          <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              room.type === 'crisis-support' ? 'bg-red-100 text-red-800' :
              room.type === 'support-group' ? 'bg-blue-100 text-blue-800' :
              room.type === 'topic-based' ? 'bg-green-100 text-green-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {room.type.replace('-', ' ')}
            </span>
            {room.isPrivate && (
              <Lock className="w-4 h-4 text-gray-500" />
            )}
          </div>
        </div>
        {room.unreadCount > 0 && (
          <div className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {room.unreadCount}
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <Users className="w-4 h-4" />
          <span>{room.participants} members</span>
        </div>
        <span>{new Date(room.lastActivity).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })}</span>
      </div>
    </div>
  );

  const ForumPostCard = ({ post }: { post: ForumPost }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900">{post.title}</h3>
            {post.pinned && (
              <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-lg text-xs font-medium">
                Pinned
              </div>
            )}
          </div>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.content}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>by {post.author}</span>
            <span>{new Date(post.timestamp).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}</span>
            <span>{post.category}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <MessageCircle className="w-4 h-4" />
            <span>{post.replies}</span>
          </div>
          <div className="flex items-center space-x-1">
            <ThumbsUp className="w-4 h-4" />
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Eye className="w-4 h-4" />
            <span>{post.views}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          {post.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const ResourceCard = ({ resource }: { resource: SharedResource }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900">{resource.title}</h3>
            {resource.verified && (
              <CheckCircle className="w-5 h-5 text-green-500" aria-label="Verified Resource" />
            )}
          </div>
          <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
          <div className="flex items-center space-x-2 mb-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              resource.type === 'document' ? 'bg-blue-100 text-blue-800' :
              resource.type === 'video' ? 'bg-red-100 text-red-800' :
              resource.type === 'audio' ? 'bg-green-100 text-green-800' :
              resource.type === 'image' ? 'bg-purple-100 text-purple-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {resource.type}
            </span>
            <span className="text-sm text-gray-500">{resource.category}</span>
          </div>
        </div>
        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
          <Download className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-4">
          <span>by {resource.sharedBy}</span>
          <span>{resource.downloads} downloads</span>
        </div>
        <div className="flex items-center space-x-1">
          <Heart className="w-4 h-4 text-red-500" />
          <span>{resource.rating}</span>
        </div>
      </div>
    </div>
  );
