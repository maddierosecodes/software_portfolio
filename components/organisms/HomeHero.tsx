'use client';

import Hero from '../molecules/Hero';
import ThreeLayerTitleText from '../atoms/ThreeLayerTitleText';
import CallToActionButton from '../atoms/CallToActionButton';
import profilePic from '../../resources/profile.png';

export default function HomeHero() {
  return (
    <Hero
      imageSrc={profilePic}
      imageAlt="A photo of Maddie, the maddierosecodessite owner and creator"
      imageShape="circle"
      imagePosition="right"
      priority={true}
    >
      <div className="flex flex-col items-center xl:items-start">
        <ThreeLayerTitleText
          topText="Hello! I am"
          mainText="Maddie"
          bottomText="a Freelance Web & Software Dev"
        />
        <CallToActionButton
          text="CTA Button"
          onClick={() => {}}
          ariaLabel="CTA Button - Maddie"
        />
      </div>
    </Hero>
  );
}
