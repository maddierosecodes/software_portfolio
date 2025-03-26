import CallToActionButton from '../atoms/CallToActionButton';
import ThreeLayerTitleText from '../atoms/ThreeLayerTitleText';
import ProfileImage from '../atoms/ProfileImage';
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
    <section className="section-container custom-flex-col flex-between">
      <div className="content-width mt-10 flex flex-col items-center xl:items-start">
        <ThreeLayerTitleText
          topText={greeting}
          mainText={name}
          bottomText={subtitle}
        />
        <CallToActionButton text={ctaText} onClick={onCtaClick} />
      </div>

      <div className="content-width flex-center">
        <ProfileImage src={imageSrc} alt={imageAlt} size="large" />
      </div>
    </section>
  );
}
