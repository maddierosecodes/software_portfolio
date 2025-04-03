export interface SchemaOrgData {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

export type FrameShape = 'circle' | 'star' | 'square' | 'oblong';

export interface InfoContainerItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface InfoContainerProps {
  infoArray: InfoContainerItem[];
}
