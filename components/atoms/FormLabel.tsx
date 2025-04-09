'use client';

interface FormLabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}

export default function FormLabel({
  htmlFor,
  children,
  className = '',
}: FormLabelProps) {
  return (
    <label
      className={`form-label group-hover:text-blue-300 transition-colors duration-300 ${className}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
