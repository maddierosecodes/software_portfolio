import InfoContainer from '../molecules/InfoContainer';
import {
  Server,
  Globe,
  Lightbulb,
  Accessibility,
  ShoppingCart,
  Code2,
} from 'lucide-react';

export default function Services() {
  return (
    <InfoContainer
      infoArray={[
        {
          title: 'Full Stack Development',
          description:
            'Scalable, secure, and responsive apps built end-to-end using modern frameworks.',
          icon: <Server />,
        },
        {
          title: 'Custom Web Applications',
          description:
            'Bespoke apps crafted around your business needs and user workflows.',
          icon: <Globe />,
        },
        {
          title: 'Tech Consultancy',
          description:
            'Strategic planning, technical scoping, and architecture advice tailored to you.',
          icon: <Lightbulb />,
        },
        {
          title: 'Accessibility & Standards',
          description:
            'Web experiences built with inclusivity and semantic best practices in mind.',
          icon: <Accessibility />,
        },
        {
          title: 'CMS & E-Commerce Builds',
          description:
            'Powerful WordPress, Shopify or headless solutions that grow with your brand.',
          icon: <ShoppingCart />,
        },
        {
          title: 'Code Review & Refactor',
          description:
            'Readable, performant, and scalable code – from cleanup to complete overhaul.',
          icon: <Code2 />,
        },
      ]}
    />
  );
}
