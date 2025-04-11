'use client';

import { FC } from 'react';

const PrivacyPolicy: FC = () => {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl text-white-200">
      <nav aria-label="Back navigation" className="mb-6">
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-blue-200 hover:text-blue-300 transition-colors duration-200"
          aria-label="Go back to previous page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>
      </nav>

      <h1 className="text-3xl font-bold mb-6">
        Privacy Policy & GDPR Compliance
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          This Privacy Policy explains how Maddie Rose Codes (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;) handles your personal data in
          accordance with the General Data Protection Regulation (GDPR) and
          other applicable data protection laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Data Collection and Usage
        </h2>
        <p className="mb-4">
          We collect and process minimal personal data, primarily email
          addresses, only when necessary for project-related communications.
          This data is:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Collected directly from you through our contact form</li>
          <li>
            Used solely for communication regarding potential or ongoing
            projects
          </li>
          <li>Stored only for the duration of our professional relationship</li>
          <li>
            Immediately deleted if you decide not to proceed with a project
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Rights Under GDPR</h2>
        <p className="mb-4">Under GDPR, you have the following rights:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>The right to access your personal data</li>
          <li>The right to rectification of your personal data</li>
          <li>The right to erasure of your personal data</li>
          <li>The right to restrict processing of your personal data</li>
          <li>The right to data portability</li>
          <li>The right to object to processing of your personal data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Data Storage and Security
        </h2>
        <p className="mb-4">
          We do not use any Customer Relationship Management (CRM) systems or
          third-party data storage solutions. Your data is stored securely and
          is only accessible to authorised personnel.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-4">
          For any questions regarding your personal data or to exercise your
          GDPR rights, please contact us through our contact form.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>
      </section>

      <footer className="text-sm text-gray-600">
        <p>Last updated: {new Date().toLocaleDateString('en-GB')}</p>
      </footer>
    </main>
  );
};

export default PrivacyPolicy;
