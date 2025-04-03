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
      className={`px-3 flex flex-col items-center justify-center border-4 border-blue-200 rounded-sm blue-glow-box-shadow aspect-square min-h-[240px] w-full max-w-[340px] mx-auto bg-blue-900 pt-8 pb-6`}
    >
      <div className="flex-shrink-0 text-blue-200 mb-[15%] px-2">{icon}</div>
      <div className=" flex flex-col items-center text-center gap-4 mt-[-1rem]">
        <h3 className="text-2xl font-bold text-gold-200">{title}</h3>
        <p className="text-base text-white-200 leading-snug px-2">
          {description}
        </p>
      </div>
    </section>
  );
}
