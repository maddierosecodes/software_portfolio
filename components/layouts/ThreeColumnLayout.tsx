import React from 'react';

interface ThreeColumnLayoutProps {
  children: React.ReactNode;
  className?: string;
  leftColumnClassName?: string;
  rightColumnClassName?: string;
  middleColumnClassName?: string;
  role?: string;
  'aria-label'?: string;
}

const ThreeColumnLayout: React.FC<ThreeColumnLayoutProps> = ({
  children,
  className = '',
  leftColumnClassName = '',
  rightColumnClassName = '',
  middleColumnClassName = '',
  role,
  'aria-label': ariaLabel,
}) => {
  const childrenArray = React.Children.toArray(children);
  const [firstChild, secondChild, thirdChild] = childrenArray;

  return (
    <section
      className={`section-container flex flex-col-reverse lg:flex-row items-center justify-between gap-8 ${className}`}
      role={role}
      aria-label={ariaLabel}
    >
      <div
        className={`content-width flex flex-col items-center  justify-center ${leftColumnClassName} xl:order-none`}
      >
        {firstChild}
      </div>
      <div
        className={`content-width flex items-center justify-center ${rightColumnClassName} xl:order-none`}
      >
        {secondChild}
      </div>
      <div
        className={`content-width flex items-center justify-center ${middleColumnClassName} xl:order-none`}
      >
        {thirdChild}
      </div>
    </section>
  );
};

export default ThreeColumnLayout;
