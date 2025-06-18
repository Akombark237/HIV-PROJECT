'use client';

import { useState } from 'react';
import {
  AlertTriangle,
  Phone,
  MessageCircle,
  Shield,
  Users,
  CheckCircle,
  Info
} from 'lucide-react';
import NavigationBreadcrumb from '@/components/NavigationBreadcrumb';
import PageLinkages from '@/components/PageLinkages';
import QuickActions from '@/components/QuickActions';

const CrisisSupportPage = () => {
  const [activeSection] = useState('immediate');

  const emergencyContacts = [
    {
      name: 'Emergency Services',
      number: '117',
      description: 'Police, Fire, Medical Emergency',
      available: '24/7',
      type: 'emergency'
    },
    {
      name: 'HIV Crisis Hotline',
      number: '+237-75-627-8901',
      description: '24/7 HIV and GBV support',
      available: '24/7',
      type: 'crisis'
    },
    {
      name: 'National GBV Hotline',
      number: '+237-80-9999-9999',
      description: 'Gender-based violence support',
      available: '24/7',
      type: 'gbv'
    },
    {
      name: 'Suicide Prevention',
      number: '+237-80-7777-7777',
      description: 'Mental health crisis support',
      available: '24/7',
      type: 'mental-health'
    }
  ];

  const safetySteps = [
    {
      title: 'Assess Your Safety',
      description: 'Evaluate your immediate safety situation',
      actions: ['Find a safe location', 'Identify potential threats', 'Plan escape routes']
    },
    {
      title: 'Contact Support',
      description: 'Reach out for professional help',
      actions: ['Call emergency services if in danger', 'Contact crisis hotline', 'Message trusted contacts']
    },
    {
      title: 'Document Evidence',
      description: 'Safely document incidents if possible',
      actions: ['Take photos of injuries', 'Save threatening messages', 'Keep records in safe place']
    },
    {
      title: 'Seek Medical Care',
      description: 'Get medical attention for injuries',
      actions: ['Visit emergency room', 'Contact healthcare provider', 'Request medical documentation']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <NavigationBreadcrumb />
        <QuickActions />

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-red-100 rounded-full">
              <AlertTriangle className="w-12 h-12 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Crisis Support
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Immediate emergency support and crisis intervention services for HIV patients experiencing gender-based violence
          </p>
        </div>

        {/* Emergency Banner */}
        <div className="mb-8 bg-red-500 text-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <AlertTriangle className="w-8 h-8" />
              <div>
                <h2 className="text-2xl font-bold">Emergency Alert</h2>
                <p className="text-red-100">If you are in immediate danger, call emergency services now</p>
              </div>
            </div>
            <a
              href="tel:117"
              className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-50 transition-colors"
            >
              Call 117
            </a>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Emergency Contacts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  contact.type === 'emergency' ? 'bg-red-100' :
                  contact.type === 'crisis' ? 'bg-orange-100' :
                  contact.type === 'gbv' ? 'bg-purple-100' :
                  'bg-blue-100'
                }`}>
                  <Phone className={`w-8 h-8 ${
                    contact.type === 'emergency' ? 'text-red-600' :
                    contact.type === 'crisis' ? 'text-orange-600' :
                    contact.type === 'gbv' ? 'text-purple-600' :
                    'text-blue-600'
                  }`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.name}</h3>
                <a 
                  href={`tel:${contact.number}`}
                  className="text-2xl font-bold text-blue-600 hover:text-blue-800 block mb-2"
                >
                  {contact.number}
                </a>
                <p className="text-gray-600 text-sm mb-2">{contact.description}</p>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                  {contact.available}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Steps */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Crisis Response Steps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetySteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.actions.map((action, actionIndex) => (
                    <li key={actionIndex} className="flex items-start space-x-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Immediate Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/communication-tools"
              className="flex items-center space-x-4 p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors"
            >
              <MessageCircle className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-bold text-gray-900">Secure Chat</h3>
                <p className="text-gray-600 text-sm">Chat with crisis counselors</p>
              </div>
            </a>
            
            <a
              href="/safety-security"
              className="flex items-center space-x-4 p-6 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-colors"
            >
              <Shield className="w-8 h-8 text-purple-600" />
              <div>
                <h3 className="font-bold text-gray-900">Safety Planning</h3>
                <p className="text-gray-600 text-sm">Create your safety plan</p>
              </div>
            </a>
            
            <a
              href="/support-resources"
              className="flex items-center space-x-4 p-6 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors"
            >
              <Users className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="font-bold text-gray-900">Find Support</h3>
                <p className="text-gray-600 text-sm">Locate nearby services</p>
              </div>
            </a>
          </div>
        </div>

        {/* Safety Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <div className="flex items-start space-x-3">
            <Info className="w-6 h-6 text-yellow-600 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Safety Reminder</h3>
              <p className="text-yellow-700">
                Your safety is the top priority. If you feel unsafe using this platform, 
                use the Quick Exit feature (Ctrl+Shift+X) to immediately leave and go to a safe website. 
                Clear your browser history if necessary.
              </p>
            </div>
          </div>
        </div>

        <PageLinkages />
      </div>
    </div>
  );
};

export default CrisisSupportPage;
