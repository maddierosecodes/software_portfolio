'use client';

import { useRef, useState } from 'react';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import FormField from '../molecules/FormField';
import FormSection from '../molecules/FormSection';
import SuccessMessage from '../molecules/SuccessMessage';
import FormButton from '../atoms/FormButton';
import { AdminError } from '@/config/errors/emailErrors';
import Link from 'next/link';

export const ContactForm = () => {
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const [formState, setFormState] = useState<{
    formData: {
      name: string;
      email: string;
      message: string;
    };
    validationMessages: {
      name: string;
      email: string;
      message: string;
    };
    isSubmitted: boolean;
    isSubmitting: boolean;
    error: AdminError | null;
  }>({
    formData: {
      name: '',
      email: '',
      message: '',
    },
    validationMessages: {
      name: '',
      email: '',
      message: '',
    },
    isSubmitted: false,
    isSubmitting: false,
    error: null,
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    // Name validation
    if (!formState.formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    if (!formState.formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Message validation
    if (!formState.formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setFormState((prev) => ({
      ...prev,
      validationMessages: newErrors,
    }));
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setFormState((prev) => ({
        ...prev,
        isSubmitting: true,
      }));

      try {
        const { name, email, message } = formState.formData;
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message, turnstileToken }),
        });

        const data = await response.json();

        if (!data.success) {
          throw new AdminError(data.error || 'Failed to send message');
        }

        setFormState((prev) => ({
          ...prev,
          isSubmitted: true,
          isSubmitting: false,
        }));
      } catch (error) {
        console.error('Error submitting form:', error);
        turnstileRef.current?.reset();
        setTurnstileToken(null);
        setFormState((prev) => ({
          ...prev,
          isSubmitting: false,
          error: error instanceof AdminError ? error : null,
        }));
      }
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormState((prev) => {
      const newState = {
        ...prev,
        formData: {
          ...prev.formData,
          [field]: value,
        },
        validationMessages: {
          ...prev.validationMessages,
          [field]: '',
        },
      };

      // Validate email in real-time
      if (field === 'email' && value) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newState.validationMessages.email =
            'Please enter a valid email address';
        }
      }

      return newState;
    });
  };

  return (
    <FormSection
      title="Get in Touch!"
      description="I'm always looking for new opportunities to collaborate and grow. If you have a project in mind, or just want to say hello, please fill out the form below and I'll get back to you as soon as possible."
    >
      {formState.isSubmitted ? (
        <SuccessMessage message="Thank you for your message! I'll get back to you soon." />
      ) : (
        <form
          className="flex flex-col gap-4 form-container p-4 md:p-6 w-full sm:w-4/5 lg:w-2/3 min-h-0"
          onSubmit={handleSubmit}
          aria-label="Contact form"
          noValidate
          itemScope
          itemType="https://schema.org/ContactForm"
        >
          {formState.error instanceof AdminError && (
            <div
              className="text-red-500 text-sm mb-2"
              role="alert"
              aria-live="assertive"
            >
              <p>An Unexpected Error Has Occurred. Please Try Again Later.</p>
            </div>
          )}

          <FormField
            id="name"
            label="Name"
            type="text"
            placeholder="Your name"
            value={formState.formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            errorMessage={formState.validationMessages.name}
            required
            itemProp="name"
          />

          <FormField
            id="email"
            label="Email"
            type="email"
            placeholder="Your email"
            value={formState.formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            errorMessage={formState.validationMessages.email}
            required
            itemProp="email"
          />

          <FormField
            id="message"
            label="Message"
            type="text"
            placeholder="Your message"
            value={formState.formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            errorMessage={formState.validationMessages.message}
            isTextArea={true}
            required
            itemProp="message"
          />

          <Turnstile
            ref={turnstileRef}
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            onSuccess={setTurnstileToken}
            onError={() => setTurnstileToken(null)}
            onExpire={() => setTurnstileToken(null)}
          />

          <FormButton
            text={formState.isSubmitting ? 'Sending...' : 'Submit'}
            disabled={formState.isSubmitting || !turnstileToken}
            aria-busy={formState.isSubmitting}
          />

          <p
            className="text-sm text-center mt-4 text-blue-300"
            role="contentinfo"
          >
            By submitting this form, you agree to our{' '}
            <Link
              href="/privacy-policy"
              className="text-blue-200 hover:text-blue-300 transition-colors duration-200"
              aria-label="View our Privacy Policy"
              title="Privacy Policy"
            >
              Privacy Policy
            </Link>
          </p>
        </form>
      )}
    </FormSection>
  );
};

export default ContactForm;
