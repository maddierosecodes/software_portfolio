import { StaticImageData } from 'next/image';
import Card from '../atoms/Card';
import FramedImage from '../atoms/FramedImage';
import { ReactNode } from 'react';

interface FreelanceCardProps {
  title: string;
  description: ReactNode;
  image: StaticImageData;
  imageAlt: string;
  link: string;
}

export default function FreelanceCard({
  title,
  description,
  image,
  imageAlt,
  link,
}: FreelanceCardProps) {
  return (
    <Card>
      <h3 className="text-2xl font-bold green-glow-text text-center">
        {title}
      </h3>
      <FramedImage src={image} alt={imageAlt} shape="oblong" />
      <p className="text-md text-white-200 px-4 text-center">{description}</p>
      <a
        href={link}
        target="_blank"
        className="text-md text-white-200 underline mt-auto"
      >
        Click here to learn more!
      </a>
    </Card>
  );
}
