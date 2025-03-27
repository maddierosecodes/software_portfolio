import React from 'react';

interface HeaderLayoutProps {
  children: [React.ReactNode, React.ReactNode, React.ReactNode];
  className?: string;
  leftSectionClassName?: string;
  centerSectionClassName?: string;
  rightSectionClassName?: string;
  role?: string;
  'aria-label'?: string;
}

const HeaderLayout: React.FC<HeaderLayoutProps> = ({
  children,
  className = '',
  leftSectionClassName = '',
  centerSectionClassName = '',
  rightSectionClassName = '',
  role,
  'aria-label': ariaLabel,
}) => {
  const [leftContent, centerContent, rightContent] = children;

  return (
    <header
      className={`custom-item-alignment flex flex-col sm:flex-row bg-blue-500 h-auto sm:h-24 min-h-24 lg:mx-[10%] mx-0 px-4 lg:pr-0 relative pt-4 sm:pt-0 gap-2 ${className}`}
      role={role}
      aria-label={ariaLabel}
    >
      {/* Left section - vertically centered */}
      <div className={`flex items-center mt-2 sm:mt-0 ${leftSectionClassName}`}>
        {leftContent}
      </div>

      {/* Center section - vertically centered */}
      <div
        className={`flex items-center flex-1 justify-center lg:pl-[10%] lg:pr-0 sm:pr-2 ${centerSectionClassName}`}
      >
        <div className="text-center">{centerContent}</div>
      </div>

      {/* Right section - aligned to bottom */}
      <div
        className={`flex items-center justify-center w-full sm:w-auto pb-4 sm:pb-0 sm:items-end ${rightSectionClassName}`}
      >
        {rightContent}
      </div>
    </header>
  );
};

export default HeaderLayout;
