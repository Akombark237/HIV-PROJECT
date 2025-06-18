'use client';

import { useState, useEffect } from 'react';
import { 
  Globe, 
  Languages, 
  MapPin, 
  Users, 
  Heart, 
  Settings, 
  Download, 
  Upload, 
  Save, 
  RefreshCw, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  Building, 
  Flag, 
  Book, 
  Volume2, 
  FileText, 
  Image as ImageIcon,
  Video,
  Headphones
} from 'lucide-react';

type Language = 'en' | 'fr' | 'ha' | 'ff' | 'kr';
type Region = 'adamawa' | 'borno' | 'yobe' | 'gombe' | 'taraba' | 'bauchi';

interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
  rtl: boolean;
  completion: number;
}

interface RegionalSettings {
  region: Region;
  timezone: string;
  currency: string;
  dateFormat: string;
  phoneFormat: string;
  emergencyNumbers: {
    police: string;
    medical: string;
    fire: string;
    crisis: string;
  };
  culturalAdaptations: {
    greetings: boolean;
    religiousConsiderations: boolean;
    genderSensitivity: boolean;
    familyStructure: boolean;
  };
}

interface LocalizationSettings {
  primaryLanguage: Language;
  secondaryLanguage?: Language;
  region: Region;
  autoDetect: boolean;
  showTranslations: boolean;
  audioLanguage: Language;
  contentAdaptation: boolean;
}

const LocalizationPage = () => {
  const [settings, setSettings] = useState<LocalizationSettings>({
    primaryLanguage: 'en',
    secondaryLanguage: 'ha',
    region: 'adamawa',
    autoDetect: true,
    showTranslations: true,
    audioLanguage: 'en',
    contentAdaptation: true
  });

  const [selectedRegion, setSelectedRegion] = useState<Region>('adamawa');

  const languages: LanguageOption[] = [
    {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      flag: '🇬🇧',
      rtl: false,
      completion: 100
    },
    {
      code: 'fr',
      name: 'French',
      nativeName: 'Français',
      flag: '🇫🇷',
      rtl: false,
      completion: 95
    },
    {
      code: 'ha',
      name: 'Hausa',
      nativeName: 'Harshen Hausa',
      flag: '🇳🇬',
      rtl: false,
      completion: 90
    },
    {
      code: 'ff',
      name: 'Fulfulde',
      nativeName: 'Fulfulde',
      flag: '🇳🇬',
      rtl: false,
      completion: 85
    },
    {
      code: 'kr',
      name: 'Kanuri',
      nativeName: 'Kanuri',
      flag: '🇳🇬',
      rtl: false,
      completion: 80
    }
  ];

  const regions = [
    {
      code: 'adamawa' as Region,
      name: 'Adamawa State',
      capital: 'Yola',
      languages: ['en', 'ha', 'ff'],
      population: '4.2M',
      timezone: 'WAT'
    },
    {
      code: 'borno' as Region,
      name: 'Borno State',
      capital: 'Maiduguri',
      languages: ['en', 'ha', 'kr'],
      population: '5.9M',
      timezone: 'WAT'
    },
    {
      code: 'yobe' as Region,
      name: 'Yobe State',
      capital: 'Damaturu',
      languages: ['en', 'ha', 'kr'],
      population: '3.3M',
      timezone: 'WAT'
    },
    {
      code: 'gombe' as Region,
      name: 'Gombe State',
      capital: 'Gombe',
      languages: ['en', 'ha', 'ff'],
      population: '3.3M',
      timezone: 'WAT'
    },
    {
      code: 'taraba' as Region,
      name: 'Taraba State',
      capital: 'Jalingo',
      languages: ['en', 'ha', 'ff'],
      population: '3.1M',
      timezone: 'WAT'
    },
    {
      code: 'bauchi' as Region,
      name: 'Bauchi State',
      capital: 'Bauchi',
      languages: ['en', 'ha', 'ff'],
      population: '6.5M',
      timezone: 'WAT'
    }
  ];

  const regionalSettings: Record<Region, RegionalSettings> = {
    adamawa: {
      region: 'adamawa',
      timezone: 'Africa/Lagos',
      currency: 'NGN',
      dateFormat: 'DD/MM/YYYY',
      phoneFormat: '+237-XX-XXXX-XXXX',
      emergencyNumbers: {
        police: '117',
        medical: '115',
        fire: '118',
        crisis: '+237-75-627-8901'
      },
      culturalAdaptations: {
        greetings: true,
        religiousConsiderations: true,
        genderSensitivity: true,
        familyStructure: true
      }
    },
    borno: {
      region: 'borno',
      timezone: 'Africa/Lagos',
      currency: 'NGN',
      dateFormat: 'DD/MM/YYYY',
      phoneFormat: '+237-XX-XXXX-XXXX',
      emergencyNumbers: {
        police: '117',
        medical: '115',
        fire: '118',
        crisis: '+237-76-123-4567'
      },
      culturalAdaptations: {
        greetings: true,
        religiousConsiderations: true,
        genderSensitivity: true,
        familyStructure: true
      }
    },
    yobe: {
      region: 'yobe',
      timezone: 'Africa/Lagos',
      currency: 'NGN',
      dateFormat: 'DD/MM/YYYY',
      phoneFormat: '+237-XX-XXXX-XXXX',
      emergencyNumbers: {
        police: '117',
        medical: '115',
        fire: '118',
        crisis: '+237-77-234-5678'
      },
      culturalAdaptations: {
        greetings: true,
        religiousConsiderations: true,
        genderSensitivity: true,
        familyStructure: true
      }
    },
    gombe: {
      region: 'gombe',
      timezone: 'Africa/Lagos',
      currency: 'NGN',
      dateFormat: 'DD/MM/YYYY',
      phoneFormat: '+237-XX-XXXX-XXXX',
      emergencyNumbers: {
        police: '117',
        medical: '115',
        fire: '118',
        crisis: '+237-78-345-6789'
      },
      culturalAdaptations: {
        greetings: true,
        religiousConsiderations: true,
        genderSensitivity: true,
        familyStructure: true
      }
    },
    taraba: {
      region: 'taraba',
      timezone: 'Africa/Lagos',
      currency: 'NGN',
      dateFormat: 'DD/MM/YYYY',
      phoneFormat: '+237-XX-XXXX-XXXX',
      emergencyNumbers: {
        police: '117',
        medical: '115',
        fire: '118',
        crisis: '+237-79-456-7890'
      },
      culturalAdaptations: {
        greetings: true,
        religiousConsiderations: true,
        genderSensitivity: true,
        familyStructure: true
      }
    },
    bauchi: {
      region: 'bauchi',
      timezone: 'Africa/Lagos',
      currency: 'NGN',
      dateFormat: 'DD/MM/YYYY',
      phoneFormat: '+237-XX-XXXX-XXXX',
      emergencyNumbers: {
        police: '117',
        medical: '115',
        fire: '118',
        crisis: '+237-77-567-8901'
      },
      culturalAdaptations: {
        greetings: true,
        religiousConsiderations: true,
        genderSensitivity: true,
        familyStructure: true
      }
    }
  };

  useEffect(() => {
    // Load saved localization settings
    const savedSettings = localStorage.getItem('localizationSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Auto-detect language if enabled
    if (settings.autoDetect) {
      detectUserLanguage();
    }
  }, []);

  const detectUserLanguage = () => {
    const browserLang = navigator.language.split('-')[0] as Language;
    const supportedLangs = languages.map(l => l.code);
    
    if (supportedLangs.includes(browserLang)) {
      updateSetting('primaryLanguage', browserLang);
    }
  };

  const updateSetting = (key: keyof LocalizationSettings, value: any) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('localizationSettings', JSON.stringify(newSettings));
  };

  const saveSettings = () => {
    localStorage.setItem('localizationSettings', JSON.stringify(settings));
    // Show success message
    alert('Settings saved successfully!');
  };

  const resetSettings = () => {
    const defaultSettings: LocalizationSettings = {
      primaryLanguage: 'en',
      secondaryLanguage: 'ha',
      region: 'adamawa',
      autoDetect: true,
      showTranslations: true,
      audioLanguage: 'en',
      contentAdaptation: true
    };
    setSettings(defaultSettings);
    localStorage.setItem('localizationSettings', JSON.stringify(defaultSettings));
  };

  const LanguageCard = ({ language }: { language: LanguageOption }) => (
    <div 
      className={`bg-white rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-300 ${
        settings.primaryLanguage === language.code ? 'ring-2 ring-blue-500 shadow-xl' : 'hover:shadow-xl'
      }`}
      onClick={() => updateSetting('primaryLanguage', language.code)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-3xl">{language.flag}</span>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{language.name}</h3>
            <p className="text-gray-600 text-sm">{language.nativeName}</p>
          </div>
        </div>
        {settings.primaryLanguage === language.code && (
          <CheckCircle className="w-6 h-6 text-blue-500" />
        )}
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Translation Progress</span>
          <span className="font-medium text-gray-900">{language.completion}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${language.completion}%` }}
          ></div>
        </div>
      </div>
    </div>
  );

  const RegionCard = ({ region }: { region: any }) => (
    <div 
      className={`bg-white rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-300 ${
        settings.region === region.code ? 'ring-2 ring-green-500 shadow-xl' : 'hover:shadow-xl'
      }`}
      onClick={() => {
        updateSetting('region', region.code);
        setSelectedRegion(region.code);
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{region.name}</h3>
          <p className="text-gray-600 text-sm">Capital: {region.capital}</p>
        </div>
        {settings.region === region.code && (
          <CheckCircle className="w-6 h-6 text-green-500" />
        )}
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Users className="w-4 h-4" />
          <span>Population: {region.population}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>Timezone: {region.timezone}</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {region.languages.map((lang: string) => {
            const language = languages.find(l => l.code === lang);
            return (
              <span key={lang} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg">
                {language?.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Localization & Cultural Adaptation
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Multi-language support and cultural adaptation for HIV crisis support services across Nigeria
          </p>
        </div>

        {/* Current Settings Overview */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Current Settings</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <Languages className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="font-medium text-gray-900">Primary Language</p>
              <p className="text-blue-600 font-bold">
                {languages.find(l => l.code === settings.primaryLanguage)?.name}
              </p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <MapPin className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="font-medium text-gray-900">Region</p>
              <p className="text-green-600 font-bold">
                {regions.find(r => r.code === settings.region)?.name}
              </p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <Volume2 className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="font-medium text-gray-900">Audio Language</p>
              <p className="text-purple-600 font-bold">
                {languages.find(l => l.code === settings.audioLanguage)?.name}
              </p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-xl">
              <Globe className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <p className="font-medium text-gray-900">Auto-Detect</p>
              <p className="text-orange-600 font-bold">
                {settings.autoDetect ? 'Enabled' : 'Disabled'}
              </p>
            </div>
          </div>
        </div>

        {/* Language Selection */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Language Selection</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((language) => (
              <LanguageCard key={language.code} language={language} />
            ))}
          </div>
        </div>

        {/* Regional Settings */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Regional Customization</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {regions.map((region) => (
              <RegionCard key={region.code} region={region} />
            ))}
          </div>

          {/* Regional Details */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {regions.find(r => r.code === selectedRegion)?.name} Settings
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Emergency Contacts</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-red-500" />
                      <span className="font-medium text-gray-900">Police</span>
                    </div>
                    <span className="text-red-600 font-bold">
                      {regionalSettings[selectedRegion].emergencyNumbers.police}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 text-blue-500" />
                      <span className="font-medium text-gray-900">Medical</span>
                    </div>
                    <span className="text-blue-600 font-bold">
                      {regionalSettings[selectedRegion].emergencyNumbers.medical}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-900">Crisis Hotline</span>
                    </div>
                    <span className="text-green-600 font-bold">
                      {regionalSettings[selectedRegion].emergencyNumbers.crisis}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Cultural Adaptations</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Religious Considerations</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Gender Sensitivity</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Family Structure</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">Local Greetings</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={saveSettings}
            className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors"
          >
            <Save className="w-5 h-5" />
            <span>Save Settings</span>
          </button>
          <button
            onClick={resetSettings}
            className="flex items-center justify-center space-x-2 bg-gray-500 text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-600 transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Reset to Default</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocalizationPage;
