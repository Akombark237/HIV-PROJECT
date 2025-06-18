'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ArrowRight, 
  Home, 
  AlertTriangle, 
  Heart, 
  Shield, 
  Users, 
  MessageCircle, 
  BookOpen, 
  Stethoscope, 
  Phone, 
  MapPin, 
  Settings, 
  BarChart3, 
  FileText, 
  Lock, 
  Globe, 
  Eye, 
  HelpCircle,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface PageLink {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  category: 'emergency' | 'gbv' | 'hiv' | 'communication' | 'admin' | 'support';
  priority: 'high' | 'medium' | 'low';
}

interface LinkageSection {
  title: string;
  description: string;
  links: PageLink[];
  color: string;
}

const PageLinkages = () => {
  const pathname = usePathname();

  // Define all page linkages based on current page
  const getLinkagesForPage = (currentPath: string): LinkageSection[] => {
    switch (currentPath) {
      case '/':
        return getHomepageLinkages();
      case '/crisis-support':
        return getEmergencyLinkages();
      case '/medical-support':
      case '/hiv-care-integration':
        return getHIVLinkages();
      case '/support-resources':
        return getGBVLinkages();
      case '/communication-tools':
      case '/educational-content':
        return getCommunicationLinkages();
      case '/admin-dashboard':
        return getAdminLinkages();
      default:
        return getGeneralLinkages();
    }
  };

  const getHomepageLinkages = (): LinkageSection[] => [
    {
      title: 'Emergency Response',
      description: 'Immediate crisis support and emergency services',
      color: 'bg-red-50 border-red-200',
      links: [
        {
          href: '/crisis-support',
          label: 'Crisis Support',
          icon: AlertTriangle,
          description: 'Immediate emergency support and crisis intervention',
          category: 'emergency',
          priority: 'high'
        },
        {
          href: '/support-resources',
          label: 'Emergency Contacts',
          icon: Phone,
          description: 'Crisis hotlines and emergency service providers',
          category: 'emergency',
          priority: 'high'
        },
        {
          href: '/safety-security',
          label: 'Safety Planning',
          icon: Shield,
          description: 'Personal safety plans and security features',
          category: 'emergency',
          priority: 'high'
        }
      ]
    },
    {
      title: 'GBV Support Services',
      description: 'Comprehensive gender-based violence support and resources',
      color: 'bg-purple-50 border-purple-200',
      links: [
        {
          href: '/educational-content',
          label: 'Information Hub',
          icon: BookOpen,
          description: 'GBV prevention and rights awareness materials',
          category: 'gbv',
          priority: 'medium'
        },
        {
          href: '/support-resources',
          label: 'Support Resources',
          icon: Users,
          description: 'Service provider directory and referral system',
          category: 'gbv',
          priority: 'medium'
        },
        {
          href: '/communication-tools',
          label: 'Counseling Services',
          icon: MessageCircle,
          description: 'Secure messaging and peer support networks',
          category: 'gbv',
          priority: 'medium'
        }
      ]
    },
    {
      title: 'HIV-Specific Features',
      description: 'Comprehensive HIV care and medical support services',
      color: 'bg-blue-50 border-blue-200',
      links: [
        {
          href: '/hiv-care-integration',
          label: 'Care Integration',
          icon: Heart,
          description: 'Comprehensive HIV care and treatment support',
          category: 'hiv',
          priority: 'medium'
        },
        {
          href: '/medical-support',
          label: 'Medical Support',
          icon: Stethoscope,
          description: 'Appointments, medications, and health monitoring',
          category: 'hiv',
          priority: 'medium'
        },
        {
          href: '/support-resources',
          label: 'Healthcare Providers',
          icon: MapPin,
          description: 'Healthcare provider directory and appointments',
          category: 'hiv',
          priority: 'medium'
        }
      ]
    },
    {
      title: 'Platform Features',
      description: 'User management, accessibility, and support tools',
      color: 'bg-green-50 border-green-200',
      links: [
        {
          href: '/accessibility',
          label: 'Accessibility',
          icon: Eye,
          description: 'Accessibility features and settings',
          category: 'support',
          priority: 'low'
        },
        {
          href: '/localization',
          label: 'Localization',
          icon: Globe,
          description: 'Language and regional settings',
          category: 'support',
          priority: 'low'
        },
        {
          href: '/help-support',
          label: 'Help & Support',
          icon: HelpCircle,
          description: 'FAQ, guides, and technical support',
          category: 'support',
          priority: 'low'
        }
      ]
    }
  ];

  const getEmergencyLinkages = (): LinkageSection[] => [
    {
      title: 'Immediate Actions',
      description: 'Critical emergency response options',
      color: 'bg-red-50 border-red-200',
      links: [
        {
          href: '/support-resources',
          label: 'Emergency Contacts',
          icon: Phone,
          description: 'Crisis hotlines and emergency services',
          category: 'emergency',
          priority: 'high'
        },
        {
          href: '/safety-security',
          label: 'Quick Exit',
          icon: Shield,
          description: 'Emergency exit and safety features',
          category: 'emergency',
          priority: 'high'
        }
      ]
    },
    {
      title: 'Support Services',
      description: 'Connect with professional support',
      color: 'bg-blue-50 border-blue-200',
      links: [
        {
          href: '/communication-tools',
          label: 'Crisis Chat',
          icon: MessageCircle,
          description: 'Secure messaging with crisis counselors',
          category: 'communication',
          priority: 'high'
        },
        {
          href: '/support-resources',
          label: 'Service Providers',
          icon: Users,
          description: 'Professional support service directory',
          category: 'gbv',
          priority: 'medium'
        }
      ]
    }
  ];

  const getHIVLinkages = (): LinkageSection[] => [
    {
      title: 'Medical Care',
      description: 'HIV treatment and healthcare services',
      color: 'bg-blue-50 border-blue-200',
      links: [
        {
          href: '/support-resources',
          label: 'Healthcare Providers',
          icon: Stethoscope,
          description: 'HIV specialists and medical facilities',
          category: 'hiv',
          priority: 'high'
        },
        {
          href: '/communication-tools',
          label: 'Provider Communication',
          icon: MessageCircle,
          description: 'Secure messaging with healthcare providers',
          category: 'communication',
          priority: 'medium'
        }
      ]
    },
    {
      title: 'Support & Education',
      description: 'HIV education and peer support',
      color: 'bg-green-50 border-green-200',
      links: [
        {
          href: '/educational-content',
          label: 'HIV Education',
          icon: BookOpen,
          description: 'HIV prevention, treatment, and care information',
          category: 'communication',
          priority: 'medium'
        },
        {
          href: '/communication-tools',
          label: 'Peer Support',
          icon: Users,
          description: 'Connect with HIV support communities',
          category: 'communication',
          priority: 'medium'
        }
      ]
    }
  ];

  const getGBVLinkages = (): LinkageSection[] => [
    {
      title: 'Support Services',
      description: 'Professional GBV support and resources',
      color: 'bg-purple-50 border-purple-200',
      links: [
        {
          href: '/crisis-support',
          label: 'Crisis Support',
          icon: AlertTriangle,
          description: 'Emergency GBV crisis intervention',
          category: 'emergency',
          priority: 'high'
        },
        {
          href: '/communication-tools',
          label: 'Counseling Services',
          icon: MessageCircle,
          description: 'Professional counseling and therapy',
          category: 'gbv',
          priority: 'medium'
        }
      ]
    },
    {
      title: 'Information & Education',
      description: 'GBV prevention and rights information',
      color: 'bg-orange-50 border-orange-200',
      links: [
        {
          href: '/educational-content',
          label: 'GBV Prevention',
          icon: BookOpen,
          description: 'Prevention strategies and awareness materials',
          category: 'gbv',
          priority: 'medium'
        },
        {
          href: '/safety-security',
          label: 'Safety Planning',
          icon: Shield,
          description: 'Personal safety and security planning',
          category: 'gbv',
          priority: 'medium'
        }
      ]
    }
  ];

  const getCommunicationLinkages = (): LinkageSection[] => [
    {
      title: 'Connect with Services',
      description: 'Link to professional support services',
      color: 'bg-blue-50 border-blue-200',
      links: [
        {
          href: '/support-resources',
          label: 'Service Providers',
          icon: Users,
          description: 'Connect with healthcare and support providers',
          category: 'communication',
          priority: 'high'
        },
        {
          href: '/crisis-support',
          label: 'Crisis Support',
          icon: AlertTriangle,
          description: 'Emergency crisis intervention services',
          category: 'emergency',
          priority: 'high'
        }
      ]
    },
    {
      title: 'Educational Resources',
      description: 'Access learning materials and information',
      color: 'bg-green-50 border-green-200',
      links: [
        {
          href: '/educational-content',
          label: 'Educational Content',
          icon: BookOpen,
          description: 'HIV and GBV educational materials',
          category: 'communication',
          priority: 'medium'
        }
      ]
    }
  ];

  const getAdminLinkages = (): LinkageSection[] => [
    {
      title: 'Service Management',
      description: 'Provider and service administration',
      color: 'bg-indigo-50 border-indigo-200',
      links: [
        {
          href: '/support-resources',
          label: 'Provider Directory',
          icon: Users,
          description: 'Manage service provider listings',
          category: 'admin',
          priority: 'high'
        },
        {
          href: '/communication-tools',
          label: 'Provider Communication',
          icon: MessageCircle,
          description: 'Manage provider messaging systems',
          category: 'admin',
          priority: 'medium'
        }
      ]
    },
    {
      title: 'Content Management',
      description: 'Educational content and resource management',
      color: 'bg-purple-50 border-purple-200',
      links: [
        {
          href: '/educational-content',
          label: 'Content Management',
          icon: BookOpen,
          description: 'Manage educational materials and resources',
          category: 'admin',
          priority: 'medium'
        }
      ]
    }
  ];

  const getGeneralLinkages = (): LinkageSection[] => [
    {
      title: 'Quick Access',
      description: 'Essential platform features',
      color: 'bg-gray-50 border-gray-200',
      links: [
        {
          href: '/',
          label: 'Homepage',
          icon: Home,
          description: 'Return to main dashboard',
          category: 'support',
          priority: 'medium'
        },
        {
          href: '/crisis-support',
          label: 'Crisis Support',
          icon: AlertTriangle,
          description: 'Emergency support services',
          category: 'emergency',
          priority: 'high'
        },
        {
          href: '/help-support',
          label: 'Help & Support',
          icon: HelpCircle,
          description: 'Get help and support',
          category: 'support',
          priority: 'medium'
        }
      ]
    }
  ];

  const linkages = getLinkagesForPage(pathname);

  if (linkages.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
      <div className="flex items-center space-x-2 mb-6">
        <ArrowRight className="w-5 h-5 text-blue-500" />
        <h2 className="text-xl font-bold text-gray-900">Related Services</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {linkages.map((section, index) => (
          <div key={index} className={`border-2 rounded-2xl p-6 ${section.color}`}>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{section.description}</p>
            
            <div className="space-y-3">
              {section.links.map((link, linkIndex) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="flex items-center space-x-3 p-3 bg-white rounded-xl hover:shadow-md transition-all duration-200 group"
                  >
                    <div className={`p-2 rounded-lg ${
                      link.priority === 'high' ? 'bg-red-100' :
                      link.priority === 'medium' ? 'bg-blue-100' :
                      'bg-gray-100'
                    }`}>
                      <Icon className={`w-4 h-4 ${
                        link.priority === 'high' ? 'text-red-600' :
                        link.priority === 'medium' ? 'text-blue-600' :
                        'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {link.label}
                      </p>
                      <p className="text-xs text-gray-500">{link.description}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageLinkages;
