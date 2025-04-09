'use client';

interface SuccessMessageProps {
  message: string;
  className?: string;
}

export default function SuccessMessage({
  message,
  className = '',
}: SuccessMessageProps) {
  return (
    <div
      className={`bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded w-full sm:w-4/5 lg:w-2/3 ${className}`}
      role="status"
      aria-live="polite"
    >
      <p>{message}</p>
    </div>
  );
}
