import React from 'react';

interface FooterLayoutProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  role?: string;
  'aria-label'?: string;
}

const FooterLayout: React.FC<FooterLayoutProps> = ({
  children,
  className = '',
  contentClassName = '',
  role,
  'aria-label': ariaLabel,
}) => {
  return (
    <footer
      className={`w-full py-4 bg-gray-900 text-white ${className}`}
      role={role}
      aria-label={ariaLabel}
    >
      <div className={`container mx-auto px-4 ${contentClassName}`}>
        <div className="text-center">{children}</div>
      </div>
    </footer>
  );
};

export default FooterLayout;
