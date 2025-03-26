import Script from 'next/script';

interface SchemaOrgData {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

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
