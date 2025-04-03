import InteractiveCard from '../atoms/InteractiveCard';
import maddierosecodes from '@/public/resources/images/maddierosecodes.png';

const info = {
  title: 'Maddie Rose Codes',
  description:
    'My personal website, built with Next.js, Tailwind CSS, and TypeScript.',
  link: 'https://maddierosecodes.com',
  githubLink: 'https://github.com/maddierosecodes/software_portfolio',
  image: maddierosecodes,
  video: 'xvFZjo5PgG0',
};

export default function ProjectHighlight() {
  return (
    <section className="section-container text-center">
      <h2 className="subtitle mb-6">Latest Project</h2>
      <div className="flex justify-center items-center w-3/4 mx-auto">
        <InteractiveCard
          title={info.title}
          description={info.description}
          link={info.link}
          githubLink={info.githubLink}
          image={info.image}
          video={info.video}
        />
      </div>
    </section>
  );
}
