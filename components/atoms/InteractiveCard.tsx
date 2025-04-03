'use client';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
interface InteractiveCardProps {
  title: string;
  description: string;
  link: string;
  githubLink: string;
  image: StaticImageData;
  role?: string;
  'aria-label'?: string;
  video: string;
}

export default function InteractiveCard({
  title,
  description,
  link,
  githubLink,
  image,
  role = 'region',
  'aria-label': ariaLabel = 'Content box',
  video,
}: InteractiveCardProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      role={role}
      aria-label={ariaLabel}
      className={`border-4 border-blue-200 rounded-sm blue-glow-box-shadow bg-blue-900 p-3 sm:p-4 xl:p-6 cursor-pointer transition-all duration-300 ease-in-out ${
        isHovered ? 'scale-[1.02] border-blue-300' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setShowVideo(!showVideo)}
    >
      <div className="mb-4 xl:mb-6">
        {showVideo ? (
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${video}`}
              title={`${title} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-md"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="w-full max-w-[600px] mx-auto">
              <Image
                src={image}
                alt={title}
                width={600}
                height={600}
                className="rounded-md w-full h-auto"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gold-200 mb-4">{title}</h3>
              <p className="text-base text-white-200 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 pt-4 xl:pt-6 border-t border-blue-200/20 justify-center">
        <Link
          href={link}
          target="blank"
          className="text-center py-2 px-4 bg-transparent hover:bg-blue-800 text-blue-200 rounded-md transition-colors border-2 border-blue-200"
          onClick={(e) => e.stopPropagation()}
        >
          Live Project
        </Link>
        <Link
          href={githubLink}
          target="blank"
          className="text-center py-2 px-4 bg-transparent hover:bg-blue-800 text-blue-200 rounded-md transition-colors border-2 border-blue-200"
          onClick={(e) => e.stopPropagation()}
        >
          GitHub Repo
        </Link>
      </div>
    </section>
  );
}
