'use client';

import { useState, useEffect } from 'react';
import {
  Type,
  Contrast,
  Volume2,
  VolumeX,
  Keyboard,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Download,
  Upload
} from 'lucide-react';

type AccessibilityFeature = 'screen-reader' | 'high-contrast' | 'font-size' | 'keyboard-nav' | 'audio' | 'motion';

interface AccessibilitySettings {
  screenReader: boolean;
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  keyboardNavigation: boolean;
  audioDescriptions: boolean;
  reducedMotion: boolean;
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  voiceSpeed: number;
  autoPlay: boolean;
}

const AccessibilityPage = () => {
  const [activeFeature] = useState<AccessibilityFeature>('screen-reader');
  const [settings, setSettings] = useState<AccessibilitySettings>({
    screenReader: false,
    highContrast: false,
    fontSize: 'medium',
    keyboardNavigation: true,
    audioDescriptions: false,
    reducedMotion: false,
    colorBlindMode: 'none',
    voiceSpeed: 1.0,
    autoPlay: false
  });

  const applyAccessibilitySettings = () => {
    const root = document.documentElement;
    
    // Apply font size
    root.style.setProperty('--font-scale', getFontScale(settings.fontSize));
    
    // Apply high contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    
    // Apply reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
    
    // Apply color blind mode
    root.setAttribute('data-colorblind', settings.colorBlindMode);
  };

  useEffect(() => {
    // Load saved accessibility settings
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Apply settings to document
    applyAccessibilitySettings();
  }, []);

  const getFontScale = (size: string) => {
    switch (size) {
      case 'small': return '0.875';
      case 'medium': return '1';
      case 'large': return '1.25';
      case 'extra-large': return '1.5';
      default: return '1';
    }
  };

  const updateSetting = (key: keyof AccessibilitySettings, value: string | number | boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('accessibilitySettings', JSON.stringify(newSettings));
    applyAccessibilitySettings();
  };

  const resetSettings = () => {
    const defaultSettings: AccessibilitySettings = {
      screenReader: false,
      highContrast: false,
      fontSize: 'medium',
      keyboardNavigation: true,
      audioDescriptions: false,
      reducedMotion: false,
      colorBlindMode: 'none',
      voiceSpeed: 1.0,
      autoPlay: false
    };
    setSettings(defaultSettings);
    localStorage.setItem('accessibilitySettings', JSON.stringify(defaultSettings));
    applyAccessibilitySettings();
  };

  const exportSettings = () => {
    const dataStr = JSON.stringify(settings, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'accessibility-settings.json';
    link.click();
  };

  const importSettings = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedSettings = JSON.parse(e.target?.result as string);
          setSettings(importedSettings);
          localStorage.setItem('accessibilitySettings', JSON.stringify(importedSettings));
          applyAccessibilitySettings();
        } catch {
          alert('Invalid settings file');
        }
      };
      reader.readAsText(file);
    }
  };

  const FeatureCard = ({ feature, title, description, icon: Icon, children }: {
    feature: string;
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    children: React.ReactNode;
  }) => (
    <div className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 ${
      activeFeature === feature ? 'ring-2 ring-blue-500 shadow-xl' : ''
    }`}>
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-3 bg-blue-100 rounded-xl">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Accessibility Features
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive accessibility tools to ensure everyone can access HIV crisis support services
          </p>
        </div>

        {/* Quick Settings Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-lg mb-8">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <button
              onClick={() => updateSetting('highContrast', !settings.highContrast)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                settings.highContrast ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Contrast className="w-4 h-4" />
              <span>High Contrast</span>
            </button>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  const sizes = ['small', 'medium', 'large', 'extra-large'];
                  const currentIndex = sizes.indexOf(settings.fontSize);
                  const nextIndex = currentIndex > 0 ? currentIndex - 1 : 0;
                  updateSetting('fontSize', sizes[nextIndex]);
                }}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-sm font-medium min-w-[60px] text-center">
                Font: {settings.fontSize}
              </span>
              <button
                onClick={() => {
                  const sizes = ['small', 'medium', 'large', 'extra-large'];
                  const currentIndex = sizes.indexOf(settings.fontSize);
                  const nextIndex = currentIndex < sizes.length - 1 ? currentIndex + 1 : sizes.length - 1;
                  updateSetting('fontSize', sizes[nextIndex]);
                }}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={() => updateSetting('audioDescriptions', !settings.audioDescriptions)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                settings.audioDescriptions ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {settings.audioDescriptions ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span>Audio</span>
            </button>

            <button
              onClick={resetSettings}
              className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 font-medium transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Screen Reader Support */}
          <FeatureCard
            feature="screen-reader"
            title="Screen Reader Support"
            description="Enhanced compatibility with screen reading software"
            icon={Volume2}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Enable Screen Reader Mode</span>
                <button
                  onClick={() => updateSetting('screenReader', !settings.screenReader)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.screenReader ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.screenReader ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Voice Speed</label>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={settings.voiceSpeed}
                  onChange={(e) => updateSetting('voiceSpeed', parseFloat(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Slow</span>
                  <span>{settings.voiceSpeed}x</span>
                  <span>Fast</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Screen Reader Features:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Alt text for all images and icons</li>
                  <li>• ARIA labels for interactive elements</li>
                  <li>• Semantic HTML structure</li>
                  <li>• Skip navigation links</li>
                  <li>• Focus management</li>
                </ul>
              </div>
            </div>
          </FeatureCard>

          {/* High Contrast Mode */}
          <FeatureCard
            feature="high-contrast"
            title="High Contrast Mode"
            description="Enhanced visual contrast for better readability"
            icon={Contrast}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">High Contrast Mode</span>
                <button
                  onClick={() => updateSetting('highContrast', !settings.highContrast)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.highContrast ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.highContrast ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Color Blind Support</label>
                <select
                  value={settings.colorBlindMode}
                  onChange={(e) => updateSetting('colorBlindMode', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="none">None</option>
                  <option value="protanopia">Protanopia (Red-blind)</option>
                  <option value="deuteranopia">Deuteranopia (Green-blind)</option>
                  <option value="tritanopia">Tritanopia (Blue-blind)</option>
                </select>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Contrast Features:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• High contrast text and backgrounds</li>
                  <li>• Enhanced button and link visibility</li>
                  <li>• Color blind friendly palettes</li>
                  <li>• Focus indicators</li>
                  <li>• Clear visual hierarchy</li>
                </ul>
              </div>
            </div>
          </FeatureCard>

          {/* Font Size Adjustment */}
          <FeatureCard
            feature="font-size"
            title="Font Size Adjustment"
            description="Customizable text size for better readability"
            icon={Type}
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Font Size</label>
                <div className="grid grid-cols-4 gap-2">
                  {['small', 'medium', 'large', 'extra-large'].map((size) => (
                    <button
                      key={size}
                      onClick={() => updateSetting('fontSize', size)}
                      className={`p-2 rounded-lg font-medium transition-colors ${
                        settings.fontSize === size
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {size === 'extra-large' ? 'XL' : size.charAt(0).toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">Text Preview:</h4>
                <div className="space-y-2">
                  <p className="text-sm">Small text example</p>
                  <p className="text-base">Medium text example</p>
                  <p className="text-lg">Large text example</p>
                  <p className="text-xl">Extra large text example</p>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Keyboard Navigation */}
          <FeatureCard
            feature="keyboard-nav"
            title="Keyboard Navigation"
            description="Full keyboard accessibility support"
            icon={Keyboard}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">Enhanced Keyboard Navigation</span>
                <button
                  onClick={() => updateSetting('keyboardNavigation', !settings.keyboardNavigation)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.keyboardNavigation ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-900 mb-2">Keyboard Shortcuts:</h4>
                <div className="text-sm text-purple-800 space-y-1">
                  <div className="flex justify-between">
                    <span>Tab</span>
                    <span>Navigate forward</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shift + Tab</span>
                    <span>Navigate backward</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Enter/Space</span>
                    <span>Activate element</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ctrl + Shift + X</span>
                    <span>Quick exit</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Alt + H</span>
                    <span>Go to home</span>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>
        </div>

        {/* Settings Management */}
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings Management</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <button
              onClick={exportSettings}
              className="flex items-center justify-center space-x-2 p-4 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Export Settings</span>
            </button>
            
            <label className="flex items-center justify-center space-x-2 p-4 bg-green-50 text-green-700 rounded-xl hover:bg-green-100 transition-colors cursor-pointer">
              <Upload className="w-5 h-5" />
              <span>Import Settings</span>
              <input
                type="file"
                accept=".json"
                onChange={importSettings}
                className="hidden"
              />
            </label>
            
            <button
              onClick={resetSettings}
              className="flex items-center justify-center space-x-2 p-4 bg-red-50 text-red-700 rounded-xl hover:bg-red-100 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Reset All</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPage;
