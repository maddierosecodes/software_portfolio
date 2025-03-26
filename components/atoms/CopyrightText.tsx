import React from 'react';

interface CopyrightTextProps {
  name: string;
}

const CopyrightText: React.FC<CopyrightTextProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();

  return (
    <p className="text-sm">
      &copy; {currentYear} {name}. All rights reserved.
    </p>
  );
};

export default CopyrightText;
