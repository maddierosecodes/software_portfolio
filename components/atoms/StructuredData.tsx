import Script from 'next/script';
import { SchemaOrgData } from '@/types/schema.types';

interface StructuredDataProps {
  data: SchemaOrgData;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
