import { CardGridLayoutProps } from '@/types/component.types';
import React from 'react';

export default function CardGridLayout({ children }: CardGridLayoutProps) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      role="list"
      aria-label="Project cards"
    >
      {React.Children.map(children, (child, index) => (
        <div
          role="listitem"
          aria-posinset={index + 1}
          aria-setsize={React.Children.count(children)}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
