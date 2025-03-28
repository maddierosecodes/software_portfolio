interface InfoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  role?: string;
  'aria-label'?: string;
}

export default function InfoCard({
  title,
  description,
  icon,
  role = 'region',
  'aria-label': ariaLabel = 'Content box',
}: InfoCardProps) {
  return (
    <section
      role={role}
      aria-label={ariaLabel}
      className={`px-5 py-12 flex flex-col items-center justify-center gap-4 border-4 border-blue-200 rounded-sm blue-glow-box-shadow min-h-[250px] min-w-[300px] w-full h-full bg-blue-900`}
    >
      <div className="flex-shrink-0 mb-2 text-blue-200">{icon}</div>
      <div className="flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold mb-2 text-gold-200">{title}</h3>
        <p className="text-sm text-white-200 px-4">{description}</p>
      </div>
    </section>
  );
}
