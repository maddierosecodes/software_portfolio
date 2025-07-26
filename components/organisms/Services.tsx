import InfoContainer from '../molecules/InfoContainer';
import {
  Server,
  Globe,
  Lightbulb,
  Accessibility,
  Smartphone,
  Code2,
} from 'lucide-react';
import ServiceIcon from '../atoms/ServiceIcon';

export default function Services() {
  return (
    <InfoContainer
      infoArray={[
        {
          title: 'Full Stack Development',
          description:
            'Scalable, secure, and responsive apps built end-to-end using modern frameworks.',
          icon: <ServiceIcon Icon={Server} />,
        },
        {
          title: 'Custom Web Applications',
          description:
            'Bespoke apps crafted around your business needs and user workflows.',
          icon: <ServiceIcon Icon={Globe} />,
        },
        {
          title: 'Mobile App Development',
          description:
            'Cross-platform mobile applications built with Flutter and native performance.',
          icon: <ServiceIcon Icon={Smartphone} />,
        },
        {
          title: 'Tech Consultancy',
          description:
            'Strategic planning, technical scoping, and architecture advice tailored to you.',
          icon: <ServiceIcon Icon={Lightbulb} />,
        },
        {
          title: 'Accessibility & Standards',
          description:
            'Web experiences built with inclusivity and semantic best practices in mind.',
          icon: <ServiceIcon Icon={Accessibility} />,
        },
        {
          title: 'Code Review & Refactor',
          description:
            'Readable, performant, and scalable code – from cleanup to complete overhaul.',
          icon: <ServiceIcon Icon={Code2} />,
        },
      ]}
    />
  );
}
