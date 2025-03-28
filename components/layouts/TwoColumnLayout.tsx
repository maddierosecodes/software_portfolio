import React from 'react';

interface TwoColumnLayoutProps {
  children: React.ReactNode;
  className?: string;
  leftColumnClassName?: string;
  rightColumnClassName?: string;
  role?: string;
  'aria-label'?: string;
  equalHeight?: boolean;
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  children,
  className = '',
  leftColumnClassName = '',
  rightColumnClassName = '',
  role,
  'aria-label': ariaLabel,
  equalHeight = false,
}) => {
  const childrenArray = React.Children.toArray(children);
  const [firstChild, secondChild] = childrenArray;

  const containerClassName = equalHeight
    ? `grid grid-cols-1 xl:grid-cols-2 gap-8 ${className}`
    : `section-container flex flex-col-reverse xl:flex-row items-center justify-between gap-8 ${className}`;

  const columnBaseClassName = equalHeight
    ? 'flex flex-col'
    : 'content-width flex items-center justify-center xl:order-none';

  return (
    <section className={containerClassName} role={role} aria-label={ariaLabel}>
      <div className={`${columnBaseClassName} ${leftColumnClassName}`}>
        {firstChild}
      </div>
      <div className={`${columnBaseClassName} ${rightColumnClassName}`}>
        {secondChild}
      </div>
    </section>
  );
};

export default TwoColumnLayout;
