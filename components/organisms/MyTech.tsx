import SplashBanner from '../molecules/SplashBanner';
import TechIconsGrid from '../molecules/TechIconsGrid';

export default function MyTech() {
  return (
    <SplashBanner>
      <div className="lg:w-1/2">
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
      <div className="lg:w-1/2 flex justify-center items-center">
        <TechIconsGrid />
      </div>
    </SplashBanner>
  );
}
