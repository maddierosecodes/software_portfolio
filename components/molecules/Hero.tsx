'use client';

import FramedImage from '../atoms/FramedImage';
import TwoColumnLayout from '../layouts/TwoColumnLayout';
import { StaticImageData } from 'next/image';

type HeroProps = {
  imageSrc: string | StaticImageData;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  imageShape: 'circle' | 'star' | 'square';
  children: React.ReactNode;
  priority?: boolean;
  className?: string;
};

export default function Hero(props: HeroProps) {
  const {
    imageSrc,
    imageAlt,
    imagePosition,
    imageShape,
    children,
    priority = false,
    className = '',
  } = props;

  const imageContent = (
    <div className="flex items-center justify-center h-full">
      <FramedImage
        src={imageSrc}
        alt={imageAlt}
        size="large"
        role="img"
        shape={imageShape}
        priority={priority}
      />
    </div>
  );

  return (
    <TwoColumnLayout
      role="banner"
      aria-label="Hero section"
      leftColumnClassName={imagePosition === 'right' ? 'order-1' : 'order-2'}
      rightColumnClassName={imagePosition === 'right' ? 'order-2' : 'order-1'}
      className={className}
    >
      {imagePosition === 'left' ? imageContent : children}
      {imagePosition === 'right' ? imageContent : children}
    </TwoColumnLayout>
  );
}
