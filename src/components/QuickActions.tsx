'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  AlertTriangle, 
  MessageCircle, 
  Calendar, 
  Shield, 
  Heart, 
  Users, 
  BookOpen, 
  Stethoscope, 
  MapPin, 
  Lock, 
  HelpCircle,
  Zap,
  Clock,
  Star
} from 'lucide-react';

interface QuickAction {
  id: string;
  label: string;
  href?: string;
  action?: () => void;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  priority: 'emergency' | 'high' | 'medium' | 'low';
  description: string;
  availability: '24/7' | 'business-hours' | 'on-demand';
}

const QuickActions = () => {
  const pathname = usePathname();

  const emergencyActions: QuickAction[] = [
    {
      id: 'emergency-call',
      label: 'Emergency Services',
      href: 'tel:117',
      icon: Phone,
      color: 'bg-red-500 hover:bg-red-600',
      priority: 'emergency',
      description: 'Call emergency services immediately',
      availability: '24/7'
    },
    {
      id: 'crisis-hotline',
      label: 'Crisis Hotline',
      href: 'tel:+237-75-627-8901',
      icon: AlertTriangle,
      color: 'bg-orange-500 hover:bg-orange-600',
      priority: 'emergency',
      description: 'HIV and GBV crisis support hotline',
      availability: '24/7'
    },
    {
      id: 'quick-exit',
      label: 'Quick Exit',
      action: () => window.location.href = 'https://www.google.com',
      icon: Shield,
      color: 'bg-purple-500 hover:bg-purple-600',
      priority: 'emergency',
      description: 'Safely exit the platform (Ctrl+Shift+X)',
      availability: 'on-demand'
    }
  ];

  const primaryActions: QuickAction[] = [
    {
      id: 'crisis-support',
      label: 'Crisis Support',
      href: '/crisis-support',
      icon: AlertTriangle,
      color: 'bg-red-500 hover:bg-red-600',
      priority: 'high',
      description: 'Emergency crisis intervention services',
      availability: '24/7'
    },
    {
      id: 'secure-chat',
      label: 'Secure Chat',
      href: '/communication-tools',
      icon: MessageCircle,
      color: 'bg-blue-500 hover:bg-blue-600',
      priority: 'high',
      description: 'Secure messaging with providers',
      availability: 'business-hours'
    },
    {
      id: 'medical-appointment',
      label: 'Book Appointment',
      href: '/medical-support',
      icon: Calendar,
      color: 'bg-green-500 hover:bg-green-600',
      priority: 'high',
      description: 'Schedule medical appointments',
      availability: 'business-hours'
    },
    {
      id: 'safety-planning',
      label: 'Safety Planning',
      href: '/safety-security',
      icon: Shield,
      color: 'bg-purple-500 hover:bg-purple-600',
      priority: 'medium',
      description: 'Create and update safety plans',
      availability: 'on-demand'
    }
  ];

  const contextualActions: QuickAction[] = [
    {
      id: 'hiv-care',
      label: 'HIV Care',
      href: '/hiv-care-integration',
      icon: Heart,
      color: 'bg-pink-500 hover:bg-pink-600',
      priority: 'medium',
      description: 'HIV treatment and care services',
      availability: 'business-hours'
    },
    {
      id: 'support-resources',
      label: 'Find Support',
      href: '/support-resources',
      icon: Users,
      color: 'bg-indigo-500 hover:bg-indigo-600',
      priority: 'medium',
      description: 'Service provider directory',
      availability: 'on-demand'
    },
    {
      id: 'education',
      label: 'Learn More',
      href: '/educational-content',
      icon: BookOpen,
      color: 'bg-yellow-500 hover:bg-yellow-600',
      priority: 'low',
      description: 'Educational materials and resources',
      availability: 'on-demand'
    },
    {
      id: 'help',
      label: 'Get Help',
      href: '/help-support',
      icon: HelpCircle,
      color: 'bg-gray-500 hover:bg-gray-600',
      priority: 'low',
      description: 'FAQ and support resources',
      availability: 'on-demand'
    }
  ];

  const getRelevantActions = (): QuickAction[] => {
    // Always show emergency actions
    let actions = [...emergencyActions];

    // Add contextual actions based on current page
    switch (pathname) {
      case '/':
        actions.push(...primaryActions.slice(0, 3));
        break;
      case '/crisis-support':
        actions.push(
          primaryActions.find(a => a.id === 'secure-chat')!,
          contextualActions.find(a => a.id === 'support-resources')!,
          contextualActions.find(a => a.id === 'help')!
        );
        break;
      case '/medical-support':
      case '/hiv-care-integration':
        actions.push(
          primaryActions.find(a => a.id === 'secure-chat')!,
          contextualActions.find(a => a.id === 'hiv-care')!,
          contextualActions.find(a => a.id === 'support-resources')!
        );
        break;
      case '/communication-tools':
        actions.push(
          primaryActions.find(a => a.id === 'medical-appointment')!,
          contextualActions.find(a => a.id === 'support-resources')!,
          contextualActions.find(a => a.id === 'education')!
        );
        break;
      case '/support-resources':
        actions.push(
          primaryActions.find(a => a.id === 'secure-chat')!,
          primaryActions.find(a => a.id === 'medical-appointment')!,
          contextualActions.find(a => a.id === 'education')!
        );
        break;
      default:
        actions.push(...primaryActions.slice(0, 2));
        actions.push(contextualActions.find(a => a.id === 'help')!);
        break;
    }

    return actions.filter(Boolean);
  };

  const relevantActions = getRelevantActions();

  const ActionButton = ({ action }: { action: QuickAction }) => {
    const Icon = action.icon;
    const isEmergency = action.priority === 'emergency';
    
    const buttonContent = (
      <div className={`
        ${action.color} text-white p-4 rounded-2xl shadow-lg transition-all duration-200 
        transform hover:scale-105 hover:shadow-xl group relative overflow-hidden
        ${isEmergency ? 'ring-2 ring-red-200 animate-pulse' : ''}
      `}>
        {/* Priority indicator */}
        {isEmergency && (
          <div className="absolute top-2 right-2">
            <Zap className="w-4 h-4 text-yellow-300" />
          </div>
        )}
        
        <div className="flex flex-col items-center text-center">
          <Icon className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
          <h3 className="font-bold text-sm mb-1">{action.label}</h3>
          <p className="text-xs opacity-90 leading-tight">{action.description}</p>
          
          {/* Availability indicator */}
          <div className="flex items-center space-x-1 mt-2 text-xs opacity-75">
            {action.availability === '24/7' ? (
              <>
                <Clock className="w-3 h-3" />
                <span>24/7</span>
              </>
            ) : action.availability === 'business-hours' ? (
              <>
                <Clock className="w-3 h-3" />
                <span>Business Hours</span>
              </>
            ) : (
              <>
                <Star className="w-3 h-3" />
                <span>Available</span>
              </>
            )}
          </div>
        </div>
      </div>
    );

    if (action.href) {
      return (
        <Link href={action.href} className="block">
          {buttonContent}
        </Link>
      );
    }

    return (
      <button onClick={action.action} className="block w-full">
        {buttonContent}
      </button>
    );
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>Services Available</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {relevantActions.map((action) => (
          <ActionButton key={action.id} action={action} />
        ))}
      </div>
      
      {/* Emergency Notice */}
      <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-lg">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-bold text-red-800">Emergency Notice</h3>
            <p className="text-sm text-red-700">
              If you are in immediate danger, call emergency services (199) or use the Quick Exit feature (Ctrl+Shift+X) to safely leave this platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
