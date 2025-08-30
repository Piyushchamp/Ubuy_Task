import React, { useState } from "react";
import Input from "./Input";
import PasswordInput from "./PasswordInput";
import OTPInput from "./OTPInput";
import Button from "./Button";
import SocialLogin from "./SocialLogin";

const LoginForm = ({ onSwitchToSignup, onSocialLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    otp: "",
  });

  const [useOTP, setUseOTP] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!useOTP && !formData.password) {
      newErrors.password = "Password is required";
    }

    if (useOTP && formData.otp.length !== 6) {
      newErrors.otp = "Please enter 6-digit OTP";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      console.log("Login attempt:", {
        email: formData.email,
        method: useOTP ? "OTP" : "Password",
        value: useOTP ? formData.otp : formData.password,
      });

      // Handle successful login here
      alert("Login successful!");
    } catch (error) {
      console.error("Login error:", error);
      setErrors({ general: "Login failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    alert("Forgot password functionality would be implemented here");
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
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
            error={errors.email}
          />
        </div>

        {/* Password/OTP Toggle */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center justify-center sm:justify-start space-x-3 sm:space-x-4">
              <button
                type="button"
                onClick={() => setUseOTP(false)}
                className={`text-xs sm:text-sm font-medium transition-colors ${
                  !useOTP
                    ? "text-primary-600"
                    : "text-gray-500 hover:text-accent-600"
                }`}
              >
                Password
              </button>
              <button
                type="button"
                onClick={() => setUseOTP(true)}
                className={`text-xs sm:text-sm font-medium transition-colors ${
                  useOTP
                    ? "text-primary-600"
                    : "text-gray-500 hover:text-accent-600"
                }`}
              >
                OTP
              </button>
            </div>

            {!useOTP && (
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-xs sm:text-sm text-accent-600 hover:text-accent-700 font-medium text-center sm:text-right"
              >
                Forgot Your Password?
              </button>
            )}
          </div>

          {/* Password or OTP Input */}
          {!useOTP ? (
            <PasswordInput
              placeholder="Password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              required
              error={errors.password}
            />
          ) : (
            <div className="space-y-2">
              <OTPInput
                value={formData.otp}
                onChange={(value) => handleInputChange("otp", value)}
                error={errors.otp}
              />
              <div className="text-center">
                <button
                  type="button"
                  className="text-xs sm:text-sm text-accent-600 hover:text-accent-700 font-medium"
                >
                  Get OTP?
                </button>
              </div>
            </div>
          )}
        </div>

        {/* General Error */}
        {errors.general && (
          <div className="text-xs sm:text-sm text-red-600 text-center">
            {errors.general}
          </div>
        )}

        {/* Login Button */}
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? "Logging in..." : "Login"}
        </Button>

        {/* Social Login */}
        <SocialLogin onSocialLogin={onSocialLogin} />
      </form>
    </div>
  );
};

export default LoginForm;
