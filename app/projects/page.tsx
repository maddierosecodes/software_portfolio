import { FC } from 'react';
import { Metadata } from 'next';
import StructuredData from '@/components/atoms/StructuredData';
import { projectsPageSchema } from '@/config/structuredData';
import ProjectsList from '@/components/organisms/ProjectsList';

export const metadata: Metadata = {
  title: 'Projects | MaddieRoseCodes - Web Development Portfolio',
  description:
    'Explore my portfolio of web and software development projects. View case studies, technologies used, and live demos of my work. Based in Chorley, Lancashire, UK, serving clients worldwide.',
  keywords: [
    'web development',
    'software development',
    'portfolio',
    'projects',
    'case studies',
    'Chorley',
    'Lancashire',
    'UK',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
  ],
  openGraph: {
    title: 'Projects | MaddieRoseCodes - Web Development Portfolio',
    description:
      'Explore my portfolio of web and software development projects. View case studies, technologies used, and live demos of my work. Based in Chorley, Lancashire, UK, serving clients worldwide.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'MaddieRoseCodes',
    url: 'https://maddierosecodes.com/projects',
    images: [
      {
        url: 'https://maddierosecodes.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MaddieRoseCodes Projects Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | MaddieRoseCodes - Web Development Portfolio',
    description:
      'Explore my portfolio of web and software development projects. View case studies, technologies used, and live demos of my work.',
    images: ['https://maddierosecodes.com/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://maddierosecodes.com/projects',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const Projects: FC = () => {
  return (
    <main>
      <StructuredData data={projectsPageSchema} />
      <section
        role="region"
        aria-label="Projects page content"
        className="min-h-screen"
      >
        <ProjectsList />
      </section>
    </main>
  );
};

export default Projects;
