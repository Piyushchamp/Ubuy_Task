import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';

const PasswordInput = ({ 
  placeholder = 'Password', 
  value, 
  onChange, 
  required = false, 
  error,
  className = '',
  ...props 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <Input
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        error={error}
        className={`pr-10 sm:pr-12 ${className}`}
        {...props}
      />
      <button
        type="button"
        className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-accent-600 focus:outline-none transition-colors duration-200"
        onClick={() => setShowPassword(!showPassword)}
      >
        <FontAwesomeIcon 
          icon={showPassword ? faEyeSlash : faEye} 
          className="w-4 h-4 sm:w-5 sm:h-5" 
        />
      </button>
    </div>
  );
};

export default PasswordInput;
