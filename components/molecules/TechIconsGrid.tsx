import React from 'react';
import TechIcon from '../atoms/TechIcon';

const TechIconsGrid: React.FC = () => {
  const techIcons = [
    // Core Programming Languages (Top Priority)
    { iconPath: '/resources/tech-logos/java.svg', name: 'Java' },
    { iconPath: '/resources/tech-logos/python.svg', name: 'Python' },
    { iconPath: '/resources/tech-logos/javascript.svg', name: 'JavaScript' },
    {
      iconPath: '/resources/tech-logos/typescript-icon.svg',
      name: 'TypeScript',
    },
    // Frontend Technologies
    { iconPath: '/resources/tech-logos/html-5.svg', name: 'HTML' },
    { iconPath: '/resources/tech-logos/css-3.svg', name: 'CSS' },
    { iconPath: '/resources/tech-logos/react.svg', name: 'React' },
    { iconPath: '/resources/tech-logos/nextjs-icon.svg', name: 'Next.js' },
    {
      iconPath: '/resources/tech-logos/tailwindcss-icon.svg',
      name: 'Tailwind',
    },
    // Backend & Mobile Development
    { iconPath: '/resources/tech-logos/nodejs.svg', name: 'Node.js' },
    { iconPath: '/resources/tech-logos/flutter.svg', name: 'Flutter' },
    { iconPath: '/resources/tech-logos/aws.svg', name: 'AWS' },
  ];

  return (
    <div className="w-full grid grid-cols-3 lg:grid-cols-4 gap-1 lg:gap-4 py-3 px-2 lg:p-6 bg-peach-800/50 rounded-lg">
      {techIcons.map((tech) => (
        <TechIcon key={tech.name} {...tech} />
      ))}
    </div>
  );
};

export default TechIconsGrid;
