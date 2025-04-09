'use client';

interface FormLabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}

export default function FormLabel({
  htmlFor,
  children,
  className = '',
  required = false,
}: FormLabelProps) {
  return (
    <label
      className={`form-label group-hover:text-blue-300 transition-colors duration-300 ${className}`}
      htmlFor={htmlFor}
    >
      {children}
      {required && (
        <span className="text-red-500 ml-1" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}
