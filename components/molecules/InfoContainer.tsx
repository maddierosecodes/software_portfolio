import InfoCard from '../atoms/InfoCard';
import ThreeColumnLayout from '../layouts/ThreeColumnLayout';

type InfoContainerProps = {
  infoArray: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
};

const groupArrayIntoChunks = <T,>(array: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

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
