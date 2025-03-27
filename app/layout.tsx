import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import StructuredData from '@/components/atoms/StructuredData';
import { personSchema, websiteSchema } from '@/config/structuredData';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://maddierosecodes.com'),
  title: {
    default: 'MaddieRoseCodes | Freelance Web & Software Developer',
    template: '%s | MaddieRoseCodes',
  },
  description:
    "Maddie's Portfolio Site - Freelance Web & Software Developer based in Chorley, Lancashire, UK, serving clients worldwide. Specialising in modern web development and interactive applications.",
  keywords: [
    'web development',
    'software development',
    'freelance developer',
    'portfolio',
    'MaddieRoseCodes',
    'Chorley',
    'Lancashire',
    'UK',
    'worldwide',
  ],
  authors: [{ name: 'Maddie' }],
  creator: 'Maddie',
  publisher: 'MaddieRoseCodes',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://maddierosecodes.com',
    siteName: 'MaddieRoseCodes',
    title: 'MaddieRoseCodes | Freelance Web & Software Developer',
    description:
      "Maddie's Portfolio Site - Freelance Web & Software Developer based in Chorley, Lancashire, UK, serving clients worldwide. Specialising in modern web development and interactive applications.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MaddieRoseCodes Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MaddieRoseCodes | Freelance Web & Software Developer',
    description:
      "Maddie's Portfolio Site - Freelance Web & Software Developer based in Chorley, Lancashire, UK, serving clients worldwide. Specialising in modern web development and interactive applications.",
    images: ['/og-image.jpg'],
    creator: '@maddierosecodes',
  },
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://maddierosecodes.com',
    languages: {
      'en-GB': [
        { url: 'https://maddierosecodes.com' },
        { url: 'https://maddierosecodes.co.uk' },
      ],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData data={personSchema} />
        <StructuredData data={websiteSchema} />
      </head>
      <body className="bg-blue-700 min-h-screen flex flex-col">
        <Header />
        <main role="main" aria-label="Main content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
