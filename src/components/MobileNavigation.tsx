'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Heart,
  Shield,
  MessageCircle,
  BookOpen,
  Users,
  Stethoscope,
  Phone,
  Settings,
  Menu,
  X,
  AlertTriangle,
  Lock,
  BarChart3,
  Wifi,
  WifiOff,
  Eye,
  Globe,
  HelpCircle
} from 'lucide-react';

interface NavigationItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  category: 'main' | 'support' | 'admin';
}

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Check online status
    setIsOnline(navigator.onLine);

    // Listen for online/offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const navigationItems: NavigationItem[] = [
    {
      href: '/',
      label: 'Home',
      icon: Home,
      description: 'Main dashboard and overview',
      category: 'main'
    },
    {
      href: '/crisis-support',
      label: 'Crisis Support',
      icon: AlertTriangle,
      description: 'Emergency support and crisis intervention',
      category: 'main'
    },
    {
      href: '/medical-support',
      label: 'Medical Support',
      icon: Stethoscope,
      description: 'Appointments, medications, and health monitoring',
      category: 'main'
    },
    {
      href: '/hiv-care-integration',
      label: 'HIV Care',
      icon: Heart,
      description: 'Comprehensive HIV care and treatment support',
      category: 'main'
    },
    {
      href: '/communication-tools',
      label: 'Communication',
      icon: MessageCircle,
      description: 'Secure messaging and peer support',
      category: 'support'
    },
    {
      href: '/educational-content',
      label: 'Education',
      icon: BookOpen,
      description: 'Educational materials and resources',
      category: 'support'
    },
    {
      href: '/support-resources',
      label: 'Resources',
      icon: Users,
      description: 'Support services and provider directory',
      category: 'support'
    },
    {
      href: '/safety-security',
      label: 'Safety & Security',
      icon: Lock,
      description: 'Privacy protection and emergency features',
      category: 'support'
    },
    {
      href: '/admin-dashboard',
      label: 'Admin Dashboard',
      icon: BarChart3,
      description: 'Administrative tools and system management',
      category: 'admin'
    },
    {
      href: '/accessibility',
      label: 'Accessibility',
      icon: Eye,
      description: 'Accessibility features and settings',
      category: 'support'
    },
    {
      href: '/localization',
      label: 'Localization',
      icon: Globe,
      description: 'Language and regional settings',
      category: 'support'
    },
    {
      href: '/help-support',
      label: 'Help & Support',
      icon: HelpCircle,
      description: 'FAQ, guides, and technical support',
      category: 'support'
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (href: string) => {
    return pathname === href;
  };

  const groupedItems = navigationItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, NavigationItem[]>);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 lg:hidden bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Navigation Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">HIV Support</h2>
              <button
                onClick={closeMenu}
                className="p-2 text-gray-500 hover:text-gray-700 rounded-lg"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Connection Status */}
            <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
              isOnline ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
            }`}>
              {isOnline ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
              <span className="text-sm font-medium">
                {isOnline ? 'Online' : 'Offline'}
              </span>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {Object.entries(groupedItems).map(([category, items]) => (
              <div key={category} className="mb-8">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {category === 'main' ? 'Main Services' : 
                   category === 'support' ? 'Support Tools' : 
                   'Administration'}
                </h3>
                <div className="space-y-2">
                  {items.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className={`flex items-start space-x-3 p-3 rounded-xl transition-all duration-200 ${
                          active
                            ? 'bg-blue-500 text-white shadow-lg'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          active ? 'text-white' : 'text-gray-500'
                        }`} />
                        <div className="flex-1 min-w-0">
                          <p className={`font-medium ${
                            active ? 'text-white' : 'text-gray-900'
                          }`}>
                            {item.label}
                          </p>
                          <p className={`text-sm ${
                            active ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Emergency Actions */}
          <div className="p-6 border-t border-gray-200">
            <div className="space-y-3">
              <a
                href="tel:117"
                className="flex items-center space-x-3 p-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
                onClick={closeMenu}
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">Emergency: 117</span>
              </a>
              <a
                href="tel:+237-75-627-8901"
                className="flex items-center space-x-3 p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
                onClick={closeMenu}
              >
                <Heart className="w-5 h-5" />
                <span className="font-medium">Crisis Hotline</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Quick Access (Optional) */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-40">
        <div className="flex flex-col space-y-2">
          <a
            href="tel:117"
            className="bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors"
            title="Emergency Services"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="tel:+237-75-627-8901"
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
            title="Crisis Hotline"
          >
            <Heart className="w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
