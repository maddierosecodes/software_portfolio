import Hero from '../molecules/Hero';
import ThreeLayerTitleText from '../atoms/ThreeLayerTitleText';
import LinkCallToActionButton from '../atoms/LinkCallToActionButton';
import profilePic from '../../public/resources/images/profile.png';

export default function HomeHero() {
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
          <LinkCallToActionButton
            text="View My Projects"
            href="/projects"
            ariaLabel="View Maddie's portfolio projects"
          />
        </div>
      </Hero>
    </div>
  );
}
