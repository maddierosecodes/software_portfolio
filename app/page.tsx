import { FC } from 'react';
import HomeHero from '@/components/organisms/HomeHero';
import { Metadata } from 'next';

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
  return <HomeHero />;
};

export default Home;
