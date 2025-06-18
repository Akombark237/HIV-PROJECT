'use client';

import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users, 
  AlertTriangle, 
  BookOpen, 
  MessageCircle, 
  Calendar, 
  Award, 
  Target, 
  CheckCircle, 
  ArrowLeft, 
  ExternalLink,
  FileText,
  Briefcase,
  Home,
  Scale,
  Heart,
  Globe,
  Building,
  Eye,
  Lock,
  UserCheck
} from 'lucide-react';
import Link from 'next/link';
import NavigationBreadcrumb from '@/components/NavigationBreadcrumb';
import PageLinkages from '@/components/PageLinkages';

const PoliceGBVUnitPage = () => {
  const services = [
    {
      title: "GBV Case Investigation",
      description: "Professional investigation of gender-based violence cases",
      icon: Eye,
      details: [
        "Domestic violence investigations",
        "Sexual assault case handling",
        "Evidence collection and preservation",
        "Witness protection services",
        "Forensic investigation support"
      ]
    },
    {
      title: "Emergency Response",
      description: "24/7 emergency response to GBV incidents",
      icon: AlertTriangle,
      details: [
        "Immediate response to distress calls",
        "Victim rescue operations",
        "Crime scene management",
        "Emergency medical referrals",
        "Temporary protection orders"
      ]
    },
    {
      title: "Victim Support Services",
      description: "Comprehensive support for GBV survivors",
      icon: Heart,
      details: [
        "Trauma-informed interviewing",
        "Psychological first aid",
        "Referral to support services",
        "Court accompaniment",
        "Follow-up support services"
      ]
    },
    {
      title: "Arrest & Prosecution Support",
      description: "Professional arrest and prosecution of perpetrators",
      icon: UserCheck,
      details: [
        "Perpetrator arrest and detention",
        "Case file preparation",
        "Court testimony support",
        "Evidence presentation",
        "Prosecution collaboration"
      ]
    },
    {
      title: "Community Policing",
      description: "Community engagement and prevention programs",
      icon: Users,
      details: [
        "Community awareness programs",
        "School outreach initiatives",
        "Neighborhood watch coordination",
        "Prevention education campaigns",
        "Stakeholder partnerships"
      ]
    },
    {
      title: "Training & Capacity Building",
      description: "Specialized training for officers and partners",
      icon: BookOpen,
      details: [
        "GBV response training",
        "Trauma-informed approaches",
        "Investigation techniques",
        "Inter-agency collaboration",
        "Human rights education"
      ]
    }
  ];

  const specializedUnits = [
    {
      name: "Domestic Violence Response Team",
      description: "Specialized team for domestic violence cases",
      officers: "12 trained officers",
      availability: "24/7"
    },
    {
      name: "Sexual Assault Investigation Unit",
      description: "Expert investigators for sexual assault cases",
      officers: "8 specialized officers",
      availability: "24/7"
    },
    {
      name: "Child Protection Unit",
      description: "Dedicated unit for child abuse and protection",
      officers: "10 trained officers",
      availability: "24/7"
    },
    {
      name: "Victim Support Team",
      description: "Support services for GBV survivors",
      officers: "6 support officers",
      availability: "Business hours"
    }
  ];

  const achievements = [
    {
      metric: "3,500+",
      description: "GBV cases investigated",
      icon: Eye
    },
    {
      metric: "2,800+",
      description: "Survivors supported",
      icon: Heart
    },
    {
      metric: "1,200+",
      description: "Perpetrators arrested",
      icon: UserCheck
    },
    {
      metric: "85%",
      description: "Successful prosecution rate",
      icon: Award
    }
  ];

  const contactPoints = [
    {
      location: "Police Headquarters Yola",
      address: "Police Headquarters, Jimeta, Yola",
      phone: "+237-75-624-1234",
      emergency: "117",
      hours: "24/7"
    },
    {
      location: "Mubi Division",
      address: "Mubi Police Division, Mubi",
      phone: "+237-75-624-1235",
      emergency: "117",
      hours: "24/7"
    },
    {
      location: "Ganye Division",
      address: "Ganye Police Division, Ganye",
      phone: "+237-75-624-1236",
      emergency: "117",
      hours: "24/7"
    }
  ];

  const procedures = [
    {
      step: "1",
      title: "Report the Incident",
      description: "Call 199 or visit the nearest police station to report GBV incident",
      icon: Phone
    },
    {
      step: "2",
      title: "Initial Response",
      description: "Trained officers respond immediately to ensure victim safety",
      icon: Shield
    },
    {
      step: "3",
      title: "Medical Attention",
      description: "Victim referred for immediate medical care if needed",
      icon: Heart
    },
    {
      step: "4",
      title: "Statement Recording",
      description: "Detailed statement recorded in safe, private environment",
      icon: FileText
    },
    {
      step: "5",
      title: "Investigation",
      description: "Thorough investigation conducted by specialized officers",
      icon: Eye
    },
    {
      step: "6",
      title: "Arrest & Prosecution",
      description: "Perpetrator arrested and case prepared for prosecution",
      icon: Scale
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <NavigationBreadcrumb />

        {/* Header */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
          <div className="flex items-start justify-between mb-6">
            <Link
              href="/support-resources"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Support Resources</span>
            </Link>
          </div>

          <div className="flex items-start space-x-6">
            <div className="p-4 bg-blue-100 rounded-2xl">
              <Shield className="w-12 h-12 text-blue-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Adamawa State Police GBV Unit
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Specialized police unit dedicated to preventing, investigating, and responding to gender-based violence 
                cases with trained officers committed to protecting survivors and ensuring justice.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Headquarters</p>
                    <p className="text-gray-600">Police HQ, Jimeta, Yola</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Emergency</p>
                    <p className="text-gray-600">199 (Toll-free)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Availability</p>
                    <p className="text-gray-600">24/7 Emergency Response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Alert */}
        <div className="bg-red-500 text-white p-6 rounded-2xl shadow-lg mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <AlertTriangle className="w-8 h-8" />
              <div>
                <h2 className="text-2xl font-bold">Emergency GBV Response</h2>
                <p className="text-red-100">If you are in immediate danger, call 199 now</p>
              </div>
            </div>
            <a
              href="tel:199"
              className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-50 transition-colors"
            >
              Call 199
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About the GBV Unit</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To provide professional, compassionate, and effective police response to gender-based violence, 
                ensuring the safety and protection of survivors while bringing perpetrators to justice through 
                thorough investigation and prosecution support.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Specialized Training</h3>
              <p className="text-gray-700 leading-relaxed">
                Our officers receive specialized training in trauma-informed approaches, GBV investigation 
                techniques, survivor support, and human rights to ensure professional and sensitive handling 
                of all cases.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Commitment</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Immediate response to GBV reports</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Trauma-informed victim support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Thorough and professional investigation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Confidentiality and privacy protection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Collaboration with support services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reporting Procedure */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How to Report GBV</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((procedure, index) => {
              const Icon = procedure.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      {procedure.step}
                    </div>
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{procedure.title}</h3>
                  <p className="text-gray-600">{procedure.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Specialized Units */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specialized Units</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {specializedUnits.map((unit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{unit.name}</h3>
                <p className="text-gray-600 mb-4">{unit.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Officers</p>
                    <p className="text-blue-600 font-bold">{unit.officers}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Availability</p>
                    <p className="text-blue-600 font-bold">{unit.availability}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Points */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Points</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactPoints.map((contact, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{contact.location}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span className="text-gray-700">{contact.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Emergency: {contact.emergency}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{contact.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">{achievement.metric}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 text-white mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Report GBV Immediately</h2>
            <p className="text-xl opacity-90">
              Our trained officers are available 24/7 to respond to GBV incidents
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="tel:117"
              className="flex items-center justify-center space-x-3 bg-white bg-opacity-20 p-4 rounded-xl hover:bg-opacity-30 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <div>
                <p className="font-bold">Emergency Line</p>
                <p className="opacity-90">117 (Toll-free)</p>
              </div>
            </a>

            <a
              href="tel:+237-75-624-1234"
              className="flex items-center justify-center space-x-3 bg-white bg-opacity-20 p-4 rounded-xl hover:bg-opacity-30 transition-colors"
            >
              <Shield className="w-6 h-6" />
              <div>
                <p className="font-bold">GBV Unit Direct</p>
                <p className="opacity-90">+237-75-624-1234</p>
              </div>
            </a>
            
            <Link
              href="/crisis-support"
              className="flex items-center justify-center space-x-3 bg-white bg-opacity-20 p-4 rounded-xl hover:bg-opacity-30 transition-colors"
            >
              <AlertTriangle className="w-6 h-6" />
              <div>
                <p className="font-bold">Crisis Support</p>
                <p className="opacity-90">Additional help</p>
              </div>
            </Link>
          </div>
        </div>

        <PageLinkages />
      </div>
    </div>
  );
};

export default PoliceGBVUnitPage;
