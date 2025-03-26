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
      className={`flex flex-wrap justify-between items-center bg-blue-500 h-24 mx-[10%] px-4 ${className}`}
      role={role}
      aria-label={ariaLabel}
    >
      <div className={leftSectionClassName}>{leftContent}</div>
      <div className={`text-center mt-2 px-2 ${centerSectionClassName}`}>
        {centerContent}
      </div>
      <div className={rightSectionClassName}>{rightContent}</div>
    </header>
  );
};

export default HeaderLayout;
