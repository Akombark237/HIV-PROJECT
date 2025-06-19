'use client';

import { useState } from 'react';
import {
  Heart,
  Phone,
  Users,
  BookOpen,
  MessageCircle,
  Globe,
  MapPin,
  Clock,
  Mail,
  Download,
  ExternalLink,
  Search,
  Filter,
  ChevronRight,
  ArrowLeft,
  CheckCircle,
  Star,
  Shield,
  FileText,
  Plus,
  AlertTriangle
} from 'lucide-react';

type ResourceCategory = 'all' | 'psychosocial' | 'counseling' | 'support-groups' | 'educational' | 'providers' | 'referrals';

interface SupportService {
  id: string;
  name: string;
  category: ResourceCategory;
  type: 'online' | 'offline' | 'both';
  description: string;
  contact: {
    phone?: string;
    email?: string;
    website?: string;
    address?: string;
  };
  availability: string;
  languages: string[];
  specialization: string[];
}

interface EducationalResource {
  id: string;
  title: string;
  type: 'pdf' | 'video' | 'article' | 'guide';
  description: string;
  downloadUrl?: string;
  readingTime?: string;
  language: string;
  category: string;
}

interface ServiceProvider {
  id: string;
  name: string;
  type: 'health' | 'law-enforcement' | 'legal' | 'social' | 'civil-society';
  category: string;
  description: string;
  services: string[];
  contact: {
    phone: string;
    email?: string;
    address: string;
    website?: string;
  };
  availability: string;
  languages: string[];
  specialization: string[];
  rating: number;
  verified: boolean;
}

interface ReferralCase {
  id: string;
  clientId: string;
  fromProvider: string;
  toProvider: string;
  serviceType: string;
  urgency: 'low' | 'medium' | 'high' | 'emergency';
  status: 'pending' | 'accepted' | 'in-progress' | 'completed' | 'cancelled';
  dateCreated: string;
  followUpDate?: string;
  notes: string;
  caseManager: string;
}

const SupportResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState<ResourceCategory>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<SupportService | null>(null);
  const [selectedProvider, setSelectedProvider] = useState<ServiceProvider | null>(null);
  const [showReferralForm, setShowReferralForm] = useState(false);

  const supportServices: SupportService[] = [
    {
      id: '1',
      name: 'Adamawa State HIV/AIDS Control Program',
      category: 'psychosocial',
      type: 'both',
      description: 'Comprehensive psychosocial support for HIV patients experiencing gender-based violence',
      contact: {
        phone: '+237-75-627-8901',
        email: 'support@adamawahiv.gov.ng',
        address: 'Ministry of Health, Yola, Adamawa State',
        website: 'www.adamawahiv.gov.ng'
      },
      availability: '24/7 Hotline, Office Hours: Mon-Fri 8AM-5PM',
      languages: ['English', 'Hausa', 'Fulfulde'],
      specialization: ['HIV Care', 'GBV Support', 'Trauma Counseling']
    },
    {
      id: '2',
      name: 'Women\'s Rights Advancement and Protection Alternative (WRAPA)',
      category: 'counseling',
      type: 'both',
      description: 'Legal aid and counseling services for women experiencing violence',
      contact: {
        phone: '+237-80-3456-7890',
        email: 'help@wrapa.org.ng',
        address: 'Plot 45, Atiku Abubakar Way, Yola',
        website: 'www.wrapa.org.ng'
      },
      availability: 'Mon-Sat 9AM-6PM, Emergency 24/7',
      languages: ['English', 'Hausa', 'Fulfulde'],
      specialization: ['Legal Aid', 'Counseling', 'Safe Houses']
    },
    {
      id: '3',
      name: 'Adamawa Peer Support Network',
      category: 'support-groups',
      type: 'both',
      description: 'Peer support groups for HIV positive individuals and GBV survivors',
      contact: {
        phone: '+237-70-1234-5678',
        email: 'connect@adamawapeers.org',
        address: 'Community Centers across Adamawa State'
      },
      availability: 'Weekly meetings, Online support 24/7',
      languages: ['English', 'Hausa', 'Fulfulde', 'Kanuri'],
      specialization: ['Peer Counseling', 'Group Therapy', 'Community Support']
    },
    {
      id: '4',
      name: 'Telemedicine HIV Support',
      category: 'counseling',
      type: 'online',
      description: 'Online counseling and medical consultation for HIV patients',
      contact: {
        phone: '+237-90-8765-4321',
        email: 'telehealth@adamawahealth.org',
        website: 'www.adamawatelehealth.org'
      },
      availability: '24/7 Online Platform',
      languages: ['English', 'Hausa', 'Fulfulde'],
      specialization: ['Medical Consultation', 'Mental Health', 'Medication Support']
    }
  ];

  const serviceProviders: ServiceProvider[] = [
    {
      id: '1',
      name: 'Federal Medical Centre Yola HIV Care Unit',
      type: 'health',
      category: 'HIV Care Facility',
      description: 'Comprehensive HIV care services including ART, counseling, and GBV support',
      services: ['HIV Testing', 'ART Therapy', 'Viral Load Monitoring', 'Counseling', 'GBV Support', 'PMTCT'],
      contact: {
        phone: '+237-75-627-1234',
        email: 'hivcare@fmcyola.gov.ng',
        address: 'Jimeta, PMB 2017, Yola, Adamawa State',
        website: 'www.fmcyola.gov.ng'
      },
      availability: '24/7 Emergency, Clinic Hours: Mon-Fri 8AM-4PM',
      languages: ['English', 'Hausa', 'Fulfulde'],
      specialization: ['HIV/AIDS Care', 'Gender-Based Violence', 'Infectious Diseases'],
      rating: 4.8,
      verified: true
    },
    {
      id: '2',
      name: 'Adamawa State Police GBV Unit',
      type: 'law-enforcement',
      category: 'Police Services',
      description: 'Specialized police unit trained in handling gender-based violence cases',
      services: ['GBV Investigation', 'Victim Protection', 'Legal Enforcement', 'Emergency Response'],
      contact: {
        phone: '+237-75-628-5678',
        email: 'gbv@adamawapolice.gov.ng',
        address: 'Police Headquarters, Yola, Adamawa State'
      },
      availability: '24/7 Emergency Response',
      languages: ['English', 'Hausa', 'Fulfulde'],
      specialization: ['Gender-Based Violence', 'Victim Protection', 'Criminal Investigation'],
      rating: 4.2,
      verified: true
    },
    {
      id: '3',
      name: 'Legal Aid Council Adamawa',
      type: 'legal',
      category: 'Legal Services',
      description: 'Free legal aid services for victims of gender-based violence',
      services: ['Legal Consultation', 'Court Representation', 'Legal Documentation', 'Rights Education'],
      contact: {
        phone: '+237-80-1234-5678',
        email: 'info@legalaidadamawa.org',
        address: 'Legal Aid Office, Yola, Adamawa State',
        website: 'www.legalaidadamawa.org'
      },
      availability: 'Mon-Fri 8AM-5PM, Emergency consultations available',
      languages: ['English', 'Hausa', 'Fulfulde'],
      specialization: ['Human Rights Law', 'Family Law', 'Criminal Law'],
      rating: 4.6,
      verified: true
    },
    {
      id: '4',
      name: 'Adamawa State Ministry of Women Affairs',
      type: 'social',
      category: 'Social Services',
      description: 'Government agency providing women empowerment and family welfare services',
      services: ['Women Empowerment', 'Family Welfare', 'Shelter Services', 'Economic Support'],
      contact: {
        phone: '+234-75-629-9876',
        email: 'info@adamawawomen.gov.ng',
        address: 'Ministry of Women Affairs, Yola, Adamawa State'
      },
      availability: 'Mon-Fri 8AM-4PM',
      languages: ['English', 'Hausa', 'Fulfulde', 'Kanuri'],
      specialization: ['Women Empowerment', 'Family Support', 'Social Welfare'],
      rating: 4.3,
      verified: true
    },
    {
      id: '5',
      name: 'Women\'s Rights Advancement and Protection Alternative (WRAPA)',
      type: 'civil-society',
      category: 'NGO',
      description: 'Civil society organization advocating for women\'s rights and GBV prevention',
      services: ['Advocacy', 'Awareness Campaigns', 'Capacity Building', 'Community Mobilization'],
      contact: {
        phone: '+237-80-3456-7890',
        email: 'info@wrapa.org.ng',
        address: 'Plot 45, Atiku Abubakar Way, Yola',
        website: 'www.wrapa.org.ng'
      },
      availability: 'Mon-Sat 9AM-6PM',
      languages: ['English', 'Hausa', 'Fulfulde'],
      specialization: ['Women\'s Rights', 'GBV Prevention', 'Community Advocacy'],
      rating: 4.7,
      verified: true
    }
  ];

  const referralCases: ReferralCase[] = [
    {
      id: '1',
      clientId: 'CLIENT001',
      fromProvider: 'Federal Medical Centre Yola',
      toProvider: 'Legal Aid Council Adamawa',
      serviceType: 'Legal Support',
      urgency: 'high',
      status: 'in-progress',
      dateCreated: '2024-06-20',
      followUpDate: '2024-06-25',
      notes: 'Client needs legal support for domestic violence case. HIV status confidentiality required.',
      caseManager: 'Sarah Adamu'
    },
    {
      id: '2',
      clientId: 'CLIENT002',
      fromProvider: 'WRAPA',
      toProvider: 'Adamawa State Police GBV Unit',
      serviceType: 'Protection Services',
      urgency: 'emergency',
      status: 'accepted',
      dateCreated: '2024-06-21',
      followUpDate: '2024-06-22',
      notes: 'Immediate protection needed. Client in safe house. Coordinate with police for safety.',
      caseManager: 'Ibrahim Musa'
    },
    {
      id: '3',
      clientId: 'CLIENT003',
      fromProvider: 'Legal Aid Council',
      toProvider: 'Ministry of Women Affairs',
      serviceType: 'Economic Support',
      urgency: 'medium',
      status: 'pending',
      dateCreated: '2024-06-19',
      notes: 'Client needs economic empowerment support after leaving abusive relationship.',
      caseManager: 'Fatima Hassan'
    }
  ];

  const educationalResources: EducationalResource[] = [
    {
      id: '1',
      title: 'Understanding Your Rights: HIV and GBV in Nigeria',
      type: 'pdf',
      description: 'Comprehensive guide on legal rights and protections for HIV patients experiencing violence',
      downloadUrl: '/resources/hiv-gbv-rights-guide.pdf',
      readingTime: '15 minutes',
      language: 'English',
      category: 'Legal Rights'
    },
    {
      id: '2',
      title: 'Coping Strategies for HIV Patients',
      type: 'video',
      description: 'Video series on mental health and coping mechanisms',
      readingTime: '30 minutes',
      language: 'Hausa',
      category: 'Mental Health'
    },
    {
      id: '3',
      title: 'Building Support Networks',
      type: 'guide',
      description: 'Step-by-step guide to finding and building support systems',
      downloadUrl: '/resources/support-networks-guide.pdf',
      readingTime: '10 minutes',
      language: 'English',
      category: 'Community Support'
    },
    {
      id: '4',
      title: 'Medication Adherence and Self-Care',
      type: 'article',
      description: 'Best practices for HIV medication management and self-care',
      readingTime: '8 minutes',
      language: 'Fulfulde',
      category: 'Health Management'
    }
  ];

  const categories = [
    { id: 'all' as const, label: 'All Resources', icon: Heart },
    { id: 'psychosocial' as const, label: 'Psychosocial Support', icon: Users },
    { id: 'counseling' as const, label: 'Counseling Services', icon: MessageCircle },
    { id: 'support-groups' as const, label: 'Support Groups', icon: Users },
    { id: 'educational' as const, label: 'Educational Materials', icon: BookOpen },
    { id: 'providers' as const, label: 'Service Provider Directory', icon: MapPin },
    { id: 'referrals' as const, label: 'Referral System', icon: ExternalLink }
  ];

  const filteredServices = supportServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const ServiceCard = ({ service }: { service: SupportService }) => (
    <div 
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-200"
      onClick={() => setSelectedService(service)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
          <div className="flex items-center space-x-2 mb-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              service.type === 'online' ? 'bg-green-100 text-green-800' :
              service.type === 'offline' ? 'bg-blue-100 text-blue-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {service.type === 'both' ? 'Online & Offline' : service.type}
            </span>
          </div>
        </div>
        <ChevronRight className="w-6 h-6 text-gray-400" />
      </div>
      
      <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
      
      <div className="space-y-2">
        {service.contact.phone && (
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Phone className="w-4 h-4" />
            <span>{service.contact.phone}</span>
          </div>
        )}
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>{service.availability}</span>
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {service.specialization.slice(0, 2).map((spec, index) => (
          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
            {spec}
          </span>
        ))}
        {service.specialization.length > 2 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
            +{service.specialization.length - 2} more
          </span>
        )}
      </div>
    </div>
  );

  const getProviderLink = (providerName: string): string => {
    switch (providerName) {
      case "Women's Rights Advancement and Protection Alternative (WRAPA)":
        return "/providers/wrapa";
      case "Adamawa State Ministry of Women Affairs":
        return "/providers/ministry-women-affairs";
      case "Legal Aid Council Adamawa":
        return "/providers/legal-aid-council";
      case "Adamawa State Police GBV Unit":
        return "/providers/police-gbv-unit";
      case "Federal Medical Centre Yola HIV Care Unit":
        return "/providers/fmc-yola-hiv";
      default:
        return "#";
    }
  };

  const ServiceProviderCard = ({ provider }: { provider: ServiceProvider }) => {
    const providerLink = getProviderLink(provider.name);

    return (
      <div
        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-200"
        onClick={() => {
          if (providerLink !== "#") {
            window.location.href = providerLink;
          } else {
            setSelectedProvider(provider);
          }
        }}
      >
        <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-xl font-bold text-gray-900">{provider.name}</h3>
            {provider.verified && (
              <CheckCircle className="w-5 h-5 text-green-500" aria-label="Verified Provider" />
            )}
          </div>
          <div className="flex items-center space-x-2 mb-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              provider.type === 'health' ? 'bg-blue-100 text-blue-800' :
              provider.type === 'law-enforcement' ? 'bg-red-100 text-red-800' :
              provider.type === 'legal' ? 'bg-purple-100 text-purple-800' :
              provider.type === 'social' ? 'bg-green-100 text-green-800' :
              'bg-orange-100 text-orange-800'
            }`}>
              {provider.category}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">{provider.rating}</span>
            </div>
          </div>
        </div>
        <ChevronRight className="w-6 h-6 text-gray-400" />
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">{provider.description}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Phone className="w-4 h-4" />
          <span>{provider.contact.phone}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <MapPin className="w-4 h-4" />
          <span>{provider.contact.address}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {provider.services.slice(0, 2).map((service, index) => (
          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
            {service}
          </span>
        ))}
        {provider.services.length > 2 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
            +{provider.services.length - 2} more
          </span>
        )}
      </div>
    </div>
  );
  };

  const ReferralCaseCard = ({ referralCase }: { referralCase: ReferralCase }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">Case #{referralCase.id}</h3>
          <p className="text-gray-600 mb-2">{referralCase.serviceType}</p>
          <div className="flex items-center space-x-2 mb-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              referralCase.urgency === 'emergency' ? 'bg-red-100 text-red-800' :
              referralCase.urgency === 'high' ? 'bg-orange-100 text-orange-800' :
              referralCase.urgency === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              {referralCase.urgency.charAt(0).toUpperCase() + referralCase.urgency.slice(1)} Priority
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              referralCase.status === 'completed' ? 'bg-green-100 text-green-800' :
              referralCase.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
              referralCase.status === 'accepted' ? 'bg-purple-100 text-purple-800' :
              referralCase.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {referralCase.status.charAt(0).toUpperCase() + referralCase.status.slice(1)}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Users className="w-4 h-4" />
          <span>From: {referralCase.fromProvider}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <ExternalLink className="w-4 h-4" />
          <span>To: {referralCase.toProvider}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Users className="w-4 h-4" />
          <span>Case Manager: {referralCase.caseManager}</span>
        </div>
      </div>

      <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg mb-4">{referralCase.notes}</p>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>Created: {referralCase.dateCreated}</span>
        {referralCase.followUpDate && (
          <span>Follow-up: {referralCase.followUpDate}</span>
        )}
      </div>
    </div>
  );

  const ResourceCard = ({ resource }: { resource: EducationalResource }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
          <div className="flex items-center space-x-2 mb-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              resource.type === 'pdf' ? 'bg-red-100 text-red-800' :
              resource.type === 'video' ? 'bg-blue-100 text-blue-800' :
              resource.type === 'article' ? 'bg-green-100 text-green-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {resource.type.toUpperCase()}
            </span>
            <span className="text-sm text-gray-500">{resource.readingTime}</span>
          </div>
        </div>
        {resource.downloadUrl ? (
          <Download className="w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-700" />
        ) : (
          <ExternalLink className="w-6 h-6 text-gray-400" />
        )}
      </div>
      
      <p className="text-gray-600 mb-4">{resource.description}</p>
      
      <div className="flex items-center justify-between">
        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
          {resource.category}
        </span>
        <span className="text-sm text-gray-500">{resource.language}</span>
      </div>
    </div>
  );

  if (selectedService) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedService(null)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6 text-lg font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Resources</span>
          </button>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedService.name}</h1>
              <div className="flex items-center space-x-3 mb-4">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedService.type === 'online' ? 'bg-green-100 text-green-800' :
                  selectedService.type === 'offline' ? 'bg-blue-100 text-blue-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {selectedService.type === 'both' ? 'Online & Offline Services' : selectedService.type}
                </span>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{selectedService.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {selectedService.contact.phone && (
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">{selectedService.contact.phone}</p>
                      </div>
                    </div>
                  )}
                  {selectedService.contact.email && (
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">{selectedService.contact.email}</p>
                      </div>
                    </div>
                  )}
                  {selectedService.contact.website && (
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-gray-900">Website</p>
                        <p className="text-blue-600 hover:text-blue-800 cursor-pointer">{selectedService.contact.website}</p>
                      </div>
                    </div>
                  )}
                  {selectedService.contact.address && (
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-gray-900">Address</p>
                        <p className="text-gray-600">{selectedService.contact.address}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Service Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Availability</p>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-500" />
                      <p className="text-gray-600">{selectedService.availability}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Languages Supported</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.languages.map((lang, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-lg">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Specializations</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.specialization.map((spec, index) => (
                        <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-lg">
                          {spec}
                        </span>
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
            Support Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support services and educational resources for HIV patients experiencing gender-based violence in Adamawa State
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all text-lg ${
                    activeCategory === category.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Support Services */}
        {activeCategory !== 'educational' && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Support Services Directory
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        )}

        {/* Educational Resources */}
        {(activeCategory === 'all' || activeCategory === 'educational') && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Educational Materials & Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationalResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        )}

        {/* Service Provider Directory */}
        {(activeCategory === 'all' || activeCategory === 'providers') && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Service Provider Directory
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceProviders.map((provider) => (
                <ServiceProviderCard key={provider.id} provider={provider} />
              ))}
            </div>

            <div className="mt-8 bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Multi-Sector Coordination</h3>
              <div className="grid md:grid-cols-5 gap-6">
                <div className="text-center">
                  <Heart className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Health Facilities</h4>
                  <p className="text-gray-600">HIV care units and medical services</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Law Enforcement</h4>
                  <p className="text-gray-600">Police and gendarmerie services</p>
                </div>
                <div className="text-center">
                  <FileText className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Legal Services</h4>
                  <p className="text-gray-600">Lawyers and legal aid organizations</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Social Services</h4>
                  <p className="text-gray-600">Women empowerment and family welfare</p>
                </div>
                <div className="text-center">
                  <Globe className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Civil Society</h4>
                  <p className="text-gray-600">NGOs and community organizations</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Referral System */}
        {(activeCategory === 'all' || activeCategory === 'referrals') && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Referral System</h2>
              <button
                onClick={() => setShowReferralForm(true)}
                className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
              >
                <Plus className="w-5 h-5" />
                <span>Create Referral</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {referralCases.map((referralCase) => (
                <ReferralCaseCard key={referralCase.id} referralCase={referralCase} />
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Automated Referral Pathways</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Emergency Pathways</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      <div>
                        <p className="font-medium text-gray-900">Immediate Danger</p>
                        <p className="text-sm text-gray-600">Police → Safe House → Medical Care</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                      <Heart className="w-5 h-5 text-orange-500" />
                      <div>
                        <p className="font-medium text-gray-900">Medical Emergency</p>
                        <p className="text-sm text-gray-600">Hospital → HIV Care → Counseling</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Standard Pathways</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <FileText className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-gray-900">Legal Support</p>
                        <p className="text-sm text-gray-600">Legal Aid → Court → Follow-up</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <Users className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="font-medium text-gray-900">Social Support</p>
                        <p className="text-sm text-gray-600">Social Services → Economic Support → Empowerment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Emergency Contact Banner */}
        <div className="mt-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Emergency Support</h3>
          <p className="text-lg mb-6">
            If you are in immediate danger, please contact emergency services or our 24/7 crisis hotline
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
              <span>Crisis Hotline: +237-75-627-8901</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportResourcesPage;
