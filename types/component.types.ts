import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface BaseComponentProps {
  role?: string;
  'aria-label'?: string;
  className?: string;
}

export interface InteractiveCardProps extends BaseComponentProps {
  title: string;
  description: string;
  link: string;
  githubLink: string;
  image: StaticImageData;
  video: string;
}

export interface CardGridLayoutProps {
  children: ReactNode;
}
