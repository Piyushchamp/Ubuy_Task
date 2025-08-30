# Ubuy Authentication Forms

A modern, responsive authentication system built with React and Tailwind CSS, featuring both login and signup forms with advanced functionality.

## Features

### Login Form
- **Tab Navigation**: Switch between Login and Signup forms
- **Email Field**: Required email validation
- **Password/OTP Toggle**: Switch between password and OTP authentication
- **Password Input**: With show/hide toggle functionality
- **OTP Input**: 6-digit OTP with individual input boxes
- **Forgot Password**: Link for password recovery
- **Social Login**: Google, Facebook, Apple, and PayPal integration
- **Form Validation**: Real-time validation with error messages

### Signup Form
- **Email Field**: Required email validation
- **OTP/Password Toggle**: Switch between OTP and password registration
- **OTP Input**: With "Get OTP" functionality
- **Password Input**: With show/hide toggle
- **reCAPTCHA**: "I'm not a robot" checkbox
- **Mailing List**: Optional newsletter subscription
- **Terms & Conditions**: Required agreement checkbox
- **Social Login**: Same providers as login form
- **Form Validation**: Comprehensive validation

### Technical Features
- **Component-Based Architecture**: Reusable components
- **State Management**: React hooks for form state
- **Responsive Design**: Mobile-first approach
- **Modern UI**: Beautiful gradient backgrounds and shadows
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Error Handling**: Comprehensive error states and messages

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd ubuy-auth
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Input.js              # Reusable input component
│   ├── Button.js             # Reusable button component
│   ├── PasswordInput.js      # Password input with toggle
│   ├── OTPInput.js           # OTP input with individual boxes
│   ├── Checkbox.js           # Reusable checkbox component
│   ├── SocialLogin.js        # Social login buttons
│   ├── LoginForm.js          # Login form component
│   └── SignupForm.js         # Signup form component
├── App.js                    # Main application component
├── index.js                  # React entry point
└── index.css                 # Tailwind CSS and custom styles
```

## Usage

### Login Form
1. Enter your email address
2. Choose between Password or OTP authentication
3. If using password: Enter password and optionally click "Forgot Your Password?"
4. If using OTP: Click "Get OTP?" and enter the 6-digit code
5. Click "Login" or use social login options

### Signup Form
1. Enter your email address
2. Choose between OTP or Password registration
3. If using OTP: Click "Get OTP?" and enter the 6-digit code
4. If using password: Enter a password (minimum 6 characters)
5. Complete the reCAPTCHA
6. Optionally join the mailing list
7. Agree to Terms & Conditions
8. Click "Register" or use social login options

## Customization

### Styling
The project uses Tailwind CSS with custom configuration. You can modify:
- Colors in `tailwind.config.js`
- Custom components in `src/index.css`
- Component-specific styles in individual component files

### Functionality
- Add real API endpoints in form submission handlers
- Implement actual social login providers
- Add additional validation rules
- Customize error messages and validation logic

## Dependencies

- **React**: 18.2.0
- **React DOM**: 18.2.0
- **Tailwind CSS**: 3.3.0
- **Lucide React**: 0.263.1 (for icons)
- **React Scripts**: 5.0.1

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
