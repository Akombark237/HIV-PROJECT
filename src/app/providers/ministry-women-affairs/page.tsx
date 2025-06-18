'use client';

import { 
  Building, 
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
  Scale,
  Heart,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import NavigationBreadcrumb from '@/components/NavigationBreadcrumb';
import PageLinkages from '@/components/PageLinkages';

const MinistryWomenAffairsPage = () => {
  const services = [
    {
      title: "Policy Development & Implementation",
      description: "Developing and implementing policies for women's empowerment",
      icon: FileText,
      details: [
        "Gender equality policy formulation",
        "Women empowerment program design",
        "Policy implementation monitoring",
        "Stakeholder consultation processes",
        "Legislative advocacy and reform"
      ]
    },
    {
      title: "Women's Economic Empowerment",
      description: "Programs to enhance women's economic participation",
      icon: Briefcase,
      details: [
        "Skills acquisition training programs",
        "Microfinance and credit schemes",
        "Market linkage facilitation",
        "Cooperative society formation",
        "Entrepreneurship development"
      ]
    },
    {
      title: "GBV Prevention & Response",
      description: "Comprehensive gender-based violence prevention programs",
      icon: Shield,
      details: [
        "GBV awareness campaigns",
        "Survivor support services",
        "Community mobilization",
        "Referral system coordination",
        "Safe space establishment"
      ]
    },
    {
      title: "Education & Capacity Building",
      description: "Educational programs for women and girls",
      icon: BookOpen,
      details: [
        "Adult literacy programs",
        "Girls' education promotion",
        "Leadership training",
        "Digital literacy initiatives",
        "Civic education programs"
      ]
    },
    {
      title: "Health & Reproductive Rights",
      description: "Promoting women's health and reproductive rights",
      icon: Heart,
      details: [
        "Maternal health programs",
        "Family planning services",
        "HIV/AIDS prevention education",
        "Reproductive health awareness",
        "Healthcare access facilitation"
      ]
    },
    {
      title: "Legal Support & Advocacy",
      description: "Legal assistance and rights advocacy",
      icon: Scale,
      details: [
        "Legal aid services",
        "Rights awareness campaigns",
        "Court support for survivors",
        "Legal documentation assistance",
        "Advocacy for law reform"
      ]
    }
  ];

  const departments = [
    {
      name: "Women Development Department",
      head: "Mrs. Fatima Abdullahi",
      responsibilities: [
        "Women's empowerment programs",
        "Skills development initiatives",
        "Economic empowerment projects",
        "Cooperative society coordination"
      ]
    },
    {
      name: "Gender & Social Development",
      head: "Dr. Hauwa Mohammed",
      responsibilities: [
        "Gender mainstreaming",
        "Social protection programs",
        "Vulnerable groups support",
        "Community development"
      ]
    },
    {
      name: "Policy & Planning Unit",
      head: "Barr. Aisha Usman",
      responsibilities: [
        "Policy formulation",
        "Strategic planning",
        "Program monitoring",
        "Research and documentation"
      ]
    },
    {
      name: "GBV Response Unit",
      head: "Mrs. Maryam Bello",
      responsibilities: [
        "GBV case management",
        "Survivor support coordination",
        "Prevention programs",
        "Multi-sectoral response"
      ]
    }
  ];

  const achievements = [
    {
      metric: "25,000+",
      description: "Women trained in various skills",
      icon: Users
    },
    {
      metric: "150+",
      description: "Women cooperatives established",
      icon: Building
    },
    {
      metric: "5,000+",
      description: "GBV survivors supported",
      icon: Heart
    },
    {
      metric: "80%",
      description: "Increase in girls' school enrollment",
      icon: BookOpen
    }
  ];

  const programs = [
    {
      name: "Adamawa Women Empowerment Program (AWEP)",
      description: "Comprehensive program for women's economic and social empowerment",
      budget: "₦2.5 Billion",
      beneficiaries: "50,000 women",
      duration: "2020-2025"
    },
    {
      name: "Girls Education Support Initiative",
      description: "Supporting girls' education through scholarships and incentives",
      budget: "₦800 Million",
      beneficiaries: "15,000 girls",
      duration: "Ongoing"
    },
    {
      name: "GBV Prevention & Response Program",
      description: "Multi-sectoral approach to preventing and responding to GBV",
      budget: "₦1.2 Billion",
      beneficiaries: "100,000 people",
      duration: "2021-2026"
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
              <Building className="w-12 h-12 text-blue-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Adamawa State Ministry of Women Affairs
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                The official government ministry responsible for promoting women's rights, gender equality, 
                and coordinating programs for women's empowerment and protection in Adamawa State.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">Government House, Yola</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Office Line</p>
                    <p className="text-gray-600">+234-75-625-4321</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Office Hours</p>
                    <p className="text-gray-600">Mon-Fri: 8AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ministry Overview */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Ministry</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mandate</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Adamawa State Ministry of Women Affairs is mandated to formulate, implement, and monitor 
                policies and programs that promote gender equality, women's empowerment, and the protection 
                of women and girls from all forms of violence and discrimination.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We work to ensure that women and girls in Adamawa State have equal access to opportunities, 
                resources, and services that enable them to participate fully in the social, economic, and 
                political development of the state.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Objectives</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Promote gender equality and women's rights</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Enhance women's economic empowerment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Prevent and respond to gender-based violence</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Improve access to education and healthcare</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Strengthen women's political participation</span>
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

        {/* Departments */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ministry Departments</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                <p className="text-blue-600 font-medium mb-4">Head: {dept.head}</p>
                <h4 className="font-medium text-gray-900 mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {dept.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start space-x-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Major Programs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Major Programs</h2>
          <div className="space-y-6">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.name}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Budget</p>
                    <p className="text-blue-600 font-bold">{program.budget}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Beneficiaries</p>
                    <p className="text-blue-600 font-bold">{program.beneficiaries}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Duration</p>
                    <p className="text-blue-600 font-bold">{program.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Achievements</h2>
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

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 text-white mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Contact the Ministry</h2>
            <p className="text-xl opacity-90">
              Get in touch with us for support, information, or to access our services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="tel:+237-75-625-4321"
              className="flex items-center justify-center space-x-3 bg-white bg-opacity-20 p-4 rounded-xl hover:bg-opacity-30 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <div>
                <p className="font-bold">Office Line</p>
                <p className="opacity-90">+237-75-625-4321</p>
              </div>
            </a>
            
            <a
              href="mailto:info@adamawa-women.gov.ng"
              className="flex items-center justify-center space-x-3 bg-white bg-opacity-20 p-4 rounded-xl hover:bg-opacity-30 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <div>
                <p className="font-bold">Email</p>
                <p className="opacity-90">info@adamawa-women.gov.ng</p>
              </div>
            </a>
            
            <div className="flex items-center justify-center space-x-3 bg-white bg-opacity-20 p-4 rounded-xl">
              <MapPin className="w-6 h-6" />
              <div>
                <p className="font-bold">Address</p>
                <p className="opacity-90">Government House, Yola</p>
              </div>
            </div>
          </div>
        </div>

        <PageLinkages />
      </div>
    </div>
  );
};

export default MinistryWomenAffairsPage;
