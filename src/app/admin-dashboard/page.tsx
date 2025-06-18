'use client';

import { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  FileText, 
  Settings, 
  Shield, 
  Bell, 
  Calendar, 
  MessageCircle, 
  Download, 
  Upload, 
  Eye, 
  Edit, 
  Trash2, 
  Plus, 
  Search, 
  Filter, 
  RefreshCw, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Database, 
  Server, 
  Wifi, 
  WifiOff, 
  UserCheck, 
  UserX, 
  BookOpen, 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Award, 
  Target, 
  Zap,
  PieChart,
  LineChart,
  MoreVertical,
  ExternalLink,
  Copy,
  Save,
  X
} from 'lucide-react';

type DashboardSection = 'overview' | 'service-provider' | 'system-admin' | 'analytics' | 'maintenance';

interface CaseData {
  id: string;
  clientId: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'critical';
  assignedTo: string;
  serviceType: string;
  dateCreated: string;
  lastUpdated: string;
  notes: string;
}

interface ServiceProvider {
  id: string;
  name: string;
  type: 'health' | 'legal' | 'social' | 'ngo';
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
  casesHandled: number;
  rating: number;
  contact: {
    email: string;
    phone: string;
  };
}

interface SystemMetrics {
  totalUsers: number;
  activeUsers: number;
  totalCases: number;
  resolvedCases: number;
  systemUptime: string;
  responseTime: number;
  storageUsed: number;
  storageTotal: number;
}

interface ContentItem {
  id: string;
  title: string;
  type: 'article' | 'video' | 'guide' | 'resource';
  status: 'published' | 'draft' | 'review';
  author: string;
  dateCreated: string;
  views: number;
  rating: number;
}

const AdminDashboardPage = () => {
  const [activeSection, setActiveSection] = useState<DashboardSection>('overview');
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const systemMetrics: SystemMetrics = {
    totalUsers: 1247,
    activeUsers: 892,
    totalCases: 456,
    resolvedCases: 389,
    systemUptime: '99.8%',
    responseTime: 245,
    storageUsed: 2.4,
    storageTotal: 10.0
  };

  const recentCases: CaseData[] = [
    {
      id: 'CASE001',
      clientId: 'CLIENT001',
      status: 'in-progress',
      priority: 'high',
      assignedTo: 'Dr. Amina Hassan',
      serviceType: 'Medical Support',
      dateCreated: '2024-06-20',
      lastUpdated: '2024-06-21',
      notes: 'Client requires immediate medical attention and counseling support'
    },
    {
      id: 'CASE002',
      clientId: 'CLIENT002',
      status: 'open',
      priority: 'critical',
      assignedTo: 'Legal Aid Team',
      serviceType: 'Legal Support',
      dateCreated: '2024-06-21',
      lastUpdated: '2024-06-21',
      notes: 'Emergency legal protection needed. Client in safe house.'
    },
    {
      id: 'CASE003',
      clientId: 'CLIENT003',
      status: 'resolved',
      priority: 'medium',
      assignedTo: 'Social Worker',
      serviceType: 'Social Support',
      dateCreated: '2024-06-18',
      lastUpdated: '2024-06-21',
      notes: 'Economic empowerment program enrollment completed'
    }
  ];

  const serviceProviders: ServiceProvider[] = [
    {
      id: '1',
      name: 'Federal Medical Centre Yola',
      type: 'health',
      status: 'active',
      lastLogin: '2024-06-21T10:30:00Z',
      casesHandled: 45,
      rating: 4.8,
      contact: {
        email: 'admin@fmcyola.gov.ng',
        phone: '+237-75-627-1234'
      }
    },
    {
      id: '2',
      name: 'Legal Aid Council Adamawa',
      type: 'legal',
      status: 'active',
      lastLogin: '2024-06-21T09:15:00Z',
      casesHandled: 23,
      rating: 4.6,
      contact: {
        email: 'info@legalaidadamawa.org',
        phone: '+237-80-1234-5678'
      }
    },
    {
      id: '3',
      name: 'WRAPA',
      type: 'ngo',
      status: 'active',
      lastLogin: '2024-06-20T16:45:00Z',
      casesHandled: 67,
      rating: 4.9,
      contact: {
        email: 'info@wrapa.org.ng',
        phone: '+237-80-3456-7890'
      }
    }
  ];

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'Understanding Gender-Based Violence',
      type: 'article',
      status: 'published',
      author: 'Dr. Amina Hassan',
      dateCreated: '2024-06-15',
      views: 1250,
      rating: 4.8
    },
    {
      id: '2',
      title: 'HIV Prevention and Care',
      type: 'video',
      status: 'published',
      author: 'Medical Team',
      dateCreated: '2024-06-18',
      views: 890,
      rating: 4.7
    },
    {
      id: '3',
      title: 'Safety Planning Workshop',
      type: 'guide',
      status: 'review',
      author: 'Safety Coordinator',
      dateCreated: '2024-06-20',
      views: 0,
      rating: 0
    }
  ];

  const MetricCard = ({ title, value, subtitle, icon: Icon, trend, color }: any) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {trend && (
          <div className={`flex items-center space-x-1 ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {trend > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span className="text-sm font-medium">{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-gray-600 text-sm">{title}</p>
      {subtitle && <p className="text-gray-500 text-xs mt-1">{subtitle}</p>}
    </div>
  );

  const CaseCard = ({ caseData }: { caseData: CaseData }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900">{caseData.id}</h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              caseData.priority === 'critical' ? 'bg-red-100 text-red-800' :
              caseData.priority === 'high' ? 'bg-orange-100 text-orange-800' :
              caseData.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              {caseData.priority}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              caseData.status === 'resolved' ? 'bg-green-100 text-green-800' :
              caseData.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
              caseData.status === 'open' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {caseData.status}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-2">{caseData.serviceType}</p>
          <p className="text-gray-700 text-sm mb-3">{caseData.notes}</p>
        </div>
        <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>Assigned to: {caseData.assignedTo}</span>
        <span>Updated: {new Date(caseData.lastUpdated).toLocaleDateString()}</span>
      </div>
    </div>
  );

  const ProviderCard = ({ provider }: { provider: ServiceProvider }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900">{provider.name}</h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              provider.status === 'active' ? 'bg-green-100 text-green-800' :
              provider.status === 'inactive' ? 'bg-red-100 text-red-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {provider.status}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-2 capitalize">{provider.type} Provider</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>Cases: {provider.casesHandled}</span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>{provider.rating}</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
            <Edit className="w-4 h-4" />
          </button>
          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="space-y-1 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <Mail className="w-4 h-4" />
          <span>{provider.contact.email}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4" />
          <span>{provider.contact.phone}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4" />
          <span>Last login: {new Date(provider.lastLogin).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );

  const ContentCard = ({ content }: { content: ContentItem }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900">{content.title}</h3>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              content.type === 'article' ? 'bg-blue-100 text-blue-800' :
              content.type === 'video' ? 'bg-red-100 text-red-800' :
              content.type === 'guide' ? 'bg-green-100 text-green-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {content.type}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              content.status === 'published' ? 'bg-green-100 text-green-800' :
              content.status === 'review' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {content.status}
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-2">by {content.author}</p>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
            <Eye className="w-4 h-4" />
          </button>
          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
            <Edit className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>Created: {new Date(content.dateCreated).toLocaleDateString()}</span>
        <div className="flex items-center space-x-4">
          <span>{content.views} views</span>
          {content.rating > 0 && (
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>{content.rating}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-2 sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Administrative Dashboard
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Comprehensive management portal for HIV crisis support services
            </p>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 mt-4 md:mt-0">
            <button className="flex items-center space-x-2 bg-blue-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm">
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">Refresh</span>
            </button>
            <button className="flex items-center space-x-2 bg-green-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6 md:mb-8">
          <div className="flex flex-wrap gap-1 sm:gap-2 justify-center md:justify-start">
            {[
              { id: 'overview' as const, label: 'Overview', icon: BarChart3 },
              { id: 'service-provider' as const, label: 'Service Provider Portal', icon: Users },
              { id: 'system-admin' as const, label: 'System Administration', icon: Settings },
              { id: 'analytics' as const, label: 'Analytics', icon: PieChart },
              { id: 'maintenance' as const, label: 'Maintenance', icon: Server }
            ].map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-xl font-medium transition-all text-xs sm:text-sm ${
                    activeSection === section.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{section.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="space-y-6 md:space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              <MetricCard
                title="Total Users"
                value={systemMetrics.totalUsers.toLocaleString()}
                subtitle={`${systemMetrics.activeUsers} active`}
                icon={Users}
                trend={12}
                color="bg-blue-500"
              />
              <MetricCard
                title="Total Cases"
                value={systemMetrics.totalCases}
                subtitle={`${systemMetrics.resolvedCases} resolved`}
                icon={FileText}
                trend={8}
                color="bg-green-500"
              />
              <MetricCard
                title="System Uptime"
                value={systemMetrics.systemUptime}
                subtitle={`${systemMetrics.responseTime}ms avg response`}
                icon={Activity}
                trend={2}
                color="bg-purple-500"
              />
              <MetricCard
                title="Storage Used"
                value={`${systemMetrics.storageUsed}GB`}
                subtitle={`of ${systemMetrics.storageTotal}GB total`}
                icon={Database}
                trend={-5}
                color="bg-orange-500"
              />
            </div>

            {/* Recent Activity */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Recent Cases</h2>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    View All
                  </button>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {recentCases.slice(0, 3).map((caseData) => (
                    <div key={caseData.id} className="border-l-4 border-blue-500 pl-3 sm:pl-4 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900 text-sm sm:text-base">{caseData.id}</span>
                        <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                          caseData.priority === 'critical' ? 'bg-red-100 text-red-800' :
                          caseData.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {caseData.priority}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600">{caseData.serviceType}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Assigned to {caseData.assignedTo}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">System Status</h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs sm:text-sm text-green-600 font-medium">All Systems Operational</span>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Wifi className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" />
                      <span className="font-medium text-gray-900 text-sm sm:text-base">API Services</span>
                    </div>
                    <span className="text-green-600 font-medium text-sm">Operational</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Database className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" />
                      <span className="font-medium text-gray-900 text-sm sm:text-base">Database</span>
                    </div>
                    <span className="text-green-600 font-medium text-sm">Operational</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" />
                      <span className="font-medium text-gray-900 text-sm sm:text-base">Security</span>
                    </div>
                    <span className="text-green-600 font-medium text-sm">Operational</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Service Provider Portal */}
        {activeSection === 'service-provider' && (
          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Service Provider Portal</h2>
              <button
                onClick={() => setShowAddForm(true)}
                className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Add Provider</span>
              </button>
            </div>

            {/* Case Management Interface */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Case Management Interface</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {recentCases.map((caseData) => (
                  <CaseCard key={caseData.id} caseData={caseData} />
                ))}
              </div>
            </div>

            {/* Service Providers */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Service Providers</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {serviceProviders.map((provider) => (
                  <ProviderCard key={provider.id} provider={provider} />
                ))}
              </div>
            </div>

            {/* Training Materials & Reporting Tools */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Training Materials</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-5 h-5 text-blue-500" />
                      <span className="font-medium text-gray-900 text-sm">GBV Response Training</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-900 text-sm">HIV Care Protocols</span>
                    </div>
                    <button className="text-green-600 hover:text-green-800 text-sm">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-purple-500" />
                      <span className="font-medium text-gray-900 text-sm">Safety Protocols</span>
                    </div>
                    <button className="text-purple-600 hover:text-purple-800 text-sm">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Reporting Tools</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-5 h-5 text-gray-600" />
                      <span className="font-medium text-gray-900 text-sm">Monthly Case Report</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                    <div className="flex items-center space-x-3">
                      <PieChart className="w-5 h-5 text-gray-600" />
                      <span className="font-medium text-gray-900 text-sm">Service Utilization</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-gray-600" />
                      <span className="font-medium text-gray-900 text-sm">Outcome Metrics</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* System Administration */}
        {activeSection === 'system-admin' && (
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">System Administration</h2>

            {/* User Management */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">User Management</h3>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-2 bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm">
                    <UserCheck className="w-4 h-4" />
                    <span className="hidden sm:inline">Add User</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm">
                    <UserX className="w-4 h-4" />
                    <span className="hidden sm:inline">Bulk Actions</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-2xl">
                  <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-lg font-bold text-gray-900">{systemMetrics.totalUsers}</p>
                  <p className="text-sm text-gray-600">Total Users</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-2xl">
                  <UserCheck className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <p className="text-lg font-bold text-gray-900">{systemMetrics.activeUsers}</p>
                  <p className="text-sm text-gray-600">Active Users</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-2xl">
                  <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <p className="text-lg font-bold text-gray-900">24</p>
                  <p className="text-sm text-gray-600">Pending</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-2xl">
                  <UserX className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <p className="text-lg font-bold text-gray-900">12</p>
                  <p className="text-sm text-gray-600">Suspended</p>
                </div>
              </div>
            </div>

            {/* Content Management */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Content Management</h3>
                <button className="flex items-center space-x-2 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Add Content</span>
                </button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {contentItems.map((content) => (
                  <ContentCard key={content.id} content={content} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Analytics Dashboard */}
        {activeSection === 'analytics' && (
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Analytics Dashboard</h2>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Usage Analytics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-gray-900 text-sm">Page Views</span>
                    <span className="text-blue-600 font-bold">12,456</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-900 text-sm">Active Sessions</span>
                    <span className="text-green-600 font-bold">892</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium text-gray-900 text-sm">Resource Downloads</span>
                    <span className="text-purple-600 font-bold">3,421</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Service Metrics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <span className="font-medium text-gray-900 text-sm">Cases Resolved</span>
                    <span className="text-red-600 font-bold">{systemMetrics.resolvedCases}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium text-gray-900 text-sm">Avg Response Time</span>
                    <span className="text-yellow-600 font-bold">{systemMetrics.responseTime}ms</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-indigo-50 rounded-lg">
                    <span className="font-medium text-gray-900 text-sm">User Satisfaction</span>
                    <span className="text-indigo-600 font-bold">4.7/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* System Maintenance */}
        {activeSection === 'maintenance' && (
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">System Maintenance</h2>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">System Health</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Server className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-900 text-sm">Server Status</span>
                    </div>
                    <span className="text-green-600 font-medium text-sm">Healthy</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Database className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-900 text-sm">Database</span>
                    </div>
                    <span className="text-green-600 font-medium text-sm">Optimal</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Zap className="w-5 h-5 text-yellow-500" />
                      <span className="font-medium text-gray-900 text-sm">Performance</span>
                    </div>
                    <span className="text-yellow-600 font-medium text-sm">Good</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Maintenance Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                    <div className="flex items-center space-x-3">
                      <RefreshCw className="w-5 h-5 text-blue-500" />
                      <span className="font-medium text-gray-900 text-sm">System Update</span>
                    </div>
                    <span className="text-blue-600 text-sm">Run</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                    <div className="flex items-center space-x-3">
                      <Database className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-900 text-sm">Database Backup</span>
                    </div>
                    <span className="text-green-600 text-sm">Start</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-purple-500" />
                      <span className="font-medium text-gray-900 text-sm">Security Scan</span>
                    </div>
                    <span className="text-purple-600 text-sm">Execute</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 sm:p-6 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-yellow-800 mb-2">Scheduled Maintenance</h3>
                  <p className="text-yellow-700 mb-4">
                    System maintenance is scheduled for Sunday, June 25th from 2:00 AM to 4:00 AM WAT.
                    All services will be temporarily unavailable during this period.
                  </p>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
