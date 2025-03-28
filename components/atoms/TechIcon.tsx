'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface TechIconProps {
  iconPath: string;
  name: string;
}

const TechIcon: React.FC<TechIconProps> = ({ iconPath, name }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center p-4 transition-all duration-200 relative"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
    >
      <div
        className={`relative w-12 h-12 lg:w-16 lg:h-16 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}
      >
        <Image
          src={iconPath}
          alt={`${name} icon`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 3rem, 4rem"
          priority
        />
      </div>
      <span
        className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 text-sm bg-peach-800 text-white-200 rounded-md 
        transition-all duration-200 whitespace-nowrap
        ${isActive ? 'opacity-100 transform translate-y-full' : 'opacity-0 transform translate-y-0'}`}
      >
        {name}
      </span>
    </div>
  );
};

export default TechIcon;
