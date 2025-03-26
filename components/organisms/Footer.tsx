import React from 'react';
import FooterContent from '../molecules/FooterContent';

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full py-4 bg-gray-900 text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      <FooterContent name="Maddie Rose" />
    </footer>
  );
};

export default Footer;
