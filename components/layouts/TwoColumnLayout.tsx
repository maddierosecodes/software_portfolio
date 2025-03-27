import React from 'react';

interface TwoColumnLayoutProps {
  children: React.ReactNode;
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
  const childrenArray = React.Children.toArray(children);
  const [firstChild, secondChild] = childrenArray;

  return (
    <section
      className={`section-container flex flex-col-reverse xl:flex-row items-center justify-between gap-8 ${className}`}
      role={role}
      aria-label={ariaLabel}
    >
      <div
        className={`content-width flex flex-col items-center xl:items-start justify-center ${leftColumnClassName} xl:order-none`}
      >
        {firstChild}
      </div>
      <div
        className={`content-width flex items-center justify-center ${rightColumnClassName} xl:order-none`}
      >
        {secondChild}
      </div>
    </section>
  );
};

export default TwoColumnLayout;
