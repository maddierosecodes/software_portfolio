interface TextContentBoxProps {
  children: React.ReactNode;
  className?: string;
  role?: string;
  'aria-label'?: string;
}

export default function TextContentBox({
  children,
  className = '',
  role = 'region',
  'aria-label': ariaLabel = 'Content box',
}: TextContentBoxProps) {
  return (
    <section
      role={role}
      aria-label={ariaLabel}
      className={`px-8 py-2 flex flex-col items-center p- xl:items-start border-4 border-green-200 rounded-sm green-glow-box-shadow bg-green-700 ${className}`}
    >
      {children}
    </section>
  );
}
