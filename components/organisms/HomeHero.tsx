import Hero from '../molecules/Hero';
import profilePic from '../../resources/profile.png';

export default function HomeHero() {
  return (
    <Hero
      greeting="Hello! I am"
      name="Maddie"
      subtitle="a Freelance Web & Software Dev"
      ctaText="CTA Button"
      imageSrc={profilePic}
      imageAlt="A photo of Maddie, the maddierosecodessite owner and creator"
    />
  );
}
