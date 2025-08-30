import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faApple, faPaypal } from '@fortawesome/free-brands-svg-icons';
import Button from './Button';

const SocialLogin = ({ onSocialLogin }) => {
  const socialProviders = [
    {
      name: 'Google',
      icon: <FontAwesomeIcon icon={faGoogle} className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: 'hover:bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      name: 'Facebook',
      icon: <FontAwesomeIcon icon={faFacebook} className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: 'hover:bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      name: 'Apple',
      icon: <FontAwesomeIcon icon={faApple} className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: 'hover:bg-gray-50',
      borderColor: 'border-gray-200'
    },
    {
      name: 'PayPal',
      icon: <FontAwesomeIcon icon={faPaypal} className="w-4 h-4 sm:w-5 sm:h-5" />,
      color: 'hover:bg-blue-50',
      borderColor: 'border-blue-200'
    }
  ];

  return (
    <div className="space-y-3">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-xs sm:text-sm">
          <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or continue with</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {socialProviders.map((provider) => (
          <Button
            key={provider.name}
            variant="social"
            onClick={() => onSocialLogin(provider.name)}
            className={`${provider.color} ${provider.borderColor} text-xs sm:text-sm py-2 sm:py-3 min-w-0`}
          >
            <span className="mr-1 sm:mr-2 flex-shrink-0">{provider.icon}</span>
            <span className="truncate">{provider.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SocialLogin;
