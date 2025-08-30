import React, { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ReCaptcha = ({ onChange, error, className = '' }) => {
  const recaptchaRef = useRef(null);

  const handleChange = (value) => {
    onChange(value);
  };

  const handleExpired = () => {
    onChange(null);
  };

  const handleError = () => {
    onChange(null);
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-center transform scale-75 sm:scale-100">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // This is a test key from Google
          onChange={handleChange}
          onExpired={handleExpired}
          onError={handleError}
          theme="light"
          size="normal"
        />
      </div>
      {error && (
        <p className="mt-2 text-xs sm:text-sm text-red-600 text-center">{error}</p>
      )}
    </div>
  );
};

export default ReCaptcha;

