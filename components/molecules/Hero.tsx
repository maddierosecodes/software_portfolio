import CallToActionButton from '../atoms/CallToActionButton';
import ThreeLayerTitleText from '../atoms/ThreeLayerTitleText';
import ProfileImage from '../atoms/ProfileImage';
import TwoColumnLayout from '../layouts/TwoColumnLayout';
import { StaticImageData } from 'next/image';

interface HeroProps {
  greeting: string;
  name: string;
  subtitle: string;
  ctaText: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  onCtaClick?: () => void;
}

export default function Hero({
  greeting,
  name,
  subtitle,
  ctaText,
  imageSrc,
  imageAlt,
  onCtaClick,
}: HeroProps) {
  return (
    <TwoColumnLayout role="banner" aria-label="Hero section">
      <div className="flex flex-col items-center xl:items-start">
        <ThreeLayerTitleText
          topText={greeting}
          mainText={name}
          bottomText={subtitle}
        />
        <CallToActionButton
          text={ctaText}
          onClick={onCtaClick}
          ariaLabel={`${ctaText} - ${name}`}
        />
      </div>

      <div className="flex-center">
        <ProfileImage src={imageSrc} alt={imageAlt} size="large" role="img" />
      </div>
    </TwoColumnLayout>
  );
}
