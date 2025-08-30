import React from 'react';

const Checkbox = ({ 
  checked, 
  onChange, 
  label, 
  required = false,
  className = '',
  ...props 
}) => {
  return (
    <label className={`flex items-center cursor-pointer ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        required={required}
        className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
        {...props}
      />
      <span className="ml-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">{label}</span>
    </label>
  );
};

export default Checkbox;
