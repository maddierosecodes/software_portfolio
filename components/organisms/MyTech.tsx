import SplashBanner from '../molecules/SplashBanner';
import TechIconsGrid from '../molecules/TechIconsGrid';

export default function MyTech() {
  return (
    <SplashBanner role="region" aria-label="tech stack">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-white-200 text-3xl font-bold mb-4">
          My Tech Stack
        </h1>
        <p className="text-white-200">
          I&apos;m proficient in many front and back end technologies,
          languages, frameworks, tools and services. I can provide a lot of
          different services for your specific business needs. I&apos;m a
          polyglot technologist who picks up new tech frequently and with ease.
          I believe in using the best tech for the job!
        </p>
      </div>
      <div className="w-full sm:w-2/3 md:w-1/2 flex justify-center items-center mt-8 lg:mt-0 mx-auto">
        <TechIconsGrid />
      </div>
    </SplashBanner>
  );
}
