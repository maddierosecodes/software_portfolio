'use client';

import Hero from '../molecules/Hero';
import ThreeLayerTitleText from '../atoms/ThreeLayerTitleText';
import CallToActionButton from '../atoms/CallToActionButton';
import profilePic from '../../public/resources/images/profile.png';
import { useRouter } from 'next/navigation';

export default function HomeHero() {
  const router = useRouter();
  return (
    <div className="max-w-[1920px] mx-auto px-4 sm:px-8 xl:px-16">
      <Hero
        imageSrc={profilePic}
        imageAlt="A photo of Maddie, the maddierosecodessite owner and creator"
        imageShape="circle"
        imagePosition="right"
        priority={true}
        className="gap-12 xl:gap-20"
      >
        <div className="flex flex-col items-center xl:items-start">
          <ThreeLayerTitleText
            topText="Hello! I am"
            mainText="Maddie"
            bottomText="a Freelance Web & Software Dev"
          />
          <CallToActionButton
            text="View My Projects"
            onClick={() => router.push('/projects')}
            ariaLabel="View Maddie's portfolio projects"
          />
        </div>
      </Hero>
    </div>
  );
}
