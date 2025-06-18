'use client';

import { useState } from 'react';
import {
  Heart,
  Shield,
  Users,
  Calendar,
  Clock,
  Phone,
  MapPin,
  Mail,
  Globe,
  CheckCircle,
  AlertTriangle,
  Info,
  Download,
  ExternalLink,
  Search,
  Filter,
  ChevronRight,
  ArrowLeft,
  Pill,
  UserCheck,
  FileText,
  Stethoscope,
  Lock,
  Eye,
  EyeOff,
  Star,
  Award
} from 'lucide-react';

type CareSection = 'overview' | 'adherence' | 'disclosure' | 'testing' | 'providers';

interface HealthcareProvider {
  id: string;
  name: string;
  type: 'hospital' | 'clinic' | 'specialist' | 'pharmacy';
  specialization: string[];
  location: {
    address: string;
    city: string;
    state: string;
  };
  contact: {
    phone: string;
    email?: string;
    website?: string;
  };
  services: string[];
  rating: number;
  availability: string;
  hivSpecialist: boolean;
  gbvTrained: boolean;
  languages: string[];
}

interface AdherenceResource {
  id: string;
  title: string;
  type: 'reminder' | 'guide' | 'tool' | 'app';
  description: string;
  features: string[];
  downloadUrl?: string;
  category: 'medication' | 'appointment' | 'lifestyle' | 'monitoring';
}

const HIVCareIntegrationPage = () => {
  const [activeSection, setActiveSection] = useState<CareSection>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvider, setSelectedProvider] = useState<HealthcareProvider | null>(null);
  const [showSafetyProtocol, setShowSafetyProtocol] = useState(false);

  const healthcareProviders: HealthcareProvider[] = [
    {
      id: '1',
      name: 'Federal Medical Centre Yola',
      type: 'hospital',
      specialization: ['HIV/AIDS Care', 'Infectious Diseases', 'Internal Medicine'],
      location: {
        address: 'Jimeta, PMB 2017',
        city: 'Yola',
        state: 'Adamawa'
      },
      contact: {
        phone: '+237-75-627-1234',
        email: 'info@fmcyola.gov.ng',
        website: 'www.fmcyola.gov.ng'
      },
      services: ['HIV Testing', 'ART Therapy', 'Viral Load Monitoring', 'Counseling', 'GBV Support'],
      rating: 4.8,
      availability: '24/7 Emergency, Clinic Hours: Mon-Fri 8AM-4PM',
      hivSpecialist: true,
      gbvTrained: true,
      languages: ['English', 'Hausa', 'Fulfulde']
    },
    {
      id: '2',
      name: 'Adamawa State Specialist Hospital',
      type: 'hospital',
      specialization: ['HIV Care', 'Women\'s Health', 'Mental Health'],
      location: {
        address: 'Specialist Hospital Road',
        city: 'Yola',
        state: 'Adamawa'
      },
      contact: {
        phone: '+237-75-628-5678',
        email: 'care@adamawaspecialist.org'
      },
      services: ['HIV Treatment', 'PMTCT', 'Family Planning', 'Trauma Counseling'],
      rating: 4.5,
      availability: 'Mon-Sat 7AM-6PM, Emergency 24/7',
      hivSpecialist: true,
      gbvTrained: true,
      languages: ['English', 'Hausa', 'Fulfulde', 'Kanuri']
    },
    {
      id: '3',
      name: 'PEPFAR Supported Clinic Network',
      type: 'clinic',
      specialization: ['HIV Prevention', 'Treatment', 'Care'],
      location: {
        address: 'Multiple locations across Adamawa',
        city: 'Various',
        state: 'Adamawa'
      },
      contact: {
        phone: '+237-80-1234-5678',
        email: 'support@pepfaradamawa.org',
        website: 'www.pepfaradamawa.org'
      },
      services: ['Free HIV Testing', 'ART Distribution', 'Adherence Support', 'Peer Counseling'],
      rating: 4.7,
      availability: 'Mon-Fri 8AM-5PM, Some weekend services',
      hivSpecialist: true,
      gbvTrained: true,
      languages: ['English', 'Hausa', 'Fulfulde']
    },
    {
      id: '4',
      name: 'Community Health Pharmacy',
      type: 'pharmacy',
      specialization: ['HIV Medications', 'Pharmaceutical Care'],
      location: {
        address: 'Central Market Area',
        city: 'Yola',
        state: 'Adamawa'
      },
      contact: {
        phone: '+234-70-9876-5432',
        email: 'info@communityhealthpharm.ng'
      },
      services: ['ART Dispensing', 'Medication Counseling', 'Drug Interaction Screening'],
      rating: 4.3,
      availability: 'Mon-Sat 8AM-8PM, Sun 10AM-6PM',
      hivSpecialist: true,
      gbvTrained: false,
      languages: ['English', 'Hausa']
    }
  ];

  const adherenceResources: AdherenceResource[] = [
    {
      id: '1',
      title: 'HIV Medication Reminder App',
      type: 'app',
      description: 'Mobile app with customizable medication reminders and adherence tracking',
      features: ['Daily reminders', 'Pill counting', 'Appointment alerts', 'Progress tracking'],
      category: 'medication'
    },
    {
      id: '2',
      title: 'Adherence Support Guide',
      type: 'guide',
      description: 'Comprehensive guide for maintaining treatment adherence',
      features: ['Side effect management', 'Routine building', 'Travel tips', 'Emergency protocols'],
      downloadUrl: '/resources/adherence-guide.pdf',
      category: 'medication'
    },
    {
      id: '3',
      title: 'Pill Box Organizer System',
      type: 'tool',
      description: 'Weekly pill organizer with compartments for different medications',
      features: ['7-day organization', 'Morning/evening slots', 'Portable design', 'Clear labeling'],
      category: 'medication'
    },
    {
      id: '4',
      title: 'Appointment Tracking Calendar',
      type: 'tool',
      description: 'Digital calendar system for managing medical appointments',
      features: ['Appointment reminders', 'Provider contact info', 'Test result tracking', 'Insurance info'],
      category: 'appointment'
    }
  ];

  const disclosureGuidelines = [
    {
      title: 'Assess Safety First',
      description: 'Evaluate your partner\'s potential reaction and your safety before disclosure',
      tips: [
        'Consider your partner\'s personality and past reactions to difficult news',
        'Ensure you have a safe place to go if needed',
        'Have a support person you can contact',
        'Choose a private, comfortable setting'
      ],
      riskLevel: 'high'
    },
    {
      title: 'Prepare for the Conversation',
      description: 'Plan what you want to say and how you want to say it',
      tips: [
        'Practice with a counselor or trusted friend',
        'Prepare answers to likely questions',
        'Have educational materials ready',
        'Choose the right time when you won\'t be interrupted'
      ],
      riskLevel: 'medium'
    },
    {
      title: 'During the Disclosure',
      description: 'Communicate clearly and provide support information',
      tips: [
        'Be direct and honest about your status',
        'Explain what HIV means and doesn\'t mean',
        'Discuss prevention methods and treatment',
        'Give them time to process the information'
      ],
      riskLevel: 'medium'
    },
    {
      title: 'After Disclosure',
      description: 'Provide ongoing support and maintain open communication',
      tips: [
        'Answer questions as they arise',
        'Offer to attend counseling together',
        'Respect their need for time to process',
        'Continue to prioritize both of your health and safety'
      ],
      riskLevel: 'low'
    }
  ];

  const safetyProtocols = [
    {
      title: 'Pre-Testing Safety Assessment',
      steps: [
        'Screen for intimate partner violence using validated tools',
        'Assess current living situation and support systems',
        'Identify potential risks of testing disclosure',
        'Develop safety plan with patient before testing'
      ]
    },
    {
      title: 'Safe Testing Environment',
      steps: [
        'Ensure complete privacy during testing process',
        'Use trained counselors familiar with GBV dynamics',
        'Provide testing in safe, confidential locations',
        'Offer alternative testing times if needed for safety'
      ]
    },
    {
      title: 'Result Delivery Protocols',
      steps: [
        'Deliver results only to the tested individual',
        'Discuss disclosure risks and safety planning',
        'Provide immediate support resources',
        'Schedule follow-up appointments in safe manner'
      ]
    },
    {
      title: 'Index Case Contact Tracing',
      steps: [
        'Assess safety of partner notification',
        'Offer provider-assisted partner notification',
        'Respect patient autonomy in disclosure decisions',
        'Provide ongoing safety monitoring and support'
      ]
    }
  ];

  const filteredProviders = healthcareProviders.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.specialization.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         provider.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesSearch;
  });

  const ProviderCard = ({ provider }: { provider: HealthcareProvider }) => (
    <div
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-200"
      onClick={() => setSelectedProvider(provider)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-xl font-bold text-gray-900">{provider.name}</h3>
            {provider.hivSpecialist && (
              <Award className="w-5 h-5 text-yellow-500" title="HIV Specialist" />
            )}
            {provider.gbvTrained && (
              <Shield className="w-5 h-5 text-green-500" title="GBV Trained" />
            )}
          </div>
          <div className="flex items-center space-x-2 mb-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              provider.type === 'hospital' ? 'bg-blue-100 text-blue-800' :
              provider.type === 'clinic' ? 'bg-green-100 text-green-800' :
              provider.type === 'specialist' ? 'bg-purple-100 text-purple-800' :
              'bg-orange-100 text-orange-800'
            }`}>
              {provider.type.charAt(0).toUpperCase() + provider.type.slice(1)}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">{provider.rating}</span>
            </div>
          </div>
        </div>
        <ChevronRight className="w-6 h-6 text-gray-400" />
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4" />
          <span>{provider.location.address}, {provider.location.city}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Phone className="w-4 h-4" />
          <span>{provider.contact.phone}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{provider.availability}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {provider.services.slice(0, 3).map((service, index) => (
          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
            {service}
          </span>
        ))}
        {provider.services.length > 3 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
            +{provider.services.length - 3} more
          </span>
        )}
      </div>
    </div>
  );

  const AdherenceCard = ({ resource }: { resource: AdherenceResource }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
          <div className="flex items-center space-x-2 mb-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              resource.type === 'app' ? 'bg-blue-100 text-blue-800' :
              resource.type === 'guide' ? 'bg-green-100 text-green-800' :
              resource.type === 'tool' ? 'bg-purple-100 text-purple-800' :
              'bg-orange-100 text-orange-800'
            }`}>
              {resource.type.toUpperCase()}
            </span>
            <span className={`px-2 py-1 rounded-lg text-xs ${
              resource.category === 'medication' ? 'bg-red-100 text-red-700' :
              resource.category === 'appointment' ? 'bg-blue-100 text-blue-700' :
              resource.category === 'lifestyle' ? 'bg-green-100 text-green-700' :
              'bg-purple-100 text-purple-700'
            }`}>
              {resource.category}
            </span>
          </div>
        </div>
        {resource.downloadUrl ? (
          <Download className="w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-700" />
        ) : (
          <ExternalLink className="w-6 h-6 text-gray-400" />
        )}
      </div>

      <p className="text-gray-600 mb-4">{resource.description}</p>

      <div className="space-y-2">
        <h4 className="font-medium text-gray-900">Features:</h4>
        <ul className="space-y-1">
          {resource.features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const DisclosureGuidelineCard = ({ guideline, index }: { guideline: any; index: number }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
          guideline.riskLevel === 'high' ? 'bg-red-500' :
          guideline.riskLevel === 'medium' ? 'bg-yellow-500' :
          'bg-green-500'
        }`}>
          {index + 1}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{guideline.title}</h3>
          <p className="text-gray-600 mb-4">{guideline.description}</p>
          <div className="space-y-2">
            {guideline.tips.map((tip: string, tipIndex: number) => (
              <div key={tipIndex} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const SafetyProtocolCard = ({ protocol, index }: { protocol: any; index: number }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
          {index + 1}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{protocol.title}</h3>
          <div className="space-y-3">
            {protocol.steps.map((step: string, stepIndex: number) => (
              <div key={stepIndex} className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (selectedProvider) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedProvider(null)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6 text-lg font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Providers</span>
          </button>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{selectedProvider.name}</h1>
                {selectedProvider.hivSpecialist && (
                  <Award className="w-6 h-6 text-yellow-500" title="HIV Specialist" />
                )}
                {selectedProvider.gbvTrained && (
                  <Shield className="w-6 h-6 text-green-500" title="GBV Trained Staff" />
                )}
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedProvider.type === 'hospital' ? 'bg-blue-100 text-blue-800' :
                  selectedProvider.type === 'clinic' ? 'bg-green-100 text-green-800' :
                  selectedProvider.type === 'specialist' ? 'bg-purple-100 text-purple-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {selectedProvider.type.charAt(0).toUpperCase() + selectedProvider.type.slice(1)}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-medium text-gray-700">{selectedProvider.rating}/5.0</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">{selectedProvider.contact.phone}</p>
                    </div>
                  </div>
                  {selectedProvider.contact.email && (
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">{selectedProvider.contact.email}</p>
                      </div>
                    </div>
                  )}
                  {selectedProvider.contact.website && (
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-gray-900">Website</p>
                        <p className="text-blue-600 hover:text-blue-800 cursor-pointer">{selectedProvider.contact.website}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">
                        {selectedProvider.location.address}<br />
                        {selectedProvider.location.city}, {selectedProvider.location.state}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Services & Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Availability</p>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-500" />
                      <p className="text-gray-600">{selectedProvider.availability}</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-gray-900 mb-2">Languages Supported</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProvider.languages.map((lang, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-lg">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-gray-900 mb-2">Specializations</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProvider.specialization.map((spec, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-lg">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-medium text-gray-900 mb-2">Services Offered</p>
                    <div className="space-y-2">
                      {selectedProvider.services.map((service, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            HIV Care Integration
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive HIV care services integrated with gender-based violence support for patients in Adamawa State
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: 'overview' as const, label: 'Overview', icon: Heart },
              { id: 'adherence' as const, label: 'Treatment Adherence', icon: Pill },
              { id: 'disclosure' as const, label: 'Disclosure Guidance', icon: UserCheck },
              { id: 'testing' as const, label: 'Safety Protocols', icon: Shield },
              { id: 'providers' as const, label: 'Healthcare Providers', icon: Stethoscope }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all text-lg ${
                    activeSection === tab.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Pill className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Treatment Adherence</h3>
                <p className="text-gray-600">Support tools and resources for maintaining HIV treatment adherence</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <UserCheck className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Disclosure Guidance</h3>
                <p className="text-gray-600">Safe and supportive guidance for HIV status disclosure to partners</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Safety Protocols</h3>
                <p className="text-gray-600">Index case testing protocols prioritizing patient safety</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Stethoscope className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Provider Directory</h3>
                <p className="text-gray-600">Comprehensive directory of HIV-specialized healthcare providers</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Integrated Care Approach</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">HIV Care Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Antiretroviral therapy (ART) management</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Viral load monitoring and CD4 testing</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Opportunistic infection prevention</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Adherence counseling and support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Mental health and psychosocial support</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">GBV-Informed Care</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-red-500" />
                      <span>Trauma-informed care approaches</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-red-500" />
                      <span>Safety planning and risk assessment</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-red-500" />
                      <span>Confidential and secure service delivery</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-red-500" />
                      <span>Coordinated referral systems</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-red-500" />
                      <span>Legal and social support integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Treatment Adherence Section */}
        {activeSection === 'adherence' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Treatment Adherence Support</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Tools, resources, and strategies to help maintain consistent HIV treatment adherence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adherenceResources.map((resource) => (
                <AdherenceCard key={resource.id} resource={resource} />
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Adherence Best Practices</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Daily Routine Tips</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>Take medications at the same time every day</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>Use pill organizers and reminder systems</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Heart className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>Link medication taking to daily activities</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>Build a support network for accountability</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Managing Side Effects</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Info className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Communicate with healthcare providers about side effects</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Info className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Never stop medications without medical consultation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Info className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Explore side effect management strategies</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Info className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Consider medication timing adjustments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Disclosure Guidance Section */}
        {activeSection === 'disclosure' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Disclosure Guidance</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Safe and supportive guidance for disclosing HIV status to partners, prioritizing your safety and well-being
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-yellow-800 mb-2">Important Safety Notice</h3>
                  <p className="text-yellow-700">
                    Your safety is the top priority. If you are experiencing violence or fear for your safety,
                    please contact our crisis hotline or emergency services before considering disclosure.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {disclosureGuidelines.map((guideline, index) => (
                <DisclosureGuidelineCard key={index} guideline={guideline} index={index} />
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Support Resources</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Professional Support</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-blue-500" />
                      <span>HIV counselors trained in disclosure support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-blue-500" />
                      <span>Couples counseling services</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-blue-500" />
                      <span>Safety planning specialists</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-500" />
                      <span>24/7 crisis support hotline</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Educational Materials</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-green-500" />
                      <span>HIV facts and myths brochures</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Download className="w-5 h-5 text-green-500" />
                      <span>Partner disclosure conversation guides</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-green-500" />
                      <span>Online resources and videos</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-green-500" />
                      <span>Peer support group connections</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Safety Protocols Section */}
        {activeSection === 'testing' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Index Case Testing Safety Protocols</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive safety protocols for HIV testing and partner notification in the context of gender-based violence
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg mb-8">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-red-600 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-red-800 mb-2">Safety First Protocol</h3>
                  <p className="text-red-700">
                    All testing and partner notification procedures must prioritize patient safety.
                    No action should be taken that could increase risk of violence or harm.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {safetyProtocols.map((protocol, index) => (
                <SafetyProtocolCard key={index} protocol={protocol} index={index} />
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Emergency Response Procedures</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Immediate Safety Measures</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
                      <span>Activate emergency response team if violence is disclosed</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-red-500 mt-0.5" />
                      <span>Provide immediate access to crisis hotlines</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-red-500 mt-0.5" />
                      <span>Offer safe shelter and protection services</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-red-500 mt-0.5" />
                      <span>Connect with specialized GBV support services</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Follow-up Care</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>Schedule safe follow-up appointments</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Heart className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>Provide ongoing psychosocial support</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Lock className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>Maintain strict confidentiality protocols</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                      <span>Regular safety assessment and planning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Healthcare Providers Section */}
        {activeSection === 'providers' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Healthcare Provider Directory</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive directory of HIV-specialized healthcare providers trained in gender-based violence support
              </p>
            </div>

            {/* Search */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search providers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProviders.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} />
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Provider Qualifications</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">HIV Specialist</h4>
                  <p className="text-gray-600">Certified in HIV care and treatment with specialized training</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">GBV Trained</h4>
                  <p className="text-gray-600">Trained in gender-based violence response and trauma-informed care</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Community Focused</h4>
                  <p className="text-gray-600">Committed to serving the Adamawa State community with cultural sensitivity</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Emergency Contact Banner */}
        <div className="mt-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Emergency Support</h3>
          <p className="text-lg mb-6">
            If you are in immediate danger or need urgent medical care, please contact emergency services
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="tel:117"
              className="flex items-center space-x-2 bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Emergency: 117</span>
            </a>
            <a
              href="tel:+237-75-627-8901"
              className="flex items-center space-x-2 bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>HIV Crisis Hotline: +237-75-627-8901</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HIVCareIntegrationPage;