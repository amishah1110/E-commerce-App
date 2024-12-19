import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6 mt-8 shadow-md">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 My Website. All rights reserved.</p>
        <nav className="mt-2">
          <a
            href="#privacy"
            className="text-gray-400 hover:text-white mx-2"
          >
            Privacy Policy
          </a>
          <span>|</span>
          <a
            href="#terms"
            className="text-gray-400 hover:text-white mx-2"
          >
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
