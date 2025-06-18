'use client';

import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users, 
  Stethoscope, 
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
  Globe,
  Building,
  Eye,
  Lock,
  UserCheck,
  Pill,
  Activity,
  Shield,
  TestTube
} from 'lucide-react';
import Link from 'next/link';
import NavigationBreadcrumb from '@/components/NavigationBreadcrumb';
import PageLinkages from '@/components/PageLinkages';

const FMCYolaHIVPage = () => {
  const services = [
    {
      title: "HIV Testing & Counseling",
      description: "Comprehensive HIV testing with pre and post-test counseling",
      icon: TestTube,
      details: [
        "Rapid HIV testing",
        "Confirmatory testing",
        "Pre-test counseling",
        "Post-test counseling",
        "Partner testing services"
      ]
    },
    {
      title: "Antiretroviral Therapy (ART)",
      description: "Free antiretroviral treatment for HIV-positive patients",
      icon: Pill,
      details: [
        "First-line ART regimens",
        "Second-line treatment options",
        "Pediatric HIV treatment",
        "Treatment monitoring",
        "Drug resistance testing"
      ]
    },
    {
      title: "Prevention of Mother-to-Child Transmission",
      description: "PMTCT services for HIV-positive pregnant women",
      icon: Heart,
      details: [
        "Antenatal HIV testing",
        "ART for pregnant women",
        "Safe delivery practices",
        "Infant feeding counseling",
        "Early infant diagnosis"
      ]
    },
    {
      title: "Opportunistic Infection Management",
      description: "Treatment and prevention of HIV-related infections",
      icon: Shield,
      details: [
        "TB screening and treatment",
        "Pneumonia prevention",
        "Fungal infection treatment",
        "Prophylactic medications",
        "Immune system monitoring"
      ]
    },
    {
      title: "Psychosocial Support",
      description: "Mental health and social support services",
      icon: Users,
      details: [
        "Individual counseling",
        "Support group facilitation",
        "Peer counselor training",
        "Family counseling",
        "Stigma reduction programs"
      ]
    },
    {
      title: "Laboratory Services",
      description: "Comprehensive laboratory testing and monitoring",
      icon: Activity,
      details: [
        "CD4 count monitoring",
        "Viral load testing",
        "Chemistry panels",
        "Hematology tests",
        "Drug resistance testing"
      ]
    }
  ];

  const specializedClinics = [
    {
      name: "Adult HIV Clinic",
      description: "Comprehensive HIV care for adults",
      schedule: "Monday, Wednesday, Friday",
      capacity: "200 patients/day"
    },
    {
      name: "Pediatric HIV Clinic",
      description: "Specialized care for HIV-positive children",
      schedule: "Tuesday, Thursday",
      capacity: "50 patients/day"
    },
    {
      name: "PMTCT Clinic",
      description: "Prevention of mother-to-child transmission",
      schedule: "Daily",
      capacity: "100 patients/day"
    },
    {
      name: "Adolescent HIV Clinic",
      description: "Tailored care for HIV-positive adolescents",
      schedule: "Saturday",
      capacity: "75 patients/day"
    }
  ];

  const medicalTeam = [
    {
      name: "Dr. Amina Hassan",
      position: "Chief Medical Officer, HIV Unit",
      specialization: "Infectious Diseases",
      experience: "15 years"
    },
    {
      name: "Dr. Ibrahim Musa",
      position: "Senior Consultant",
      specialization: "HIV/AIDS Medicine",
      experience: "12 years"
    },
    {
      name: "Dr. Fatima Bello",
      position: "Pediatric HIV Specialist",
      specialization: "Pediatric HIV Care",
      experience: "10 years"
    },
    {
      name: "Pharm. Mohammed Ali",
      position: "Chief Pharmacist",
      specialization: "HIV Medications",
      experience: "8 years"
    }
  ];

  const achievements = [
    {
      metric: "25,000+",
      description: "Patients on ART",
      icon: Pill
    },
    {
      metric: "15,000+",
      description: "People tested for HIV",
      icon: TestTube
    },
    {
      metric: "3,500+",
      description: "PMTCT beneficiaries",
      icon: Heart
    },
    {
      metric: "95%",
      description: "Viral suppression rate",
      icon: Award
    }
  ];

  const supportPrograms = [
    {
      name: "Adherence Support Program",
      description: "Helping patients maintain consistent medication adherence",
      beneficiaries: "20,000+ patients",
      success_rate: "92%"
    },
    {
      name: "Nutritional Support Initiative",
      description: "Providing nutritional supplements for malnourished patients",
      beneficiaries: "5,000+ patients",
      success_rate: "85%"
    },
    {
      name: "Peer Counselor Network",
      description: "Training HIV-positive individuals as peer counselors",
      beneficiaries: "500+ counselors trained",
      success_rate: "90%"
    },
    {
      name: "Family Support Program",
      description: "Supporting families affected by HIV",
      beneficiaries: "8,000+ families",
      success_rate: "88%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <NavigationBreadcrumb />

        {/* Header */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
          <div className="flex items-start justify-between mb-6">
            <Link
              href="/support-resources"
              className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Support Resources</span>
            </Link>
          </div>

          <div className="flex items-start space-x-6">
            <div className="p-4 bg-green-100 rounded-2xl">
              <Heart className="w-12 h-12 text-green-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Federal Medical Centre Yola HIV Care Unit
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Leading HIV treatment and care center providing comprehensive, compassionate, and evidence-based 
                HIV services including testing, treatment, prevention, and support for people living with HIV.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">FMC Yola, Jimeta</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">HIV Unit</p>
                    <p className="text-gray-600">+237-75-627-8900</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Clinic Hours</p>
                    <p className="text-gray-600">Mon-Sat: 8AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our HIV Care Unit</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To provide comprehensive, high-quality HIV care and treatment services that improve the health 
                outcomes and quality of life for people living with HIV while preventing new infections and 
                reducing HIV-related stigma and discrimination.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accreditation</h3>
              <p className="text-gray-700 leading-relaxed">
                Our HIV Care Unit is accredited by the Federal Ministry of Health and supported by international 
                partners including PEPFAR, WHO, and UNAIDS, ensuring we meet the highest standards of HIV care.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Patient-centered care approach</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Evidence-based treatment protocols</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Multidisciplinary team approach</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Confidentiality and privacy protection</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Community engagement and outreach</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our HIV Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-green-100 rounded-xl">
                      <Icon className="w-6 h-6 text-green-600" />
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

        {/* Specialized Clinics */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specialized HIV Clinics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedClinics.map((clinic, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{clinic.name}</h3>
                <p className="text-gray-600 mb-4">{clinic.description}</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Schedule</p>
                    <p className="text-green-600 font-bold">{clinic.schedule}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Capacity</p>
                    <p className="text-green-600 font-bold">{clinic.capacity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medical Team */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Medical Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {medicalTeam.map((doctor, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-green-600 font-medium mb-2">{doctor.position}</p>
                <p className="text-gray-600 text-sm mb-1">{doctor.specialization}</p>
                <p className="text-gray-500 text-xs">{doctor.experience} experience</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Programs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Support Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {supportPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.name}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Beneficiaries</p>
                    <p className="text-green-600 font-bold">{program.beneficiaries}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Success Rate</p>
                    <p className="text-green-600 font-bold">{program.success_rate}</p>
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
                  <Icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-green-600 mb-2">{achievement.metric}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Appointment & Contact */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl p-8 text-white mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Schedule Your HIV Care Appointment</h2>
            <p className="text-xl opacity-90">
              Get comprehensive HIV care from our experienced medical team
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="tel:+237-75-627-8900"
              className="flex items-center justify-center space-x-3 bg-white bg-opacity-20 p-4 rounded-xl hover:bg-opacity-30 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <div>
                <p className="font-bold">HIV Unit</p>
                <p className="opacity-90">+237-75-627-8900</p>
              </div>
            </a>
            
            <Link
              href="/medical-support"
              className="flex items-center justify-center space-x-3 bg-white bg-opacity-20 p-4 rounded-xl hover:bg-opacity-30 transition-colors"
            >
              <Calendar className="w-6 h-6" />
              <div>
                <p className="font-bold">Book Online</p>
                <p className="opacity-90">Schedule appointment</p>
              </div>
            </Link>
            
            <a
              href="mailto:hiv.unit@fmcyola.gov.ng"
              className="flex items-center justify-center space-x-3 bg-white bg-opacity-20 p-4 rounded-xl hover:bg-opacity-30 transition-colors"
            >
              <Mail className="w-6 h-6" />
              <div>
                <p className="font-bold">Email</p>
                <p className="opacity-90">hiv.unit@fmcyola.gov.ng</p>
              </div>
            </a>
          </div>
        </div>

        <PageLinkages />
      </div>
    </div>
  );
};

export default FMCYolaHIVPage;
