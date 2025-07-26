import { StaticImageData } from 'next/image';
import maddierosecodes from '@/public/resources/images/maddierosecodes.png';
import laurence from '@/public/resources/images/laurence.png';
import julia from '@/public/resources/images/julia.png';

export interface ProjectData {
  title: string;
  description: string;
  link: string;
  githubLink: string;
  image: StaticImageData;
  video: string;
}

export const projectsData: ProjectData[] = [
  {
    title: 'Laurence Halpin Hypnotherapy',
    description:
      'A fully responsive and accesible therapy website with contact form, built with Next.js, Tailwind CSS, and TypeScript.',
    link: 'https://www.lhhypnotherapy.co.uk/',
    githubLink:
      'https://github.com/maddierosecodes/laurence-halpin-hypnotherapy',
    image: laurence,
    video: '3PIRTUThvSU',
  },
  {
    title: 'Julia Halpin Systemic Psychotherapy',
    description:
      'A fully responsive and accesible therapy website with contact form, built with Next.js, Tailwind CSS, and TypeScript.',
    link: 'https://www.familyandcoupletherapyservices.co.uk/',
    githubLink:
      'https://github.com/maddierosecodes/julia-halpin-systemic-psychotherapy',
    image: julia,
    video: 'XWEMw0W',
  },
  {
    title: 'Maddie Rose Codes: Porftolio Site',
    description:
      'My personal website, built with Next.js, Tailwind CSS, and TypeScript. Currently a work in progress - watch this space!',
    link: 'https://maddierosecodes.com',
    githubLink: 'https://github.com/maddierosecodes/software_portfolio',
    image: maddierosecodes,
    video: 'xvFZjo5PgG0',
  },
];

// Featured project for the home page (latest project)
export const featuredProject: ProjectData = projectsData[2]; // Julia Halpin project

// Portfolio project (first project) for easier reference in tests
export const portfolioProject: ProjectData = projectsData[0]; // Maddie Rose Codes project
