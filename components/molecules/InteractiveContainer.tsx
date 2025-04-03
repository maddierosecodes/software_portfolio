import InteractiveCard from '../atoms/InteractiveCard';
import CardGridLayout from '../layouts/CardGridLayout';
import { InteractiveCardProps } from '@/types/component.types';

interface InteractiveContainerProps {
  infoArray: Omit<InteractiveCardProps, 'role' | 'aria-label'>[];
}

export default function InteractiveContainer({
  infoArray,
}: InteractiveContainerProps) {
  return (
    <section
      className="w-full max-w-7xl mx-auto px-4"
      aria-labelledby="projects-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="mb-8 text-center xl:text-start">
        <h2 id="projects-heading" className="subtitle">
          My Projects
        </h2>
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
            role="article"
            aria-label={`Project: ${info.title}`}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          />
        ))}
      </CardGridLayout>
    </section>
  );
}
