import AboutHero from '@/components/organisms/AboutHero';
import Services from '@/components/organisms/Services';
import MyTech from '@/components/organisms/MyTech';
import { Metadata } from 'next';
import OtherSkills from '@/components/organisms/OtherSkills';

export const metadata: Metadata = {
  title: 'About Me | Maddie Rose Codes',
  description:
    'Learn more about Maddie Rose Codes and her journey in software development.',
};

export default function AboutPage() {
  return (
    <>
      <main
        id="main-content"
        className="flex min-h-screen flex-col items-center justify-between"
        role="main"
      >
        <AboutHero />
        <Services />
        <MyTech />
        <OtherSkills />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Maddie Rose',
            jobTitle: 'Full Stack Software Developer',
            description:
              'A full-stack software developer specialising in clean code, accessibility, and building tech that helps people.',
            url: 'https://maddierosecodes.com/about',
            sameAs: [
              'https://maddierosecreates.com',
              'https://maddierosewrites.com',
            ],
            knowsAbout: [
              'Full Stack Development',
              'Web Accessibility',
              'Custom Web Applications',
              'Tech Consultancy',
              'CMS Development',
              'E-Commerce Development',
            ],
          }),
        }}
      />
    </>
  );
}
