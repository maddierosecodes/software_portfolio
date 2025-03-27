import AboutHero from '@/components/organisms/AboutHero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | Maddie Rose Codes',
  description:
    'Learn more about Maddie Rose Codes and her journey in software development.',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <AboutHero />
    </main>
  );
}
