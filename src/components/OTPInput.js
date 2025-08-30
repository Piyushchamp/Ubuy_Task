import React, { useRef, useEffect } from 'react';

const OTPInput = ({ 
  value, 
  onChange, 
  length = 6, 
  error,
  className = '',
  ...props 
}) => {
  const inputRefs = useRef([]);

  const handleChange = (index, digit) => {
    if (digit.length > 1) return; // Only allow single digit
    
    const newValue = value.split('');
    newValue[index] = digit;
    const newOTP = newValue.join('');
    
    onChange(newOTP);
    
    // Move to next input if digit is entered
    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').replace(/\D/g, '');
    if (pastedData.length === length) {
      onChange(pastedData);
    }
  };

  useEffect(() => {
    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  return (
    <div className="w-full">
      <div className={`flex gap-1 justify-center ${className}`}>
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={value[index] || ''}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-center text-sm sm:text-base md:text-lg font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
              error ? 'border-red-500 focus:ring-red-500' : ''
            }`}
            {...props}
          />
        ))}
      </div>
      {error && (
        <p className="mt-2 text-xs sm:text-sm text-red-600 text-center">{error}</p>
      )}
    </div>
  );
};

export default OTPInput;
