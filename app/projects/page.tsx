import { FC } from 'react';
import { Metadata } from 'next';
import StructuredData from '@/components/atoms/StructuredData';
import { projectsPageSchema } from '@/config/structuredData';
import ProjectsList from '@/components/organisms/ProjectsList';

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
      <section role="region" aria-label="Projects page content">
        <ProjectsList />
      </section>
    </>
  );
};

export default Projects;
