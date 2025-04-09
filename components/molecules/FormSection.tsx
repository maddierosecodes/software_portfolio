'use client';

interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export default function FormSection({
  title,
  description,
  children,
  className = '',
}: FormSectionProps) {
  return (
    <section
      className={`flex flex-col gap-4 items-center form-container-outer p-4 md:p-6 lg:p-8 max-w-[1200px] mx-auto min-h-0 ${className}`}
    >
      <div className="flex flex-col gap-3 w-full sm:w-4/5 lg:w-2/3 text-center">
        <h1 className="form-heading">{title}</h1>
        {description && <p className="form-text">{description}</p>}
      </div>
      {children}
    </section>
  );
}
