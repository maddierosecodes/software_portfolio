import React from 'react';

interface SplashBannerLayoutProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  role?: string;
  'aria-label'?: string;
}

const SplashBannerLayout: React.FC<SplashBannerLayoutProps> = ({
  children,
  className = '',
  contentClassName = '',
  role,
  'aria-label': ariaLabel,
}) => {
  return (
    <section
      className={`w-full py-4 bg-peach-900 text-white splash-glow my-2 ${className}`}
      role={role}
      aria-label={ariaLabel}
    >
      <div className={`container mx-auto px-4 ${contentClassName}`}>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SplashBannerLayout;
