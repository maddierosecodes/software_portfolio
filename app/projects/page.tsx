import { FC } from 'react';
import { Metadata } from 'next';
import StructuredData from '@/components/atoms/StructuredData';
import { projectsPageSchema } from '@/config/structuredData';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my portfolio of web and software development projects. View case studies, technologies used, and live demos of my work. Based in Chorley, Lancashire, UK, serving clients worldwide.',
  openGraph: {
    title: 'Projects | MaddieRoseCodes',
    description:
      'Explore my portfolio of web and software development projects. View case studies, technologies used, and live demos of my work. Based in Chorley, Lancashire, UK, serving clients worldwide.',
  },
  alternates: {
    canonical: 'https://maddierosecodes.com/projects',
  },
};

const Projects: FC = () => {
  return (
    <>
      <StructuredData data={projectsPageSchema} />
      <section
        className="flex justify-center items-center mx-[10%] px-10 pt-10 h-fit pb-20 custom-flex-col"
        role="region"
        aria-label="Projects page content"
      >
        <h1
          className="text-9xl text-green-200 text-center w-fit"
          aria-label="Projects page coming soon"
        >
          COMING SOON
        </h1>
      </section>
    </>
  );
};

export default Projects;
