'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  ChevronRight, 
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
  HelpCircle
} from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  current?: boolean;
}

interface PageInfo {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  parent?: string;
}

const NavigationBreadcrumb = () => {
  const pathname = usePathname();

  // Define page information and hierarchy
  const pageInfo: Record<string, PageInfo> = {
    '/': {
      title: 'Dashboard',
      icon: Home,
      category: 'Home'
    },
    '/crisis-support': {
      title: 'Crisis Support',
      icon: AlertTriangle,
      category: 'Emergency Response',
      parent: '/'
    },
    '/medical-support': {
      title: 'Medical Support',
      icon: Stethoscope,
      category: 'HIV-Specific Features',
      parent: '/'
    },
    '/hiv-care-integration': {
      title: 'HIV Care Integration',
      icon: Heart,
      category: 'HIV-Specific Features',
      parent: '/'
    },
    '/support-resources': {
      title: 'Support Resources',
      icon: Users,
      category: 'GBV Support Services',
      parent: '/'
    },
    '/communication-tools': {
      title: 'Communication Tools',
      icon: MessageCircle,
      category: 'Communication & Education',
      parent: '/'
    },
    '/educational-content': {
      title: 'Educational Content',
      icon: BookOpen,
      category: 'Communication & Education',
      parent: '/'
    },
    '/safety-security': {
      title: 'Safety & Security',
      icon: Lock,
      category: 'Platform Features',
      parent: '/'
    },
    '/admin-dashboard': {
      title: 'Admin Dashboard',
      icon: BarChart3,
      category: 'Administration',
      parent: '/'
    },
    '/accessibility': {
      title: 'Accessibility',
      icon: Eye,
      category: 'Platform Features',
      parent: '/'
    },
    '/localization': {
      title: 'Localization',
      icon: Globe,
      category: 'Platform Features',
      parent: '/'
    },
    '/help-support': {
      title: 'Help & Support',
      icon: HelpCircle,
      category: 'Platform Features',
      parent: '/'
    },
    '/offline': {
      title: 'Offline Mode',
      icon: Shield,
      category: 'Platform Features',
      parent: '/'
    }
  };

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [];
    const currentPage = pageInfo[pathname];

    if (!currentPage) {
      return [{ label: 'Dashboard', href: '/', icon: Home, current: false }];
    }

    // Always start with home unless we're already there
    if (pathname !== '/') {
      breadcrumbs.push({
        label: 'Dashboard',
        href: '/',
        icon: Home,
        current: false
      });
    }

    // Add category if it's different from the page title
    if (currentPage.category && currentPage.category !== currentPage.title) {
      breadcrumbs.push({
        label: currentPage.category,
        href: '#',
        current: false
      });
    }

    // Add current page
    breadcrumbs.push({
      label: currentPage.title,
      href: pathname,
      icon: currentPage.icon,
      current: true
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on homepage
  if (pathname === '/' || breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="bg-white rounded-2xl p-4 shadow-sm mb-6" aria-label="Breadcrumb">
      <div className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === breadcrumbs.length - 1;

          return (
            <div key={item.href} className="flex items-center space-x-2">
              {item.current ? (
                <div className="flex items-center space-x-2 text-blue-600 font-medium">
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                </Link>
              )}
              
              {!isLast && (
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default NavigationBreadcrumb;
