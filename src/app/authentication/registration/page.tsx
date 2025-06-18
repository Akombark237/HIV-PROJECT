'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Shield, Lock, User, Mail, Key, CheckCircle, ArrowLeft, Smartphone } from 'lucide-react';

type ViewType = 'welcome' | 'register' | 'login' | 'forgotPassword' | 'twoFactor' | 'success';
type RegistrationType = 'anonymous' | 'standard';
type TwoFactorMethod = 'sms' | 'email';

interface FormData {
  registrationType: RegistrationType;
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  twoFactorMethod: TwoFactorMethod;
  verificationCode: string;
  agreedToTerms: boolean;
  agreedToPrivacy: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const AuthSystem = () => {
  const router = useRouter();
  const [currentView, setCurrentView] = useState<ViewType>('welcome');
  const [formData, setFormData] = useState<FormData>({
    registrationType: 'anonymous',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    twoFactorMethod: 'sms',
    verificationCode: '',
    agreedToTerms: false,
    agreedToPrivacy: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (formData.registrationType === 'standard') {
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    }
    
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreedToTerms) newErrors.terms = 'You must agree to the terms of service';
    if (!formData.agreedToPrivacy) newErrors.privacy = 'You must agree to the privacy policy';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (formData.registrationType === 'standard') {
        setCurrentView('twoFactor');
      } else {
        setCurrentView('success');
      }
    }, 2000);
  };

  const WelcomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">SafeConnect</h1>
          <p className="text-blue-200 text-lg">Your secure support network</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Get Started</h2>
          
          <div className="space-y-4">
            <button
              onClick={() => setCurrentView('register')}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Create New Account
            </button>
            
            <button
              onClick={() => setCurrentView('login')}
              className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-4 px-6 rounded-2xl border border-white/30 transition-all duration-300"
            >
              Sign In
            </button>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-blue-200 text-sm">
              Your privacy and safety are our top priority
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const RegistrationScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center mb-6">
          <button
            onClick={() => setCurrentView('welcome')}
            className="text-white/70 hover:text-white mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-white">Create Account</h1>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
          {/* Registration Type Selection */}
          <div className="mb-6">
            <h3 className="text-white font-medium mb-4">Choose Registration Type</h3>
            <div className="space-y-3">
              <label className="flex items-center p-4 bg-white/10 rounded-xl cursor-pointer hover:bg-white/20 transition-colors">
                <input
                  type="radio"
                  name="registrationType"
                  value="anonymous"
                  checked={formData.registrationType === 'anonymous'}
                  onChange={(e) => handleInputChange('registrationType', e.target.value)}
                  className="mr-3"
                />
                <div>
                  <div className="text-white font-medium">Anonymous Account</div>
                  <div className="text-blue-200 text-sm">Maximum privacy, no personal details required</div>
                </div>
              </label>
              
              <label className="flex items-center p-4 bg-white/10 rounded-xl cursor-pointer hover:bg-white/20 transition-colors">
                <input
                  type="radio"
                  name="registrationType"
                  value="standard"
                  checked={formData.registrationType === 'standard'}
                  onChange={(e) => handleInputChange('registrationType', e.target.value)}
                  className="mr-3"
                />
                <div>
                  <div className="text-white font-medium">Standard Account</div>
                  <div className="text-blue-200 text-sm">Enhanced features with secure contact options</div>
                </div>
              </label>
            </div>
          </div>

          <div className="space-y-4">
            {/* Username (always required) */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Username (Anonymous ID)
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  placeholder="Choose a secure username"
                  className="w-full bg-white/20 text-white placeholder-white/50 border border-white/30 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Email (only for standard accounts) */}
            {formData.registrationType === 'standard' && (
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full bg-white/20 text-white placeholder-white/50 border border-white/30 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
              </div>
            )}

            {/* Password */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  placeholder="Create a strong password"
                  className="w-full bg-white/20 text-white placeholder-white/50 border border-white/30 rounded-xl py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && <p className="text-red-300 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full bg-white/20 text-white placeholder-white/50 border border-white/30 rounded-xl py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-300 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Two-Factor Authentication (for standard accounts) */}
            {formData.registrationType === 'standard' && (
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Two-Factor Authentication Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center p-3 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition-colors">
                    <input
                      type="radio"
                      name="twoFactorMethod"
                      value="sms"
                      checked={formData.twoFactorMethod === 'sms'}
                      onChange={(e) => handleInputChange('twoFactorMethod', e.target.value)}
                      className="mr-2"
                    />
                    <Smartphone className="w-4 h-4 mr-2 text-white/70" />
                    <span className="text-white text-sm">SMS</span>
                  </label>
                  
                  <label className="flex items-center p-3 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition-colors">
                    <input
                      type="radio"
                      name="twoFactorMethod"
                      value="email"
                      checked={formData.twoFactorMethod === 'email'}
                      onChange={(e) => handleInputChange('twoFactorMethod', e.target.value)}
                      className="mr-2"
                    />
                    <Mail className="w-4 h-4 mr-2 text-white/70" />
                    <span className="text-white text-sm">Email</span>
                  </label>
                </div>
              </div>
            )}

            {/* Terms and Privacy */}
            <div className="space-y-3">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.agreedToTerms}
                  onChange={(e) => handleInputChange('agreedToTerms', e.target.checked)}
                  className="mt-1 mr-3"
                />
                <span className="text-white text-sm">
                  I agree to the <button type="button" className="text-pink-300 underline hover:text-pink-200">Terms of Service</button>
                </span>
              </label>
              {errors.terms && <p className="text-red-300 text-xs">{errors.terms}</p>}
              
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.agreedToPrivacy}
                  onChange={(e) => handleInputChange('agreedToPrivacy', e.target.checked)}
                  className="mt-1 mr-3"
                />
                <span className="text-white text-sm">
                  I agree to the <button type="button" className="text-pink-300 underline hover:text-pink-200">Privacy Policy</button>
                </span>
              </label>
              {errors.privacy && <p className="text-red-300 text-xs">{errors.privacy}</p>}
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 text-white font-medium py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:transform-none"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const TwoFactorScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <div className="text-center mb-6">
            <div className="bg-green-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Key className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Two-Factor Authentication</h2>
            <p className="text-blue-200">
              We&apos;ve sent a verification code to your {formData.twoFactorMethod === 'sms' ? 'phone' : 'email'}
            </p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Verification Code
              </label>
              <input
                type="text"
                value={formData.verificationCode}
                onChange={(e) => handleInputChange('verificationCode', e.target.value)}
                placeholder="Enter 6-digit code"
                className="w-full bg-white/20 text-white placeholder-white/50 border border-white/30 rounded-xl py-3 px-4 text-center text-2xl tracking-widest focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                maxLength={6}
              />
            </div>
            
            <button
              onClick={() => {
                // Simulate verification process
                setIsLoading(true);
                setTimeout(() => {
                  setIsLoading(false);
                  setCurrentView('success');
                }, 1500);
              }}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Verifying...' : 'Verify & Complete Setup'}
            </button>
            
            <button
              type="button"
              className="w-full text-blue-200 hover:text-white text-sm underline"
            >
              Resend Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const SuccessScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center">
          <div className="bg-green-500/20 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4">Account Created Successfully!</h2>
          <p className="text-blue-200 mb-8">
            Welcome to SafeConnect. Your secure support network is now ready.
          </p>
          
          <div className="space-y-4">
            <button
              onClick={() => {
                // Add a small delay to show success state before redirecting
                setTimeout(() => {
                  router.push('/');
                }, 1000);
              }}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              Continue to Dashboard
            </button>
            
            <div className="bg-white/10 rounded-2xl p-4">
              <h3 className="text-white font-medium mb-2">Your Security Features:</h3>
              <ul className="text-blue-200 text-sm space-y-1">
                <li>• End-to-end encrypted communications</li>
                <li>• Anonymous reporting options</li>
                <li>• 24/7 crisis support access</li>
                <li>• Multi-stakeholder response network</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard after successful login
      router.push('/');
    }, 2000);
  };

  const LoginScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center mb-6">
          <button
            onClick={() => setCurrentView('welcome')}
            className="text-white/70 hover:text-white mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-white">Sign In</h1>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Username or Email
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter your username or email"
                  className="w-full bg-white/20 text-white placeholder-white/50 border border-white/30 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="w-full bg-white/20 text-white placeholder-white/50 border border-white/30 rounded-xl py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-white text-sm">Remember me</span>
              </label>
              <button
                type="button"
                onClick={() => setCurrentView('forgotPassword')}
                className="text-pink-300 hover:text-pink-200 text-sm underline"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const ForgotPasswordScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="flex items-center mb-6">
          <button
            onClick={() => setCurrentView('login')}
            className="text-white/70 hover:text-white mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-white">Reset Password</h1>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
          <div className="text-center mb-6">
            <div className="bg-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Lock className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Forgot Your Password?</h2>
            <p className="text-blue-200 text-sm">
              Enter your email or username and we&apos;ll send you a reset link
            </p>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email or Username
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter your email or username"
                  className="w-full bg-white/20 text-white placeholder-white/50 border border-white/30 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  // Render appropriate screen based on current view
  const renderCurrentView = () => {
    switch (currentView) {
      case 'welcome':
        return <WelcomeScreen />;
      case 'register':
        return <RegistrationScreen />;
      case 'login':
        return <LoginScreen />;
      case 'forgotPassword':
        return <ForgotPasswordScreen />;
      case 'twoFactor':
        return <TwoFactorScreen />;
      case 'success':
        return <SuccessScreen />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div className="font-sans">
      {renderCurrentView()}
    </div>
  );
};

export default AuthSystem;