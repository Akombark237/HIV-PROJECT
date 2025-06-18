'use client';

import { useState } from 'react';
import { Heart, Shield, Users, BookOpen, ChevronRight, Phone, Lock, Star, ArrowLeft, AlertTriangle, CheckCircle } from 'lucide-react';

interface Testimonial {
  id: number;
  title: string;
  preview: string;
  story: string;
  impact: string;
  tags: string[];
}

const GBVSupportHub = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const sections = [
    { id: 'types', title: 'Types of GBV', icon: AlertTriangle },
    { id: 'consequences', title: 'Consequences of GBV', icon: Heart },
    { id: 'rights', title: 'Rights & Legal Protections', icon: Shield },
    { id: 'testimonials', title: 'Survivor Stories', icon: Users }
  ];

  const gbvTypes = [
    {
      title: 'Intimate Partner Violence (IPV)',
      description: 'Physical, sexual, psychological, or economic harm by a current or former intimate partner',
      examples: [
        'Physical assault or threats',
        'Sexual coercion or forced sexual acts',
        'Controlling behavior and isolation',
        'Economic abuse and financial control'
      ],
      prevalence: 'Most common form among PLHIV',
      riskFactors: [
        'HIV status disclosure',
        'Blame for HIV transmission',
        'Medication adherence conflicts',
        'Stigma and discrimination'
      ]
    },
    {
      title: 'Psychological Violence',
      description: 'Emotional and mental abuse that causes psychological trauma',
      examples: [
        'Constant criticism and humiliation',
        'Threats and intimidation',
        'Isolation from family and friends',
        'Manipulation and gaslighting'
      ],
      prevalence: 'Often accompanies other forms of violence',
      riskFactors: [
        'HIV-related stigma',
        'Disclosure fears',
        'Mental health vulnerabilities',
        'Social isolation'
      ]
    }
  ];

  const consequences = [
    {
      category: 'Mental Health Issues',
      description: 'GBV significantly impacts psychological well-being',
      effects: [
        'Depression and anxiety disorders',
        'Post-traumatic stress disorder (PTSD)',
        'Suicidal thoughts and behaviors',
        'Substance abuse as coping mechanism',
        'Sleep disorders and nightmares',
        'Low self-esteem and self-worth'
      ],
      icon: '🧠',
      color: 'bg-purple-100 border-purple-300'
    },
    {
      category: 'Marital Decomposition (Divorce)',
      description: 'Relationship breakdown and family disruption',
      effects: [
        'Separation and divorce proceedings',
        'Child custody disputes',
        'Loss of financial support',
        'Social isolation and stigma',
        'Housing instability',
        'Co-parenting challenges'
      ],
      icon: '💔',
      color: 'bg-red-100 border-red-300'
    },
    {
      category: 'Increased Morbidity',
      description: 'Worsening of HIV-related health outcomes',
      effects: [
        'Poor medication adherence',
        'Increased viral load',
        'Compromised immune system',
        'Higher risk of opportunistic infections',
        'Delayed medical care seeking',
        'Increased healthcare costs'
      ],
      icon: '⚕️',
      color: 'bg-orange-100 border-orange-300'
    }
  ];

  const rights = [
    {
      category: 'Fundamental Rights',
      rights: [
        'Right to life and personal security',
        'Right to be free from discrimination',
        'Right to health and healthcare',
        'Right to confidentiality and privacy',
        'Right to make informed decisions about your body'
      ]
    },
    {
      category: 'Legal Protections',
      rights: [
        'Protection orders and restraining orders',
        'Criminal prosecution of perpetrators',
        'Access to legal representation',
        'Witness protection programs',
        'Compensation for damages'
      ]
    },
    {
      category: 'Healthcare Rights',
      rights: [
        'Non-discriminatory healthcare services',
        'Informed consent for all medical procedures',
        'Access to HIV treatment and care',
        'Mental health and counseling services',
        'Emergency medical care'
      ]
    }
  ];

  const testimonials = [
    {
      id: 1,
      title: 'Finding Strength After Disclosure',
      preview: 'When I told my partner about my HIV status, everything changed...',
      story: 'When I told my partner about my HIV status, everything changed. The verbal abuse started immediately. He blamed me for bringing shame to the family and threatened to tell everyone in our community. For months, I lived in fear, but I realized I deserved better. With support from counselors and legal aid, I was able to leave safely and rebuild my life. Today, I\'m medication-adherent, healthy, and helping other women in similar situations.',
      impact: 'Now helping 15+ women annually',
      tags: ['Disclosure', 'Psychological Abuse', 'Recovery']
    },
    {
      id: 2,
      title: 'Breaking the Cycle',
      preview: 'The violence escalated when I started taking my HIV medication...',
      story: 'The violence escalated when I started taking my HIV medication. My husband would hide my pills and prevent me from going to medical appointments. He said I was "poisoning" myself and the family. The physical abuse got worse, and I feared for my children\'s safety. Through a support group at the HIV clinic, I learned about my rights and got connected with legal services. It took time, but I eventually got a protection order and safe housing.',
      impact: 'Achieved undetectable viral load',
      tags: ['Intimate Partner Violence', 'Medication Adherence', 'Children']
    },
    {
      id: 3,
      title: 'Reclaiming My Voice',
      preview: 'The emotional abuse was constant - I was told I was worthless...',
      story: 'The emotional abuse was constant - I was told I was worthless because of my HIV status. My self-esteem was completely destroyed. I stopped going to support groups and isolated myself from friends and family. It was a healthcare provider who first noticed the signs and gently asked about my home situation. That conversation changed everything. With counseling and peer support, I learned to recognize my worth and strength.',
      impact: 'Became a certified peer counselor',
      tags: ['Psychological Violence', 'Self-Worth', 'Peer Support']
    }
  ];

  const renderHome = () => (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full text-white text-3xl">
          <Heart className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          GBV Support Hub
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A safe space for People Living with HIV to access information, support, and resources about gender-based violence
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className="group cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {section.title}
                  </h3>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
        <div className="flex items-center space-x-4 mb-4">
          <Phone className="w-8 h-8" />
          <h2 className="text-2xl font-bold">24/7 Emergency Support</h2>
        </div>
        <p className="text-lg mb-6">
          If you&apos;re in immediate danger, don&apos;t hesitate to reach out for help.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/20 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Emergency Hotline</h3>
            <p className="text-2xl font-bold">+237-800-GBV-HELP</p>
          </div>
          <div className="bg-white/20 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Text Support</h3>
            <p className="text-2xl font-bold">Text &quot;HELP&quot; to +237-50555</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTypes = () => (
    <div className="space-y-8">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => setActiveSection('home')}
          className="flex items-center space-x-2 text-purple-600 hover:text-purple-700"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Hub</span>
        </button>
      </div>

      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Types of Gender-Based Violence</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding the different forms of violence helps recognize harmful patterns and seek appropriate support
        </p>
      </div>

      <div className="space-y-8">
        {gbvTypes.map((type, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-purple-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h2>
            <p className="text-lg text-gray-700 mb-6">{type.description}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
                  Common Examples
                </h3>
                <ul className="space-y-2">
                  {type.examples.map((example, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Heart className="w-5 h-5 text-red-500 mr-2" />
                  Risk Factors for PLHIV
                </h3>
                <ul className="space-y-2">
                  {type.riskFactors.map((factor, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-purple-50 rounded-lg p-4">
              <p className="text-sm font-medium text-purple-800">
                <strong>Prevalence:</strong> {type.prevalence}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderConsequences = () => (
    <div className="space-y-8">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => setActiveSection('home')}
          className="flex items-center space-x-2 text-purple-600 hover:text-purple-700"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Hub</span>
        </button>
      </div>

      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Consequences of GBV</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding the serious impacts of gender-based violence on health, relationships, and well-being
        </p>
      </div>

      <div className="space-y-8">
        {consequences.map((consequence, index) => (
          <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${consequence.color}`}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-4xl">{consequence.icon}</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{consequence.category}</h2>
                <p className="text-lg text-gray-700">{consequence.description}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {consequence.effects.map((effect, i) => (
                <div key={i} className="flex items-start space-x-3 bg-gray-50 rounded-lg p-4">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{effect}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
        <div className="flex items-center space-x-4 mb-4">
          <CheckCircle className="w-8 h-8" />
          <h2 className="text-2xl font-bold">Recovery is Possible</h2>
        </div>
        <p className="text-lg mb-4">
          While the consequences of GBV are serious, healing and recovery are achievable with proper support, care, and resources.
        </p>
        <p className="text-lg">
          Remember: The violence is not your fault, and you deserve safety, respect, and dignity.
        </p>
      </div>
    </div>
  );

  const renderRights = () => (
    <div className="space-y-8">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => setActiveSection('home')}
          className="flex items-center space-x-2 text-purple-600 hover:text-purple-700"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Hub</span>
        </button>
      </div>

      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Your Rights & Legal Protections</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Know your rights and the legal protections available to you as a person living with HIV experiencing GBV
        </p>
      </div>

      <div className="grid gap-8">
        {rights.map((category, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-8 h-8 text-blue-500 mr-3" />
              {category.category}
            </h2>
            
            <div className="space-y-4">
              {category.rights.map((right, i) => (
                <div key={i} className="flex items-start space-x-4 bg-blue-50 rounded-lg p-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{right}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
        <div className="flex items-center space-x-4 mb-6">
          <BookOpen className="w-8 h-8" />
          <h2 className="text-2xl font-bold">Legal Support Services</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Free Legal Aid</h3>
            <p className="mb-4">Access to qualified lawyers who specialize in GBV cases and HIV-related discrimination.</p>
            <p className="text-lg font-bold">Call: 1-800-LEGAL-AID</p>
          </div>
          <div className="bg-white/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Court Support</h3>
            <p className="mb-4">Trained advocates to accompany you through legal proceedings and explain your options.</p>
            <p className="text-lg font-bold">Email: support@courtsupport.org</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTestimonials = () => (
    <div className="space-y-8">
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={() => setActiveSection('home')}
          className="flex items-center space-x-2 text-purple-600 hover:text-purple-700"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Hub</span>
        </button>
      </div>

      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Survivor Stories</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real stories of hope, healing, and empowerment from survivors who found their strength
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
          <Lock className="w-4 h-4" />
          <span>All stories are anonymous and shared with permission</span>
        </div>
      </div>

      {selectedTestimonial ? (
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <button
            onClick={() => setSelectedTestimonial(null)}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Stories</span>
          </button>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">{selectedTestimonial.title}</h2>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedTestimonial.tags.map((tag, i) => (
                <span key={i} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">{selectedTestimonial.story}</p>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <div className="flex items-center space-x-3">
                <Star className="w-6 h-6 text-green-500" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800">Impact Today</h3>
                  <p className="text-green-700">{selectedTestimonial.impact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              onClick={() => setSelectedTestimonial(testimonial)}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-purple-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {testimonial.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 line-clamp-2">
                    {testimonial.preview}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {testimonial.tags.map((tag, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2 text-green-600">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-medium">{testimonial.impact}</span>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all ml-4" />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-8 text-white">
        <div className="text-center space-y-4">
          <Users className="w-12 h-12 mx-auto" />
          <h2 className="text-2xl font-bold">Share Your Story</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Your experience could inspire and help others on their journey to healing. Share your story anonymously to give hope to other survivors.
          </p>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Share Anonymously
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {activeSection === 'home' && renderHome()}
        {activeSection === 'types' && renderTypes()}
        {activeSection === 'consequences' && renderConsequences()}
        {activeSection === 'rights' && renderRights()}
        {activeSection === 'testimonials' && renderTestimonials()}
      </div>
    </div>
  );
};

export default GBVSupportHub;