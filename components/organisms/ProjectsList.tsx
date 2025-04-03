import InteractiveContainer from '../molecules/InteractiveContainer';
import maddierosecodes from '@/public/resources/images/maddierosecodes.png';

export default function ProjectsList() {
  return (
    <InteractiveContainer
      infoArray={[
        {
          title: 'Maddie Rose Codes',
          description:
            'My personal website, built with Next.js, Tailwind CSS, and TypeScript.',
          link: 'https://maddierosecodes.com',
          githubLink: 'https://github.com/maddierosecodes/software_portfolio',
          image: maddierosecodes,
          video: 'xvFZjo5PgG0',
        },
      ]}
    />
  );
}
