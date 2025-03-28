import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  role?: string;
  'aria-label'?: string;
}

export default function Card({
  children,
  className = '',
  role = 'region',
  'aria-label': ariaLabel,
}: CardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-4 gold-glow-box-shadow rounded-md w-full bg-blue-800 p-6 ${className}`}
      role={role}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}
