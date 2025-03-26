import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section
      className="flex flex-col justify-center items-center mx-[10%] px-10 pt-10 h-fit pb-20 custom-flex-col"
      role="region"
      aria-label="404 error page content"
    >
      <h1
        className="text-9xl text-red-200 text-center w-fit mb-8"
        aria-label="404 - Page Not Found"
      >
        404
      </h1>
      <p className="body-text text-center mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="bg-pink-500 p-4 rounded-md text-white-500 hover:bg-pink-200 hover:text-white-900 transition-colors duration-200"
        aria-label="Return to home page"
      >
        Return Home
      </Link>
    </section>
  );
}
