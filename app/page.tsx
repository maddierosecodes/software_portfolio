import { FC } from 'react';
import HomeHero from '@/components/organisms/HomeHero';
import { Metadata } from 'next';
import ProjectHighlight from '@/components/organisms/ProjectHighlight';
export const metadata: Metadata = {
  title: 'Home',
  description:
    'Welcome to MaddieRoseCodes - Freelance Web & Software Developer Portfolio. Explore my projects, blog posts, and interactive games.',
  openGraph: {
    title: 'Home | MaddieRoseCodes',
    description:
      'Welcome to MaddieRoseCodes - Freelance Web & Software Developer Portfolio. Explore my projects, blog posts, and interactive games.',
  },
  alternates: {
    canonical: 'https://maddierosecodes.com',
  },
};

const Home: FC = () => {
  return (
    <main role="main" aria-label="Home page content">
      <HomeHero />
      <ProjectHighlight />
    </main>
  );
};

export default Home;
