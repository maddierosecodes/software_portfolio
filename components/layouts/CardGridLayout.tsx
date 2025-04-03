import { ReactNode } from 'react';

interface CardGridLayoutProps {
  children: ReactNode;
}

export default function CardGridLayout({ children }: CardGridLayoutProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center px-4 lg:px-0">
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <div key={index} className="w-full max-w-2xl mx-auto">
            {child}
          </div>
        ))
      ) : (
        <div className="w-full max-w-2xl mx-auto">{children}</div>
      )}
    </div>
  );
}
