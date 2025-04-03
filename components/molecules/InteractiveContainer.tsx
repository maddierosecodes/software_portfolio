import InteractiveCard from '../atoms/InteractiveCard';
import CardGridLayout from '../layouts/CardGridLayout';
import { InteractiveContainerProps } from '@/types/schema.types';

export default function InteractiveContainer({
  infoArray,
}: InteractiveContainerProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4">
      <div className="mb-8 text-center xl:text-start">
        <h2 className="subtitle">My Projects</h2>
        <p className="body-text">
          Take a look at what I&apos;ve been working on!
        </p>
      </div>
      <CardGridLayout>
        {infoArray.map((info, i) => (
          <InteractiveCard
            key={info.title + i}
            title={info.title}
            description={info.description}
            link={info.link}
            githubLink={info.githubLink}
            image={info.image}
            video={info.video}
          />
        ))}
      </CardGridLayout>
    </section>
  );
}
