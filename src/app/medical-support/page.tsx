'use client';

import { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Pill, 
  Activity, 
  Video, 
  Phone, 
  Heart, 
  Bell, 
  CheckCircle, 
  AlertTriangle, 
  Plus, 
  Edit, 
  Trash2,
  User,
  MapPin,
  Mail,
  Globe,
  Download,
  Upload,
  BarChart3,
  TrendingUp,
  Stethoscope,
  Shield,
  Users,
  FileText,
  Settings,
  Search,
  Filter,
  ChevronRight,
  ArrowLeft,
  Star,
  Award
} from 'lucide-react';
import NavigationBreadcrumb from '@/components/NavigationBreadcrumb';
import PageLinkages from '@/components/PageLinkages';
import QuickActions from '@/components/QuickActions';

type SupportSection = 'overview' | 'appointments' | 'medications' | 'monitoring' | 'telemedicine';

interface Appointment {
  id: string;
  providerName: string;
  specialty: string;
  date: string;
  time: string;
  type: 'in-person' | 'telemedicine';
  status: 'scheduled' | 'completed' | 'cancelled';
  location?: string;
  notes?: string;
}

interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  times: string[];
  startDate: string;
  endDate?: string;
  instructions: string;
  sideEffects: string[];
  adherenceRate: number;
}

interface HealthMetric {
  id: string;
  name: string;
  value: string;
  unit: string;
  date: string;
  status: 'normal' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  target?: string;
}

interface TelemedicineProvider {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  availability: string;
  languages: string[];
  consultationFee: string;
  experience: string;
  qualifications: string[];
}

const MedicalSupportPage = () => {
  const [activeSection, setActiveSection] = useState<SupportSection>('overview');
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [showMedicationForm, setShowMedicationForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const upcomingAppointments: Appointment[] = [
    {
      id: '1',
      providerName: 'Dr. Amina Hassan',
      specialty: 'HIV Specialist',
      date: '2024-06-25',
      time: '10:00 AM',
      type: 'in-person',
      status: 'scheduled',
      location: 'Federal Medical Centre Yola',
      notes: 'Routine viral load check and medication review'
    },
    {
      id: '2',
      providerName: 'Dr. Ibrahim Musa',
      specialty: 'Infectious Disease',
      date: '2024-06-28',
      time: '2:30 PM',
      type: 'telemedicine',
      status: 'scheduled',
      notes: 'Follow-up consultation for treatment adherence'
    },
    {
      id: '3',
      providerName: 'Nurse Sarah Adamu',
      specialty: 'HIV Counselor',
      date: '2024-07-02',
      time: '9:00 AM',
      type: 'in-person',
      status: 'scheduled',
      location: 'Adamawa State Specialist Hospital',
      notes: 'Counseling session and support group referral'
    }
  ];

  const medications: Medication[] = [
    {
      id: '1',
      name: 'Efavirenz/Emtricitabine/Tenofovir',
      dosage: '600mg/200mg/300mg',
      frequency: 'Once daily',
      times: ['20:00'],
      startDate: '2024-01-15',
      instructions: 'Take with food, preferably at bedtime',
      sideEffects: ['Dizziness', 'Vivid dreams', 'Nausea'],
      adherenceRate: 95
    },
    {
      id: '2',
      name: 'Dolutegravir',
      dosage: '50mg',
      frequency: 'Once daily',
      times: ['08:00'],
      startDate: '2024-03-01',
      instructions: 'Can be taken with or without food',
      sideEffects: ['Headache', 'Insomnia'],
      adherenceRate: 98
    },
    {
      id: '3',
      name: 'Multivitamin',
      dosage: '1 tablet',
      frequency: 'Once daily',
      times: ['08:00'],
      startDate: '2024-01-15',
      instructions: 'Take with breakfast',
      sideEffects: [],
      adherenceRate: 92
    }
  ];

  const healthMetrics: HealthMetric[] = [
    {
      id: '1',
      name: 'CD4 Count',
      value: '650',
      unit: 'cells/μL',
      date: '2024-06-15',
      status: 'normal',
      trend: 'up',
      target: '>500'
    },
    {
      id: '2',
      name: 'Viral Load',
      value: 'Undetectable',
      unit: 'copies/mL',
      date: '2024-06-15',
      status: 'normal',
      trend: 'stable',
      target: '<50'
    },
    {
      id: '3',
      name: 'Blood Pressure',
      value: '125/80',
      unit: 'mmHg',
      date: '2024-06-20',
      status: 'normal',
      trend: 'stable',
      target: '<140/90'
    },
    {
      id: '4',
      name: 'Weight',
      value: '68.5',
      unit: 'kg',
      date: '2024-06-20',
      status: 'normal',
      trend: 'up',
      target: '65-75'
    }
  ];

  const telemedicineProviders: TelemedicineProvider[] = [
    {
      id: '1',
      name: 'Dr. Fatima Abdullahi',
      specialty: 'HIV/AIDS Specialist',
      rating: 4.9,
      availability: 'Mon-Fri 9AM-5PM',
      languages: ['English', 'Hausa', 'Fulfulde'],
      consultationFee: '₦5,000',
      experience: '12 years',
      qualifications: ['MBBS', 'FMCP', 'HIV Specialist Certification']
    },
    {
      id: '2',
      name: 'Dr. Mohammed Bello',
      specialty: 'Infectious Disease',
      rating: 4.8,
      availability: 'Mon-Sat 8AM-6PM',
      languages: ['English', 'Hausa'],
      consultationFee: '₦4,500',
      experience: '15 years',
      qualifications: ['MBBS', 'FWACP', 'Infectious Disease Fellowship']
    },
    {
      id: '3',
      name: 'Dr. Aisha Garba',
      specialty: 'Women\'s Health & HIV',
      rating: 4.9,
      availability: 'Tue-Sat 10AM-4PM',
      languages: ['English', 'Hausa', 'Fulfulde', 'Kanuri'],
      consultationFee: '₦5,500',
      experience: '10 years',
      qualifications: ['MBBS', 'FMCOG', 'HIV Care Certification']
    }
  ];

  const AppointmentCard = ({ appointment }: { appointment: Appointment }) => (
    <div 
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-200"
      onClick={() => setSelectedAppointment(appointment)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{appointment.providerName}</h3>
          <p className="text-blue-600 font-medium mb-2">{appointment.specialty}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(appointment.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{appointment.time}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            appointment.type === 'telemedicine' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
          }`}>
            {appointment.type === 'telemedicine' ? 'Video Call' : 'In-Person'}
          </span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      
      {appointment.location && (
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
          <MapPin className="w-4 h-4" />
          <span>{appointment.location}</span>
        </div>
      )}
      
      {appointment.notes && (
        <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{appointment.notes}</p>
      )}
    </div>
  );

  const MedicationCard = ({ medication }: { medication: Medication }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{medication.name}</h3>
          <p className="text-gray-600 mb-2">{medication.dosage} - {medication.frequency}</p>
          <div className="flex items-center space-x-2 mb-3">
            <div className={`w-3 h-3 rounded-full ${
              medication.adherenceRate >= 95 ? 'bg-green-500' :
              medication.adherenceRate >= 80 ? 'bg-yellow-500' : 'bg-red-500'
            }`}></div>
            <span className="text-sm font-medium text-gray-700">
              {medication.adherenceRate}% adherence
            </span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
            <Edit className="w-4 h-4" />
          </button>
          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm">
          <Clock className="w-4 h-4 text-blue-500" />
          <span className="text-gray-700">Take at: {medication.times.join(', ')}</span>
        </div>
        <div className="flex items-start space-x-2 text-sm">
          <FileText className="w-4 h-4 text-green-500 mt-0.5" />
          <span className="text-gray-700">{medication.instructions}</span>
        </div>
      </div>
      
      {medication.sideEffects.length > 0 && (
        <div className="bg-yellow-50 p-3 rounded-lg">
          <h4 className="text-sm font-medium text-yellow-800 mb-1">Possible Side Effects:</h4>
          <p className="text-sm text-yellow-700">{medication.sideEffects.join(', ')}</p>
        </div>
      )}
    </div>
  );

  const HealthMetricCard = ({ metric }: { metric: HealthMetric }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{metric.name}</h3>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-2xl font-bold text-blue-600">{metric.value}</span>
            <span className="text-gray-500">{metric.unit}</span>
            <div className={`flex items-center space-x-1 ${
              metric.trend === 'up' ? 'text-green-500' :
              metric.trend === 'down' ? 'text-red-500' : 'text-gray-500'
            }`}>
              <TrendingUp className={`w-4 h-4 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
            </div>
          </div>
          <p className="text-sm text-gray-600">Last updated: {new Date(metric.date).toLocaleDateString()}</p>
        </div>
        <div className={`w-3 h-3 rounded-full ${
          metric.status === 'normal' ? 'bg-green-500' :
          metric.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
        }`}></div>
      </div>
      
      {metric.target && (
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Target:</span> {metric.target}
          </p>
        </div>
      )}
    </div>
  );

  const TelemedicineProviderCard = ({ provider }: { provider: TelemedicineProvider }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{provider.name}</h3>
          <p className="text-blue-600 font-medium mb-2">{provider.specialty}</p>
          <div className="flex items-center space-x-2 mb-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">{provider.rating}/5.0</span>
            <span className="text-sm text-gray-500">({provider.experience} experience)</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-green-600">{provider.consultationFee}</p>
          <p className="text-sm text-gray-500">per consultation</p>
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{provider.availability}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Globe className="w-4 h-4" />
          <span>{provider.languages.join(', ')}</span>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {provider.qualifications.slice(0, 2).map((qual, index) => (
          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-lg">
            {qual}
          </span>
        ))}
        {provider.qualifications.length > 2 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
            +{provider.qualifications.length - 2} more
          </span>
        )}
      </div>
      
      <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors">
        Schedule Consultation
      </button>
    </div>
  );

  if (selectedAppointment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedAppointment(null)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6 text-lg font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Appointments</span>
          </button>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Appointment Details</h1>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Provider Information</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-900">Provider</p>
                      <p className="text-gray-700">{selectedAppointment.providerName}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Specialty</p>
                      <p className="text-gray-700">{selectedAppointment.specialty}</p>
                    </div>
                    {selectedAppointment.location && (
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-700">{selectedAppointment.location}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Appointment Details</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-900">Date & Time</p>
                      <p className="text-gray-700">
                        {new Date(selectedAppointment.date).toLocaleDateString()} at {selectedAppointment.time}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Type</p>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        selectedAppointment.type === 'telemedicine' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {selectedAppointment.type === 'telemedicine' ? 'Video Consultation' : 'In-Person Visit'}
                      </span>
                    </div>
                    {selectedAppointment.notes && (
                      <div>
                        <p className="font-medium text-gray-900">Notes</p>
                        <p className="text-gray-700">{selectedAppointment.notes}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <button className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors">
                {selectedAppointment.type === 'telemedicine' ? 'Join Video Call' : 'Get Directions'}
              </button>
              <button className="flex-1 bg-gray-500 text-white py-3 rounded-xl font-medium hover:bg-gray-600 transition-colors">
                Reschedule
              </button>
              <button className="flex-1 bg-red-500 text-white py-3 rounded-xl font-medium hover:bg-red-600 transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <NavigationBreadcrumb />
        <QuickActions />
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Medical Support
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive medical support tools for HIV care management, including appointments, medications, health monitoring, and telemedicine services
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: 'overview' as const, label: 'Overview', icon: Heart },
              { id: 'appointments' as const, label: 'Appointments', icon: Calendar },
              { id: 'medications' as const, label: 'Medications', icon: Pill },
              { id: 'monitoring' as const, label: 'Health Monitoring', icon: Activity },
              { id: 'telemedicine' as const, label: 'Telemedicine', icon: Video }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all text-lg ${
                    activeSection === tab.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Calendar className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Appointment Scheduling</h3>
                <p className="text-gray-600">Schedule and manage appointments with HIV care providers</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Pill className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Medication Reminders</h3>
                <p className="text-gray-600">Track medications and receive timely reminders</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Activity className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Health Monitoring</h3>
                <p className="text-gray-600">Monitor vital health metrics and track progress</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Video className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Telemedicine</h3>
                <p className="text-gray-600">Access remote consultations with specialists</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
                <div className="space-y-4">
                  <button className="w-full flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors">
                    <Plus className="w-6 h-6 text-blue-600" />
                    <span className="font-medium text-blue-900">Schedule New Appointment</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors">
                    <Bell className="w-6 h-6 text-green-600" />
                    <span className="font-medium text-green-900">Set Medication Reminder</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition-colors">
                    <Upload className="w-6 h-6 text-purple-600" />
                    <span className="font-medium text-purple-900">Upload Health Records</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-4 bg-red-50 hover:bg-red-100 rounded-xl transition-colors">
                    <Video className="w-6 h-6 text-red-600" />
                    <span className="font-medium text-red-900">Start Telemedicine Call</span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="font-medium text-gray-900">Medication taken</p>
                      <p className="text-sm text-gray-600">Efavirenz - 2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-gray-900">Appointment scheduled</p>
                      <p className="text-sm text-gray-600">Dr. Amina Hassan - June 25</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-purple-500" />
                    <div>
                      <p className="font-medium text-gray-900">Health metrics updated</p>
                      <p className="text-sm text-gray-600">CD4 count - June 15</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Appointments Section */}
        {activeSection === 'appointments' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Upcoming Appointments</h2>
              <button className="flex items-center space-x-2 bg-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors">
                <Plus className="w-5 h-5" />
                <span>Schedule New</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingAppointments.map((appointment) => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Appointment Guidelines</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Before Your Appointment</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Prepare a list of current medications</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Note any side effects or concerns</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Bring recent lab results if available</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span>Prepare questions for your provider</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Safety Considerations</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-red-500 mt-0.5" />
                      <span>Inform staff if you have safety concerns</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-red-500 mt-0.5" />
                      <span>Request private consultation if needed</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-red-500 mt-0.5" />
                      <span>Use alternative contact methods if necessary</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-red-500 mt-0.5" />
                      <span>Discuss confidentiality preferences</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Medications Section */}
        {activeSection === 'medications' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Current Medications</h2>
              <button
                onClick={() => setShowMedicationForm(true)}
                className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition-colors"
              >
                <Plus className="w-5 h-5" />
                <span>Add Medication</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {medications.map((medication) => (
                <MedicationCard key={medication.id} medication={medication} />
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Medication Adherence Tips</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Consistent Timing</h4>
                  <p className="text-gray-600">Take medications at the same time every day to maintain steady levels</p>
                </div>
                <div className="text-center">
                  <Bell className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Set Reminders</h4>
                  <p className="text-gray-600">Use phone alarms, apps, or pill organizers to remember doses</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Support System</h4>
                  <p className="text-gray-600">Involve trusted friends or family in your medication routine</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Health Monitoring Section */}
        {activeSection === 'monitoring' && (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Health Metrics</h2>
              <button className="flex items-center space-x-2 bg-purple-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-600 transition-colors">
                <Upload className="w-5 h-5" />
                <span>Upload Results</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {healthMetrics.map((metric) => (
                <HealthMetricCard key={metric.id} metric={metric} />
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Health Monitoring Schedule</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Regular Tests</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">CD4 Count</span>
                      <span className="text-sm text-gray-600">Every 3-6 months</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Viral Load</span>
                      <span className="text-sm text-gray-600">Every 3-6 months</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Complete Blood Count</span>
                      <span className="text-sm text-gray-600">Every 6 months</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Liver Function</span>
                      <span className="text-sm text-gray-600">Every 6 months</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Self-Monitoring</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-gray-900">Weight</span>
                      <span className="text-sm text-blue-600">Weekly</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-gray-900">Blood Pressure</span>
                      <span className="text-sm text-blue-600">Monthly</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-gray-900">Symptoms</span>
                      <span className="text-sm text-blue-600">Daily</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium text-gray-900">Medication Side Effects</span>
                      <span className="text-sm text-blue-600">As needed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Telemedicine Section */}
        {activeSection === 'telemedicine' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Telemedicine Consultations</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Access specialized HIV care through secure video consultations with qualified healthcare providers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {telemedicineProviders.map((provider) => (
                <TelemedicineProviderCard key={provider.id} provider={provider} />
              ))}
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Telemedicine Benefits</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Privacy & Safety</h4>
                  <p className="text-gray-600">Consult from the safety of your home with complete confidentiality</p>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Convenient Access</h4>
                  <p className="text-gray-600">No travel required, flexible scheduling to fit your needs</p>
                </div>
                <div className="text-center">
                  <Stethoscope className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Specialist Care</h4>
                  <p className="text-gray-600">Access to HIV specialists and trained healthcare providers</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
              <div className="flex items-start space-x-3">
                <Video className="w-6 h-6 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-blue-800 mb-2">Preparing for Your Video Consultation</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Ensure stable internet connection and quiet environment</li>
                    <li>• Have your medication list and recent lab results ready</li>
                    <li>• Test your camera and microphone beforehand</li>
                    <li>• Prepare questions and concerns to discuss</li>
                    <li>• Have a pen and paper ready for notes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        <PageLinkages />

        {/* Emergency Contact Banner */}
        <div className="mt-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Medical Emergency</h3>
          <p className="text-lg mb-6">
            If you are experiencing a medical emergency, please contact emergency services immediately
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a
              href="tel:117"
              className="flex items-center space-x-2 bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Emergency: 117</span>
            </a>
            <a
              href="tel:+237-75-627-8901"
              className="flex items-center space-x-2 bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>HIV Support Hotline: +237-75-627-8901</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalSupportPage;
