import React from 'react';
import FooterContent from '../molecules/FooterContent';
import FooterLayout from '../layouts/FooterLayout';

const Footer: React.FC = () => {
  return (
    <FooterLayout role="contentinfo" aria-label="Site footer">
      <FooterContent name="Maddie Rose" />
    </FooterLayout>
  );
};

export default Footer;
