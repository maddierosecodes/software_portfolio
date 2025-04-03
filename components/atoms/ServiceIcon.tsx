import { LucideIcon } from 'lucide-react';

interface ServiceIconProps {
  Icon: LucideIcon;
}

export default function ServiceIcon({ Icon }: ServiceIconProps) {
  return (
    <div className="w-16 h-16">
      <Icon className="w-full h-full" strokeWidth={1.5} />
    </div>
  );
}
