import SplashBannerLayout from '../layouts/SplashBannerLayout';

type SplashBannerProps = {
  children: React.ReactNode;
  role?: string;
  'aria-label'?: string;
};

export default function SplashBanner({
  children,
  role,
  'aria-label': ariaLabel,
}: SplashBannerProps) {
  return (
    <SplashBannerLayout role={role} aria-label={ariaLabel}>
      {children}
    </SplashBannerLayout>
  );
}
