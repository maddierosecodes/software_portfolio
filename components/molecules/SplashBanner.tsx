import SplashBannerLayout from '../layouts/SplashBannerLayout';

type SplashBannerProps = {
  children: React.ReactNode;
};

export default function SplashBanner({ children }: SplashBannerProps) {
  return <SplashBannerLayout> {children}</SplashBannerLayout>;
}
