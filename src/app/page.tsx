import Link from 'next/link';
import { Heart, Shield, Users, Phone, MessageCircle, BookOpen, Stethoscope, AlertTriangle, BarChart3, Lock } from 'lucide-react';
import MobileNavigation from '@/components/MobileNavigation';
import NavigationBreadcrumb from '@/components/NavigationBreadcrumb';
import PageLinkages from '@/components/PageLinkages';
import QuickActions from '@/components/QuickActions';

export default function Home() {
  const services = [
    {
      title: 'Crisis Support',
      description: 'Immediate emergency support and crisis intervention services',
      icon: AlertTriangle,
      href: '/crisis-support',
      color: 'bg-red-500',
      urgent: true
    },
    {
      title: 'Medical Support',
      description: 'Appointment scheduling, medication reminders, and health monitoring',
      icon: Stethoscope,
      href: '/medical-support',
      color: 'bg-blue-500'
    },
    {
      title: 'HIV Care Integration',
      description: 'Comprehensive HIV care services and treatment support',
      icon: Heart,
      href: '/hiv-care-integration',
      color: 'bg-pink-500'
    },
    {
      title: 'Communication Tools',
      description: 'Secure messaging, peer support, and community forums',
      icon: MessageCircle,
      href: '/communication-tools',
      color: 'bg-green-500'
    },
    {
      title: 'Educational Content',
      description: 'GBV prevention, HIV education, and rights awareness materials',
      icon: BookOpen,
      href: '/educational-content',
      color: 'bg-purple-500'
    },
    {
      title: 'Support Resources',
      description: 'Service provider directory and referral system',
      icon: Users,
      href: '/support-resources',
      color: 'bg-indigo-500'
    },
    {
      title: 'Safety & Security',
      description: 'Digital safety, privacy protection, and emergency features',
      icon: Lock,
      href: '/safety-security',
      color: 'bg-orange-500'
    },
    {
      title: 'Admin Dashboard',
      description: 'Administrative tools and system management',
      icon: BarChart3,
      href: '/admin-dashboard',
      color: 'bg-gray-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <MobileNavigation />

      <div className="container mx-auto px-4 py-8 md:py-16">
        <NavigationBreadcrumb />
        <QuickActions />
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            HIV Crisis Support
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600 mb-4 md:mb-6">
            Adamawa State
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive HIV crisis support and gender-based violence management platform
            providing integrated care, safety resources, and community support for patients in Adamawa State, Nigeria.
          </p>
        </div>

        {/* Emergency Banner */}
        <div className="mb-8 md:mb-12 bg-red-50 border-l-4 border-red-400 p-4 md:p-6 rounded-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="flex items-start space-x-3 mb-4 sm:mb-0">
              <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-red-800 mb-1">Emergency Support Available 24/7</h3>
                <p className="text-red-700 text-sm md:text-base">
                  If you are in immediate danger, please contact emergency services or our crisis hotline
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <a
                href="tel:117"
                className="flex items-center justify-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium text-sm md:text-base"
              >
                <Phone className="w-4 h-4" />
                <span>Emergency: 117</span>
              </a>
              <a
                href="tel:+237-75-627-8901"
                className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm md:text-base"
              >
                <Heart className="w-4 h-4" />
                <span>Crisis Hotline</span>
              </a>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                href={service.href}
                className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  service.urgent ? 'ring-2 ring-red-200 hover:ring-red-300' : ''
                }`}
              >
                {service.urgent && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    URGENT
                  </div>
                )}
                <div className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Privacy & Security</h3>
              <p className="text-gray-600 text-sm md:text-base">
                End-to-end encryption, anonymous usage options, and comprehensive privacy protection
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Peer support networks, moderated forums, and professional counseling services
              </p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Integrated Care</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Comprehensive HIV care integrated with gender-based violence support services
              </p>
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
            Quick Access
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/crisis-support"
              className="w-full sm:w-auto bg-red-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-red-600 transition-colors shadow-lg"
            >
              Get Crisis Support Now
            </Link>
            <Link
              href="/medical-support"
              className="w-full sm:w-auto bg-blue-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-blue-600 transition-colors shadow-lg"
            >
              Access Medical Support
            </Link>
            <Link
              href="/communication-tools"
              className="w-full sm:w-auto bg-green-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-green-600 transition-colors shadow-lg"
            >
              Connect with Support
            </Link>
          </div>
        </div>

        {/* Page Linkages */}
        <PageLinkages />
      </div>
    </div>
  );
}
