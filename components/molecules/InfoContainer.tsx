import InfoCard from '../atoms/InfoCard';
import ThreeColumnLayout from '../layouts/ThreeColumnLayout';
import { groupArrayIntoChunks } from '../../utils/arrayUtils';
import { InfoContainerProps } from '@/types/schema.types';

export default function InfoContainer({ infoArray }: InfoContainerProps) {
  const groupedItems = groupArrayIntoChunks(infoArray, 3);

  return (
    <section className="section-container max-w-7xl">
      <div className="xl:pl-10 xl:pb-5 text-center xl:text-start">
        <h2 className="subtitle">My Services</h2>
        <p className="body-text">What I can Offer</p>
      </div>
      {groupedItems.map((group, groupIndex) => (
        <ThreeColumnLayout key={`group-${groupIndex}`} className="py-2">
          {group.map((info, i) => (
            <InfoCard
              key={info.title + i}
              title={info.title}
              description={info.description}
              icon={info.icon}
            />
          ))}
        </ThreeColumnLayout>
      ))}
    </section>
  );
}
