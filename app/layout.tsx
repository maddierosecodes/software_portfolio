import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/organisms/Header';

export const metadata: Metadata = {
  title: 'MaddieRoseCodes Portfolio',
  description: "Maddie's Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-blue-700">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
