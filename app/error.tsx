'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section
      className="flex flex-col justify-center items-center mx-[10%] px-10 pt-10 h-fit pb-20 custom-flex-col"
      role="region"
      aria-label="Error page content"
    >
      <h1
        className="text-9xl text-red-200 text-center w-fit mb-8"
        aria-label="Something went wrong"
      >
        Oops!
      </h1>
      <p className="body-text text-center mb-8">
        Something went wrong. Please try again later.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="bg-pink-500 p-4 rounded-md text-white-500 hover:bg-pink-200 hover:text-white-900 transition-colors duration-200"
          aria-label="Try again"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="bg-pink-500 p-4 rounded-md text-white-500 hover:bg-pink-200 hover:text-white-900 transition-colors duration-200"
          aria-label="Return to home page"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
