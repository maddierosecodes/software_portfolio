import React from 'react';

interface TwoColumnLayoutProps {
  children: [React.ReactNode, React.ReactNode];
  className?: string;
  leftColumnClassName?: string;
  rightColumnClassName?: string;
  role?: string;
  'aria-label'?: string;
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  children,
  className = '',
  leftColumnClassName = '',
  rightColumnClassName = '',
  role,
  'aria-label': ariaLabel,
}) => {
  const [leftContent, rightContent] = children;

  return (
    <section
      className={`section-container custom-flex-col flex-between ${className}`}
      role={role}
      aria-label={ariaLabel}
    >
      <div
        className={`content-width mt-10 flex flex-col items-center xl:items-start ${leftColumnClassName}`}
      >
        {leftContent}
      </div>
      <div className={`content-width flex-center ${rightColumnClassName}`}>
        {rightContent}
      </div>
    </section>
  );
};

export default TwoColumnLayout;
