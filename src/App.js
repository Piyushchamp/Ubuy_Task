import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import useDarkMode from './components/Mode';

function App() {
  const [activeTab, setActiveTab] = useState('login');
  const [isDark, setIsDark] = useDarkMode();

  const handleSocialLogin = (provider) => {
    console.log(`Social login with ${provider}`);
    alert(`${provider} login would be implemented here`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-black flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 transition-colors duration-300 overflow-x-hidden">
      
      {/* Theme Toggle at top-left */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-2 left-2 sm:top-4 sm:left-4 p-2 rounded-lg border text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 dark:text-white shadow-md z-10 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
      >
        {isDark ? (
          <FontAwesomeIcon icon={faSun} className="w-4 h-4 text-yellow-600" />
        ) : (
          <FontAwesomeIcon icon={faMoon} className="w-4 h-4 text-gray-700" />
        )}
      </button>

      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-1 sm:px-0">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Ubuy</h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Auth Container */}
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-xl sm:rounded-2xl shadow-soft p-4 sm:p-6 md:p-8 transition-colors duration-300">
          {/* Tabs */}
          <div className="flex mb-6 sm:mb-8 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('login')}
              className={`tab-button ${activeTab === 'login' ? 'active' : 'inactive'}`}
            >
              Log In
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`tab-button ${activeTab === 'signup' ? 'active' : 'inactive'}`}
            >
              Sign Up
            </button>
          </div>

          {/* Form Content */}
          <div className="min-h-[350px] sm:min-h-[400px] md:min-h-[450px]">
            {activeTab === 'login' ? (
              <LoginForm
                onSwitchToSignup={() => setActiveTab('signup')}
                onSocialLogin={handleSocialLogin}
              />
            ) : (
              <SignupForm
                onSwitchToLogin={() => setActiveTab('login')}
                onSocialLogin={handleSocialLogin}
              />
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-4 sm:mt-6">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 px-2 leading-relaxed">
            By continuing, you agree to our{' '}
            <a href="/terms" className="text-accent-600 hover:text-accent-700 underline break-words">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-accent-600 hover:text-accent-700 underline break-words">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
