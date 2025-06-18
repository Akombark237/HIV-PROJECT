'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Phone, MessageCircle, Heart, User, UserCheck, Lock, Headphones, Users, AlertTriangle, Home, DollarSign, Stethoscope, BookOpen } from 'lucide-react';

export default function CrisisSupportDashboard() {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const [userStatus, setUserStatus] = useState<'anonymous' | 'registered'>('anonymous');
  const [showSafetyTip, setShowSafetyTip] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const translations = {
    en: {
      welcome: "You Are Not Alone",
      subtitle: "Crisis support and mental health resources for Cameroon",
      emergencyCall: "Emergency Call",
      chatSupport: "Chat Support",
      resources: "Resources",
      anonymous: "Anonymous User",
      registered: "Registered User",
      safetyNotice: "Your Safety Matters",
      safetyText: "Your browsing is private and secure. We don't track your location or personal data.",
      hotlineNumbers: "Crisis Hotlines",
      nationalHotline: "National Crisis Line",
      mentalHealth: "Mental Health Support",
      youthLine: "Youth Support Line",
      available24: "Available 24/7",
      getHelp: "Get Immediate Help",
      talkToSomeone: "Talk to Someone Now",
      findResources: "Find Resources",
      howCanWeHelp: "How can we help you today?",
      currentTime: "Current Time in Yaoundé",
      gbvTitle: "Gender-Based Violence & HIV Support",
      gbvSubtitle: "Specialized Care for HIV Patients in Adamawa",
      gbvDescription: "People living with HIV face increased vulnerability to gender-based violence (GBV). In Adamawa State, we provide comprehensive support that addresses both HIV care and GBV prevention and response.",
      gbvChallenges: "Key Challenges:",
      gbvChallenge1: "HIV stigma increases vulnerability to violence and discrimination",
      gbvChallenge2: "Fear of disclosure prevents many from seeking help",
      gbvChallenge3: "Limited access to integrated GBV-HIV services in rural areas",
      gbvChallenge4: "Economic dependence making it difficult to leave abusive situations",
      gbvServices: "Our Integrated Services:",
      gbvService1: "Confidential counseling combining HIV and GBV support",
      gbvService2: "Safe spaces for disclosure and healing",
      gbvService3: "Legal aid and advocacy services",
      gbvService4: "Economic empowerment programs",
      gbvService5: "Medical care addressing both HIV and violence-related injuries",
      gbvService6: "Community education to reduce stigma and prevent violence"
    },
    fr: {
      welcome: "Vous N'êtes Pas Seul(e)",
      subtitle: "Soutien en cas de crise et ressources de santé mentale pour le Cameroun",
      emergencyCall: "Appel d'Urgence",
      chatSupport: "Support par Chat",
      resources: "Ressources",
      anonymous: "Utilisateur Anonyme",
      registered: "Utilisateur Enregistré",
      safetyNotice: "Votre Sécurité Compte",
      safetyText: "Votre navigation est privée et sécurisée. Nous ne suivons pas votre localisation ni vos données personnelles.",
      hotlineNumbers: "Lignes d'Écoute",
      nationalHotline: "Ligne Nationale de Crise",
      mentalHealth: "Soutien Santé Mentale",
      youthLine: "Ligne Jeunesse",
      available24: "Disponible 24h/24",
      getHelp: "Obtenir de l'Aide Immédiate",
      talkToSomeone: "Parler à Quelqu'un Maintenant",
      findResources: "Trouver des Ressources",
      howCanWeHelp: "Comment pouvons-nous vous aider aujourd'hui?",
      currentTime: "Heure Actuelle à Yaoundé",
      gbvTitle: "Violence Basée sur le Genre & Soutien VIH",
      gbvSubtitle: "Soins Spécialisés pour les Patients VIH à Adamawa",
      gbvDescription: "Les personnes vivant avec le VIH font face à une vulnérabilité accrue à la violence basée sur le genre (VBG). Dans l'État d'Adamawa, nous fournissons un soutien complet qui aborde à la fois les soins VIH et la prévention et réponse à la VBG.",
      gbvChallenges: "Défis Principaux:",
      gbvChallenge1: "La stigmatisation du VIH augmente la vulnérabilité à la violence et à la discrimination",
      gbvChallenge2: "La peur de la divulgation empêche beaucoup de chercher de l'aide",
      gbvChallenge3: "Accès limité aux services intégrés VBG-VIH dans les zones rurales",
      gbvChallenge4: "Dépendance économique rendant difficile de quitter des situations abusives",
      gbvServices: "Nos Services Intégrés:",
      gbvService1: "Conseil confidentiel combinant soutien VIH et VBG",
      gbvService2: "Espaces sûrs pour la divulgation et la guérison",
      gbvService3: "Aide juridique et services de plaidoyer",
      gbvService4: "Programmes d'autonomisation économique",
      gbvService5: "Soins médicaux traitant à la fois le VIH et les blessures liées à la violence",
      gbvService6: "Éducation communautaire pour réduire la stigmatisation et prévenir la violence"
    }
  };

  const t = translations[language];

  const hotlines = [
    { name: t.nationalHotline, number: "+237-677-000-000", icon: Phone },
    { name: t.mentalHealth, number: "+237-655-123-456", icon: Heart },
    { name: t.youthLine, number: "+237-699-987-654", icon: Headphones }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-yellow-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="p-6 flex justify-between items-center backdrop-blur-sm bg-white/10 border-b border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Heart className="text-white w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CrisisSupport CM
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            {/* Time Display */}
            <div className="hidden md:flex flex-col items-end text-sm text-gray-600">
              <span className="text-xs">{t.currentTime}</span>
              <span className="font-mono">{currentTime.toLocaleTimeString('fr-FR')}</span>
            </div>

            {/* Language Selector */}
            <div className="flex bg-white/20 backdrop-blur-sm rounded-full p-1 border border-white/30">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === 'en' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  language === 'fr' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                FR
              </button>
            </div>

            {/* User Status */}
            <button
              onClick={() => setUserStatus(userStatus === 'anonymous' ? 'registered' : 'anonymous')}
              className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30 hover:bg-white/30 transition-colors"
            >
              {userStatus === 'anonymous' ? (
                <User className="w-4 h-4 text-gray-600" />
              ) : (
                <UserCheck className="w-4 h-4 text-green-600" />
              )}
              <span className="text-sm font-medium text-gray-700">
                {userStatus === 'anonymous' ? t.anonymous : t.registered}
              </span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                {t.welcome}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                {t.subtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                  <Phone className="w-6 h-6 group-hover:animate-pulse" />
                  <span>{t.getHelp}</span>
                </button>
                <button className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                  <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                  <span>{t.talkToSomeone}</span>
                </button>
              </div>
            </div>

            {/* Crisis Hotlines - Prominent Display */}
            <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/30 shadow-2xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{t.hotlineNumbers}</h2>
                <p className="text-lg text-gray-600">{t.available24}</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {hotlines.map((hotline, index) => (
                  <div key={index} className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:bg-white/80 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300">
                      <hotline.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">{hotline.name}</h3>
                    <a 
                      href={`tel:${hotline.number}`}
                      className="block text-2xl font-bold text-center text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      {hotline.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Access Buttons */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <button className="group bg-gradient-to-br from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Phone className="w-12 h-12 mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-bold mb-2">{t.emergencyCall}</h3>
                <p className="text-red-100">Immediate phone support</p>
              </button>
              
              <button className="group bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 group-hover:animate-bounce" />
                <h3 className="text-xl font-bold mb-2">{t.chatSupport}</h3>
                <p className="text-blue-100">Anonymous chat support</p>
              </button>
              
              <button className="group bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Heart className="w-12 h-12 mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-bold mb-2">{t.resources}</h3>
                <p className="text-green-100">Mental health resources</p>
              </button>
            </div>

            {/* Safety Notice */}
            {showSafetyTip && (
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl p-6 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-2xl"></div>
                <div className="relative flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                      <Lock className="w-5 h-5 mr-2 text-green-600" />
                      {t.safetyNotice}
                    </h3>
                    <p className="text-gray-600 mb-4">{t.safetyText}</p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">🔒 Encrypted Connection</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">🛡️ No Tracking</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">🤐 Anonymous Browsing</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowSafetyTip(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}

            {/* Gender-Based Violence & HIV Section */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-3xl p-8 mb-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-2xl"></div>

              <div className="relative">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 mx-auto">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">{t.gbvTitle}</h2>
                  <p className="text-lg text-purple-600 font-medium">{t.gbvSubtitle}</p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
                    {t.gbvDescription}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Challenges */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <AlertTriangle className="w-6 h-6 mr-3 text-orange-500" />
                        {t.gbvChallenges}
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{t.gbvChallenge1}</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{t.gbvChallenge2}</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{t.gbvChallenge3}</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{t.gbvChallenge4}</span>
                        </li>
                      </ul>
                    </div>

                    {/* Services */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <Heart className="w-6 h-6 mr-3 text-green-500" />
                        {t.gbvServices}
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <MessageCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{t.gbvService1}</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Home className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{t.gbvService2}</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Shield className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{t.gbvService3}</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <DollarSign className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{t.gbvService4}</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Stethoscope className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{t.gbvService5}</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <BookOpen className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{t.gbvService6}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="text-center mt-8">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 inline-block">
                      <p className="text-purple-800 font-medium">
                        🏥 <strong>Adamawa State HIV/GBV Integration Program</strong> - Providing holistic care that addresses both health and safety needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Question */}
            <div className="text-center bg-white/30 backdrop-blur-lg rounded-3xl p-12 border border-white/30">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">{t.howCanWeHelp}</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white/60 hover:bg-white/80 text-gray-800 px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                  🗣️ Someone to talk to
                </button>
                <button className="bg-white/60 hover:bg-white/80 text-gray-800 px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                  📚 Mental health resources
                </button>
                <button className="bg-white/60 hover:bg-white/80 text-gray-800 px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                  🏥 Emergency support
                </button>
                <button className="bg-white/60 hover:bg-white/80 text-gray-800 px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                  👥 Support groups
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-500">
          <p className="text-sm">
            Available 24/7 • Confidential • Free • Cameroon
          </p>
        </footer>
      </div>
    </div>
  );
}