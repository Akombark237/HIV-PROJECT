'use client';

import { 
  Scale, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users, 
  Shield, 
  BookOpen, 
  MessageCircle, 
  Calendar, 
  Award, 
  Target, 
  CheckCircle, 
  ArrowLeft, 
  ExternalLink,
  AlertTriangle,
  FileText,
  Briefcase,
  Home,
  Gavel,
  Heart,
  Globe,
  Building
} from 'lucide-react';
import Link from 'next/link';
import NavigationBreadcrumb from '@/components/NavigationBreadcrumb';
import PageLinkages from '@/components/PageLinkages';

const LegalAidCouncilPage = () => {
  const services = [
    {
      title: "Free Legal Representation",
      description: "Professional legal representation for indigent persons",
      icon: Gavel,
      details: [
        "Criminal defense representation",
        "Civil litigation support",
        "Family law matters",
        "Land and property disputes",
        "Constitutional rights cases"
      ]
    },
    {
      title: "Legal Consultation & Advice",
      description: "Free legal consultation and advisory services",
      icon: MessageCircle,
      details: [
        "Legal rights education",
        "Case assessment and advice",
        "Document review and drafting",
        "Legal procedure guidance",
        "Alternative dispute resolution"
      ]
    },
    {
      title: "GBV Legal Support",
      description: "Specialized legal services for gender-based violence survivors",
      icon: Shield,
      details: [
        "Domestic violence cases",
        "Sexual assault prosecution support",
        "Restraining order applications",
        "Survivor rights advocacy",
        "Court accompaniment services"
      ]
    },
    {
      title: "Legal Aid Clinics",
      description: "Community-based legal aid clinics and outreach",
      icon: Building,
      details: [
        "Mobile legal aid services",
        "Community legal clinics",
        "Rural area outreach programs",
        "Legal awareness campaigns",
        "Paralegal training programs"
      ]
    },
    {
      title: "Human Rights Advocacy",
      description: "Protection and promotion of fundamental human rights",
      icon: Users,
      details: [
        "Human rights violation cases",
        "Police brutality complaints",
        "Unlawful detention matters",
        "Rights awareness education",
        "Advocacy for law reform"
      ]
    },
    {
      title: "Legal Documentation",
      description: "Assistance with legal documentation and procedures",
      icon: FileText,
      details: [
        "Affidavit preparation",
        "Legal document drafting",
        "Court filing assistance",
        "Evidence documentation",
        "Legal procedure guidance"
      ]
    }
  ];

  const eligibilityCriteria = [
    {
      category: "Income Level",
      description: "Persons earning below minimum wage or unemployed",
      icon: Briefcase
    },
    {
      category: "Vulnerable Groups",
      description: "Women, children, elderly, and persons with disabilities",
      icon: Heart
    },
    {
      category: "Serious Crimes",
      description: "Persons charged with serious criminal offenses",
      icon: Scale
    },
    {
      category: "Constitutional Matters",
      description: "Cases involving fundamental human rights",
      icon: FileText
    }
  ];

  const achievements = [
    {
      metric: "15,000+",
      description: "Cases handled successfully",
      icon: Scale
    },
    {
      metric: "8,500+",
      description: "People provided legal aid",
      icon: Users
    },
    {
      metric: "2,200+",
      description: "GBV survivors supported",
      icon: Shield
    },
    {
      metric: "95%",
      description: "Success rate in cases",
      icon: Award
    }
  ];

  const legalTeam = [
    {
      name: "Barr. Ibrahim Musa",
      position: "State Coordinator",
      specialization: "Criminal Law & Human Rights",
      experience: "15 years"
    },
    {
      name: "Barr. Fatima Aliyu",
      position: "Senior Legal Officer",
      specialization: "Family Law & GBV Cases",
      experience: "12 years"
    },
    {
      name: "Barr. Mohammed Bello",
      position: "Legal Officer",
      specialization: "Civil Litigation",
      experience: "8 years"
    },
    {
      name: "Barr. Aisha Garba",
      position: "Legal Officer",
      specialization: "Constitutional Law",
      experience: "10 years"
    }
  ];

  const officeLocations = [
    {
      name: "Main Office - Yola",
      address: "Federal Secretariat Complex, Yola",
      phone: "+234-75-628-5432",
      hours: "Monday-Friday: 8AM-4PM"
    },
    {
      name: "Mubi Zonal Office",
      address: "Local Government Secretariat, Mubi",
      phone: "+234-75-628-5433",
      hours: "Monday-Friday: 8AM-4PM"
    },
    {
      name: "Ganye Outreach Office",
      address: "Ganye Local Government Area",
      phone: "+234-75-628-5434",
      hours: "Tuesday & Thursday: 9AM-3PM"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <NavigationBreadcrumb />

        {/* Header */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
          <div className="flex items-start justify-between mb-6">
            <Link
              href="/support-resources"
              className="flex items-center space-x-2 text-amber-600 hover:text-amber-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Support Resources</span>
            </Link>
          </div>

          <div className="flex items-start space-x-6">
            <div className="p-4 bg-amber-100 rounded-2xl">
              <Scale className="w-12 h-12 text-amber-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Legal Aid Council Adamawa
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Providing free legal services to indigent persons and ensuring access to justice for all, 
                with specialized support for gender-based violence survivors and vulnerable populations.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="font-medium text-gray-900">Main Office</p>
                    <p className="text-gray-600">Federal Secretariat, Yola</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="font-medium text-gray-900">Hotline</p>
                    <p className="text-gray-600">+234-75-628-5432</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="font-medium text-gray-900">Office Hours</p>
                    <p className="text-gray-600">Mon-Fri: 8AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Legal Aid Council</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To provide free legal services to indigent persons in Nigeria, ensuring that poverty is not 
                a barrier to accessing justice. We are committed to protecting the rights of the vulnerable 
                and promoting the rule of law.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Legal Framework</h3>
              <p className="text-gray-700 leading-relaxed">
                Established under the Legal Aid Act, Cap L9, Laws of the Federation of Nigeria 2004, 
                the Legal Aid Council is mandated to provide legal aid and advice to indigent persons 
                in civil and criminal matters.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Commitment</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Equal access to justice for all</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Professional legal representation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Protection of fundamental rights</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Support for vulnerable populations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Community legal education</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Legal Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-amber-100 rounded-xl">
                      <Icon className="w-6 h-6 text-amber-600" />
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

        {/* Eligibility Criteria */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Eligibility for Legal Aid</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eligibilityCriteria.map((criteria, index) => {
              const Icon = criteria.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <Icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{criteria.category}</h3>
                  <p className="text-gray-600 text-sm">{criteria.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legal Team */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Legal Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {legalTeam.map((lawyer, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{lawyer.name}</h3>
                <p className="text-amber-600 font-medium mb-2">{lawyer.position}</p>
                <p className="text-gray-600 text-sm mb-1">{lawyer.specialization}</p>
                <p className="text-gray-500 text-xs">{lawyer.experience} experience</p>
              </div>
            ))}
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Office Locations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{office.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-amber-600 mt-0.5" />
                    <span className="text-gray-700">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700">{office.hours}</span>
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
                  <Icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-amber-600 mb-2">{achievement.metric}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact & Emergency */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-8 text-white mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Need Legal Assistance?</h2>
            <p className="text-xl opacity-90">
              Contact us for free legal consultation and representation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="tel:+237-75-628-5432"
              className="flex items-center justify-center space-x-3 bg-white bg-opacity-20 p-4 rounded-xl hover:bg-opacity-30 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <div>
                <p className="font-bold">Legal Hotline</p>
                <p className="opacity-90">+237-75-628-5432</p>
              </div>
            </a>
            
            <a
              href="mailto:adamawa@legalaidcouncil.gov.ng"
              className="flex items-center justify-center space-x-3 bg-white bg-opacity-20 p-4 rounded-xl hover:bg-opacity-30 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <div>
                <p className="font-bold">Email</p>
                <p className="opacity-90">adamawa@legalaidcouncil.gov.ng</p>
              </div>
            </a>
            
            <Link
              href="/crisis-support"
              className="flex items-center justify-center space-x-3 bg-white bg-opacity-20 p-4 rounded-xl hover:bg-opacity-30 transition-colors"
            >
              <AlertTriangle className="w-6 h-6" />
              <div>
                <p className="font-bold">Emergency Legal Aid</p>
                <p className="opacity-90">24/7 crisis support</p>
              </div>
            </Link>
          </div>
        </div>

        <PageLinkages />
      </div>
    </div>
  );
};

export default LegalAidCouncilPage;
