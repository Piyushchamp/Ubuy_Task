import React, { useState } from 'react';
import Input from './Input';
import PasswordInput from './PasswordInput';
import OTPInput from './OTPInput';
import Button from './Button';
import Checkbox from './Checkbox';
import ReCaptcha from './ReCaptcha';
import SocialLogin from './SocialLogin';

const SignupForm = ({ onSwitchToLogin, onSocialLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    otp: ''
  });
  
  const [useOTP, setUseOTP] = useState(true);
  const [agreements, setAgreements] = useState({
    mailingList: false,
    terms: false
  });
  
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleAgreementChange = (field) => {
    setAgreements(prev => ({ ...prev, [field]: !prev[field] }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    if (errors.recaptcha) {
      setErrors(prev => ({ ...prev, recaptcha: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!useOTP && !formData.password) {
      newErrors.password = 'Password is required';
    } else if (!useOTP && formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (useOTP && formData.otp.length !== 6) {
      newErrors.otp = 'Please enter 6-digit OTP';
    }
    
    if (!recaptchaToken) {
      newErrors.recaptcha = 'Please complete the reCAPTCHA';
    }
    
    if (!agreements.terms) {
      newErrors.terms = 'You must agree to the Terms & Conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {      
      console.log('Signup attempt:', {
        email: formData.email,
        method: useOTP ? 'OTP' : 'Password',
        value: useOTP ? formData.otp : formData.password,
        agreements,
        recaptchaToken: recaptchaToken ? 'completed' : 'not completed'
      });
      
      // Handle successful signup here
      alert('Registration successful!');
      
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ general: 'Registration failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetOTP = () => {
    if (!formData.email) {
      setErrors({ email: 'Please enter your email first' });
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors({ email: 'Please enter a valid email' });
      return;
    }
    
    alert(`OTP would be sent to ${formData.email}`);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Email Field */}
        <div>
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
            error={errors.email}
          />
        </div>

        {/* OTP/Password Toggle */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              type="button"
              onClick={() => setUseOTP(true)}
              className={`text-xs sm:text-sm font-medium transition-colors ${
                useOTP ? 'text-primary-600' : 'text-gray-500 hover:text-accent-600'
              }`}
            >
              OTP
            </button>
            <button
              type="button"
              onClick={() => setUseOTP(false)}
              className={`text-xs sm:text-sm font-medium transition-colors ${
                !useOTP ? 'text-primary-600' : 'text-gray-500 hover:text-accent-600'
              }`}
            >
              Password
            </button>
          </div>

          {/* OTP or Password Input */}
          {useOTP ? (
            <div className="space-y-2">
              <OTPInput
                value={formData.otp}
                onChange={(value) => handleInputChange('otp', value)}
                error={errors.otp}
              />
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleGetOTP}
                  className="text-xs sm:text-sm text-accent-600 hover:text-accent-700 font-medium"
                >
                  Get OTP?
                </button>
              </div>
            </div>
          ) : (
            <PasswordInput
              placeholder="Password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              required
              error={errors.password}
            />
          )}
        </div>

        {/* reCAPTCHA */}
        <div>
          <ReCaptcha
            onChange={handleRecaptchaChange}
            error={errors.recaptcha}
          />
        </div>

        {/* Mailing List */}
        <div>
          <Checkbox
            checked={agreements.mailingList}
            onChange={() => handleAgreementChange('mailingList')}
            label="Join Our Mailing List"
          />
        </div>

        {/* Terms & Conditions */}
        <div>
          <Checkbox
            checked={agreements.terms}
            onChange={() => handleAgreementChange('terms')}
            label={
              <span className="text-xs sm:text-sm">
                I agree to the{' '}
                <a href="/terms" className="text-accent-600 hover:text-accent-700 underline">
                  Terms & Conditions
                </a>
              </span>
            }
            required
          />
          {errors.terms && (
            <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.terms}</p>
          )}
        </div>

        {/* General Error */}
        {errors.general && (
          <div className="text-xs sm:text-sm text-red-600 text-center">{errors.general}</div>
        )}

        {/* Register Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Registering...' : 'Register'}
        </Button>

        {/* Social Login */}
        <SocialLogin onSocialLogin={onSocialLogin} />
      </form>
    </div>
  );
};

export default SignupForm;
