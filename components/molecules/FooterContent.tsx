import React from 'react';
import CopyrightText from '../atoms/CopyrightText';
import Link from 'next/link';

interface FooterContentProps {
  name: string;
}

const FooterContent: React.FC<FooterContentProps> = ({ name }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center">
        <CopyrightText name={name} />
        <div className="mt-4">
          <Link
            href="/privacy-policy"
            className="text-white hover:text-blue-200 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
