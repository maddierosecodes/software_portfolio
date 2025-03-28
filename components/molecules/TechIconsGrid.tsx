import React from 'react';
import TechIcon from '../atoms/TechIcon';

const TechIconsGrid: React.FC = () => {
  const techIcons = [
    // Frontend Core
    { iconPath: '/resources/tech-logos/html-5.svg', name: 'HTML' },
    { iconPath: '/resources/tech-logos/css-3.svg', name: 'CSS' },
    { iconPath: '/resources/tech-logos/javascript.svg', name: 'JavaScript' },
    {
      iconPath: '/resources/tech-logos/typescript-icon.svg',
      name: 'TypeScript',
    },
    // Frontend Frameworks
    { iconPath: '/resources/tech-logos/react.svg', name: 'React' },
    { iconPath: '/resources/tech-logos/nextjs-icon.svg', name: 'Next.js' },
    {
      iconPath: '/resources/tech-logos/tailwindcss-icon.svg',
      name: 'Tailwind',
    },
    // Backend & Core Languages
    { iconPath: '/resources/tech-logos/python.svg', name: 'Python' },
    { iconPath: '/resources/tech-logos/java.svg', name: 'Java' },
    { iconPath: '/resources/tech-logos/nodejs.svg', name: 'Node.js' },
    // CMS & E-commerce
    { iconPath: '/resources/tech-logos/wordpress-icon.svg', name: 'WordPress' },
    { iconPath: '/resources/tech-logos/shopify.svg', name: 'Shopify' },
  ];

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 p-4 bg-peach-800/50 rounded-lg">
      {techIcons.map((tech) => (
        <TechIcon key={tech.name} {...tech} />
      ))}
    </div>
  );
};

export default TechIconsGrid;
