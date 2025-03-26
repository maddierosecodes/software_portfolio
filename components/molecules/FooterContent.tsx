import React from 'react';
import CopyrightText from '../atoms/CopyrightText';

interface FooterContentProps {
  name: string;
}

const FooterContent: React.FC<FooterContentProps> = ({ name }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center">
        <CopyrightText name={name} />
      </div>
    </div>
  );
};

export default FooterContent;
