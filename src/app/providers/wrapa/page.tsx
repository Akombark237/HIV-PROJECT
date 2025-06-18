'use client';

import { 
  Heart, 
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
  Scale
} from 'lucide-react';
import Link from 'next/link';
import NavigationBreadcrumb from '@/components/NavigationBreadcrumb';
import PageLinkages from '@/components/PageLinkages';

const WRAPAPage = () => {
  const services = [
    {
      title: "Legal Support & Advocacy",
      description: "Free legal consultation and representation for GBV survivors",
      icon: Scale,
      details: [
        "Legal consultation on domestic violence cases",
        "Court representation for survivors",
        "Legal documentation and evidence gathering",
        "Rights education and awareness",
        "Referral to specialized legal services"
      ]
    },
    {
      title: "Counseling & Psychosocial Support",
      description: "Professional counseling services for trauma recovery",
      icon: Heart,
      details: [
        "Individual trauma counseling",
        "Group therapy sessions",
        "Family counseling and mediation",
        "Crisis intervention services",
        "Long-term psychological support"
      ]
    },
    {
      title: "Emergency Shelter & Safe Houses",
      description: "Temporary safe accommodation for women and children",
      icon: Home,
      details: [
        "24/7 emergency shelter services",
        "Safe houses for women and children",
        "Basic necessities provision",
        "Security and protection services",
        "Temporary accommodation arrangements"
      ]
    },
    {
      title: "Economic Empowerment Programs",
      description: "Skills training and livelihood support for survivors",
      icon: Briefcase,
      details: [
        "Vocational skills training",
        "Microfinance and credit facilities",
        "Business development support",
        "Job placement assistance",
        "Financial literacy training"
      ]
    },
    {
      title: "Advocacy & Awareness",
      description: "Community education and policy advocacy",
      icon: Users,
      details: [
        "Community awareness campaigns",
        "Policy advocacy and reform",
        "Stakeholder engagement",
        "Media advocacy and outreach",
        "Research and documentation"
      ]
    },
    {
      title: "Capacity Building",
      description: "Training for service providers and community leaders",
      icon: BookOpen,
      details: [
        "Training for law enforcement",
        "Healthcare provider capacity building",
        "Community leader education",
        "Peer educator programs",
        "Professional development workshops"
      ]
    }
  ];

  const programs = [
    {
      name: "Women's Rights Education Program",
      description: "Comprehensive education on women's legal rights and protections",
      beneficiaries: "5,000+ women annually",
      duration: "Ongoing"
    },
    {
      name: "GBV Response Network",
      description: "Coordinated response system for gender-based violence cases",
      beneficiaries: "500+ survivors annually",
      duration: "24/7 availability"
    },
    {
      name: "Economic Empowerment Initiative",
      description: "Skills training and microfinance for women's economic independence",
      beneficiaries: "1,200+ women trained",
      duration: "6-month cycles"
    },
    {
      name: "Legal Aid Clinic",
      description: "Free legal services and representation for vulnerable women",
      beneficiaries: "800+ cases handled",
      duration: "Monday-Friday"
    }
  ];

  const achievements = [
    {
      metric: "15,000+",
      description: "Women reached with rights education",
      icon: Users
    },
    {
      metric: "2,500+",
      description: "GBV survivors supported",
      icon: Heart
    },
    {
      metric: "1,800+",
      description: "Legal cases handled",
      icon: Scale
    },
    {
      metric: "50+",
      description: "Community partnerships",
      icon: Target
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <NavigationBreadcrumb />

        {/* Header */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
          <div className="flex items-start justify-between mb-6">
            <Link
              href="/support-resources"
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Support Resources</span>
            </Link>
          </div>

          <div className="flex items-start space-x-6">
            <div className="p-4 bg-purple-100 rounded-2xl">
              <Shield className="w-12 h-12 text-purple-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Women's Rights Advancement and Protection Alternative (WRAPA)
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Leading organization dedicated to advancing women's rights, protecting survivors of gender-based violence, 
                and promoting gender equality in Adamawa State and across Nigeria.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Yola, Adamawa State</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="font-medium text-gray-900">Emergency Line</p>
                    <p className="text-gray-600">+234-803-456-7890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="font-medium text-gray-900">Availability</p>
                    <p className="text-gray-600">24/7 Emergency Response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To advance and protect the rights of women and girls, provide comprehensive support to survivors of 
              gender-based violence, and work towards creating a society where women can live free from violence 
              and discrimination while enjoying equal opportunities for development and participation.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              A society where women and girls enjoy full human rights, live free from all forms of violence and 
              discrimination, and have equal access to opportunities for personal, social, and economic development 
              in a safe and enabling environment.
            </p>
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
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <Icon className="w-6 h-6 text-purple-600" />
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

        {/* Programs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.name}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Beneficiaries</p>
                    <p className="text-purple-600 font-bold">{program.beneficiaries}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Duration</p>
                    <p className="text-purple-600 font-bold">{program.duration}</p>
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
                  <Icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-purple-600 mb-2">{achievement.metric}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact & Emergency */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl p-8 text-white mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
            <p className="text-xl opacity-90">
              WRAPA provides 24/7 emergency response for women and girls in crisis
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="tel:+237-803-456-7890"
              className="flex items-center justify-center space-x-3 bg-white bg-opacity-20 p-4 rounded-xl hover:bg-opacity-30 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <div>
                <p className="font-bold">Emergency Hotline</p>
                <p className="opacity-90">+237-803-456-7890</p>
              </div>
            </a>
            
            <a
              href="mailto:help@wrapa.org"
              className="flex items-center justify-center space-x-3 bg-white bg-opacity-20 p-4 rounded-xl hover:bg-opacity-30 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <div>
                <p className="font-bold">Email Support</p>
                <p className="opacity-90">help@wrapa.org</p>
              </div>
            </a>
            
            <Link
              href="/crisis-support"
              className="flex items-center justify-center space-x-3 bg-white bg-opacity-20 p-4 rounded-xl hover:bg-opacity-30 transition-colors"
            >
              <AlertTriangle className="w-6 h-6" />
              <div>
                <p className="font-bold">Crisis Support</p>
                <p className="opacity-90">Get immediate help</p>
              </div>
            </Link>
          </div>
        </div>

        <PageLinkages />
      </div>
    </div>
  );
};

export default WRAPAPage;
