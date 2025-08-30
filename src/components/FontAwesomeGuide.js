import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  // Brand Icons (Free)
  faGoogle, faFacebook, faApple, faPaypal, faTwitter, faInstagram, faLinkedin, faGithub, faYoutube, faDiscord,
  
  // Solid Icons (Free)
  faEye, faEyeSlash, faUser, faEnvelope, faLock, faKey, faCheck, faTimes, faExclamationTriangle, faInfoCircle,
  faHome, faSearch, faCog, faBars, faTimes, faPlus, faMinus, faEdit, faTrash, faDownload, faUpload,
  faHeart, faStar, faShoppingCart, faCreditCard, faGift, faBell, faCalendar, faClock, faMapMarkerAlt,
  faPhone, faGlobe, faLink, faShare, faBookmark, faPrint, faSave, faUndo, faRedo, faCopy, faPaste,
  
  // Regular Icons (Free)
  faUser as farUser, faEnvelope as farEnvelope, faHeart as farHeart, faStar as farStar, faBell as farBell,
  faCalendar as farCalendar, faClock as farClock, faBookmark as farBookmark, faEye as farEye, faEyeSlash as farEyeSlash
} from '@fortawesome/free-solid-svg-icons';
import { faUser as farUser, faEnvelope as farEnvelope, faHeart as farHeart, faStar as farStar, faBell as farBell, faCalendar as farCalendar, faClock as farClock, faBookmark as farBookmark, faEye as farEye, faEyeSlash as farEyeSlash } from '@fortawesome/free-regular-svg-icons';

const FontAwesomeGuide = () => {
  const brandIcons = [
    { icon: faGoogle, name: 'Google', color: 'text-red-500' },
    { icon: faFacebook, name: 'Facebook', color: 'text-blue-600' },
    { icon: faApple, name: 'Apple', color: 'text-gray-800' },
    { icon: faPaypal, name: 'PayPal', color: 'text-blue-800' },
    { icon: faTwitter, name: 'Twitter', color: 'text-blue-400' },
    { icon: faInstagram, name: 'Instagram', color: 'text-pink-500' },
    { icon: faLinkedin, name: 'LinkedIn', color: 'text-blue-700' },
    { icon: faGithub, name: 'GitHub', color: 'text-gray-800' },
    { icon: faYoutube, name: 'YouTube', color: 'text-red-600' },
    { icon: faDiscord, name: 'Discord', color: 'text-indigo-600' }
  ];

  const solidIcons = [
    { icon: faEye, name: 'Eye (Show)', color: 'text-green-600' },
    { icon: faEyeSlash, name: 'Eye Slash (Hide)', color: 'text-red-600' },
    { icon: faUser, name: 'User', color: 'text-blue-600' },
    { icon: faEnvelope, name: 'Envelope', color: 'text-blue-600' },
    { icon: faLock, name: 'Lock', color: 'text-red-600' },
    { icon: faKey, name: 'Key', color: 'text-yellow-600' },
    { icon: faCheck, name: 'Check', color: 'text-green-600' },
    { icon: faTimes, name: 'Times', color: 'text-red-600' },
    { icon: faExclamationTriangle, name: 'Warning', color: 'text-yellow-600' },
    { icon: faInfoCircle, name: 'Info', color: 'text-blue-600' },
    { icon: faHome, name: 'Home', color: 'text-gray-600' },
    { icon: faSearch, name: 'Search', color: 'text-gray-600' },
    { icon: faCog, name: 'Settings', color: 'text-gray-600' },
    { icon: faBars, name: 'Menu', color: 'text-gray-600' },
    { icon: faPlus, name: 'Plus', color: 'text-green-600' },
    { icon: faMinus, name: 'Minus', color: 'text-red-600' },
    { icon: faEdit, name: 'Edit', color: 'text-blue-600' },
    { icon: faTrash, name: 'Trash', color: 'text-red-600' },
    { icon: faDownload, name: 'Download', color: 'text-green-600' },
    { icon: faUpload, name: 'Upload', color: 'text-blue-600' },
    { icon: faHeart, name: 'Heart', color: 'text-red-600' },
    { icon: faStar, name: 'Star', color: 'text-yellow-600' },
    { icon: faShoppingCart, name: 'Shopping Cart', color: 'text-blue-600' },
    { icon: faCreditCard, name: 'Credit Card', color: 'text-green-600' },
    { icon: faGift, name: 'Gift', color: 'text-pink-600' },
    { icon: faBell, name: 'Bell', color: 'text-yellow-600' },
    { icon: faCalendar, name: 'Calendar', color: 'text-blue-600' },
    { icon: faClock, name: 'Clock', color: 'text-gray-600' },
    { icon: faMapMarkerAlt, name: 'Location', color: 'text-red-600' },
    { icon: faPhone, name: 'Phone', color: 'text-green-600' },
    { icon: faGlobe, name: 'Globe', color: 'text-blue-600' },
    { icon: faLink, name: 'Link', color: 'text-blue-600' },
    { icon: faShare, name: 'Share', color: 'text-green-600' },
    { icon: faBookmark, name: 'Bookmark', color: 'text-blue-600' },
    { icon: faPrint, name: 'Print', color: 'text-gray-600' },
    { icon: faSave, name: 'Save', color: 'text-green-600' },
    { icon: faUndo, name: 'Undo', color: 'text-yellow-600' },
    { icon: faRedo, name: 'Redo', color: 'text-blue-600' },
    { icon: faCopy, name: 'Copy', color: 'text-blue-600' },
    { icon: faPaste, name: 'Paste', color: 'text-green-600' }
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">FontAwesome Icons Guide</h1>
      
      {/* Brand Icons */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Brand Icons (Social Media & Companies)</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {brandIcons.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <FontAwesomeIcon icon={item.icon} className={`w-8 h-8 mb-2 ${item.color}`} />
              <span className="text-sm text-gray-700 text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Solid Icons */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Solid Icons (Common UI Elements)</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {solidIcons.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <FontAwesomeIcon icon={item.icon} className={`w-8 h-8 mb-2 ${item.color}`} />
              <span className="text-sm text-gray-700 text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Examples */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Use FontAwesome Icons</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">1. Import the icon you need:</h3>
            <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';`}
            </pre>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">2. Use in your component:</h3>
            <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`<FontAwesomeIcon icon={faUser} className="w-5 h-5 text-blue-600" />
<FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-gray-500" />
<FontAwesomeIcon icon={faGoogle} className="w-6 h-6 text-red-500" />`}
            </pre>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">3. Available icon sets:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><strong>@fortawesome/free-solid-svg-icons</strong> - Solid style icons (most common)</li>
              <li><strong>@fortawesome/free-regular-svg-icons</strong> - Regular/outline style icons</li>
              <li><strong>@fortawesome/free-brands-svg-icons</strong> - Brand/company logos</li>
              <li><strong>@fortawesome/pro-solid-svg-icons</strong> - Pro version (paid)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontAwesomeGuide;
