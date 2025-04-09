'use client';

import { useState } from 'react';
import FormField from '../molecules/FormField';
import FormSection from '../molecules/FormSection';
import SuccessMessage from '../molecules/SuccessMessage';
import FormButton from '../atoms/FormButton';
import { AdminError, ClientError } from '@/config/errors/emailErrors';

export const ContactForm = () => {
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
    error: AdminError | ClientError | null;
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
        const contactEmailResponse = await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify({
            to: ['hello@maddierosecodes.com'],
            subject: `New Contact Form Submission from ${name}`,
            templateName: 'admin-contact',
            replacements: {
              name,
              email,
              message: message.replace(/\n/g, '<br>'),
            },
          }),
        });

        const contactEmailData = await contactEmailResponse.json();

        if (!contactEmailData.success) {
          throw new AdminError(
            contactEmailData.error || 'Failed to send message',
          );
        }

        const clientEmailResponse = await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify({
            to: [email],
            subject: 'Thank you for your message!',
            templateName: 'client-contact',
            replacements: {
              name,
            },
          }),
        });

        const clientEmailData = await clientEmailResponse.json();

        if (!clientEmailData.success) {
          throw new ClientError(
            clientEmailData.error || 'Failed to send message',
          );
        }

        setFormState((prev) => ({
          ...prev,
          isSubmitted: true,
          isSubmitting: false,
        }));
      } catch (error) {
        console.error('Error submitting form:', error);
        setFormState((prev) => ({
          ...prev,
          isSubmitting: false,
          error:
            error instanceof AdminError || error instanceof ClientError
              ? error
              : null,
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
        >
          {formState.error instanceof AdminError && (
            <div
              className="text-red-500 text-sm mb-2"
              role="alert"
              aria-live="polite"
            >
              <p>An Unexpected Error Has Occured. Please Try Again Later.</p>
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
          />

          <FormButton
            text={formState.isSubmitting ? 'Sending...' : 'Submit'}
            disabled={formState.isSubmitting}
            aria-busy={formState.isSubmitting}
          />
        </form>
      )}
    </FormSection>
  );
};
