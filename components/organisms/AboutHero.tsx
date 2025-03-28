import Hero from '../molecules/Hero';
import TextContentBox from '../atoms/TextContentBox';
import profilePic from '../../public/resources/images/profile.png';

export default function AboutHero() {
  return (
    <Hero
      imageSrc={profilePic}
      imageAlt="A photo of Maddie, the maddierosecodessite owner and creator"
      imageShape="square"
      imagePosition="left"
      priority={true}
    >
      <TextContentBox>
        <h2 className="subtitle pb-4 pt-1 text-center w-full text-5xl gold-glow-text">
          About Me
        </h2>
        <p className="body-text pb-3 px-1 text-center w-full text-base">
          Hi! I&apos;m Maddie — a{' '}
          <span className="pink-glow-text">full-stack software developer</span>{' '}
          with a soft spot for clean code, silly side projects, making the
          internet a little more useful (and a lot more fun). I care about{' '}
          <span className="pink-glow-text">
            <strong>accessibility</strong>, <strong>autonomy</strong>, and{' '}
            <strong>building tech</strong> that{' '}
            <em>
              <strong>actually</strong>
            </em>{' '}
            helps people.
          </span>
        </p>
        <p className="body-text pb-3 px-1 text-center w-full text-base">
          After working on everything from scalable AWS back ends to
          retro-inspired front ends, I started freelancing to work on projects
          that align with my values — whether that&apos;s{' '}
          <span className="pink-glow-text">
            helping small businesses thrive, supporting neurodivergent users, or
            just making cool stuff that works well.
          </span>
        </p>
        <p className="body-text pb-3 px-1 text-center w-full text-base">
          I wear many hats (dev, designer, thinker, eternal student, mum — and
          de facto class clown), but they all come with the same goal: to build
          tech that&apos;s{' '}
          <span className="pink-glow-text">
            thoughtful, effective, and a little bit delightful.
          </span>
        </p>
      </TextContentBox>
    </Hero>
  );
}
