'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { InteractiveCardProps } from '@/types/component.types';

export default function InteractiveCard({
  title,
  description,
  link,
  githubLink,
  image,
  'aria-label': ariaLabel = 'Content box',
  video,
  itemProp,
  itemScope,
  itemType,
}: Omit<InteractiveCardProps, 'role'> & {
  itemProp?: string;
  itemScope?: boolean;
  itemType?: string;
}) {
  const [showVideo, setShowVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setShowVideo(!showVideo);
    }
  };

  return (
    <article
      role="article"
      aria-label={ariaLabel}
      className="border-4 border-blue-200 rounded-sm blue-glow-box-shadow bg-blue-900 p-3 sm:p-4 xl:p-6"
      itemProp={itemProp}
      itemScope={itemScope}
      itemType={itemType}
    >
      <button
        className={`w-full cursor-pointer transition-all duration-300 ease-in-out ${
          isHovered ? 'scale-[1.02]' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setShowVideo(!showVideo)}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-expanded={showVideo}
        aria-label={`Toggle video for ${title}`}
      >
        <div className="mb-4 xl:mb-6">
          {showVideo ? (
            <div
              className="aspect-video w-full"
              role="region"
              aria-label="Video content"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video}`}
                title={`${title} video demonstration`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-md"
                aria-label={`Video demonstration of ${title}`}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div
                className="w-full max-w-[600px] mx-auto"
                role="img"
                aria-label={`Screenshot of ${title} project`}
              >
                <Image
                  src={image}
                  alt={`Screenshot of ${title} project`}
                  width={600}
                  height={600}
                  className="rounded-md w-full h-auto"
                  priority
                  itemProp="image"
                />
              </div>
              <div className="text-center">
                <h3
                  className="text-2xl font-bold text-gold-200 mb-4"
                  itemProp="name"
                >
                  {title}
                </h3>
                <p
                  className="text-base text-white-200 leading-relaxed"
                  itemProp="description"
                >
                  {description}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 pt-4 xl:pt-6 border-t border-blue-200/20 justify-center">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center py-2 px-4 bg-transparent hover:bg-blue-800 text-blue-200 rounded-md transition-colors border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Visit live ${title} project`}
            itemProp="url"
          >
            Live Project
          </Link>
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center py-2 px-4 bg-transparent hover:bg-blue-800 text-blue-200 rounded-md transition-colors border-2 border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            onClick={(e) => e.stopPropagation()}
            aria-label={`View ${title} GitHub repository`}
          >
            GitHub Repo
          </Link>
        </div>
      </button>
    </article>
  );
}
