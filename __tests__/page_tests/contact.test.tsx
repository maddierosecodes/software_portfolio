import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '../../app/contact/page';
import { usePathname, useRouter } from 'next/navigation';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

// Mock fetch for API calls
global.fetch = jest.fn();

describe('As a visitor, I can interact with the contact page', () => {
  beforeEach(() => {
    mockRouter.push('/contact');
    jest.mocked(usePathname).mockReturnValue('/contact');
    jest.mocked(useRouter).mockReturnValue({
      push: jest.fn(),
      refresh: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      prefetch: jest.fn(),
      replace: jest.fn(),
    });
    render(<Contact />);
    // Reset fetch mock before each test
    (global.fetch as jest.Mock).mockReset();
  });

  describe('Contact Form', () => {
    test('When I open the contact page, I see the contact form', () => {
      expect(screen.getByText('Get in Touch!')).toBeInTheDocument();
      expect(
        screen.getByRole('textbox', { name: /name/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('textbox', { name: /email/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('textbox', { name: /message/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: 'Submit' }),
      ).toBeInTheDocument();
    });

    test('When I submit the form with empty fields, I see validation errors', async () => {
      const submitButton = screen.getByRole('button', { name: 'Submit' });
      await userEvent.click(submitButton);

      expect(screen.getByText('Name is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Message is required')).toBeInTheDocument();
    });

    test('When I enter an invalid email, I see a validation error', async () => {
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      await userEvent.type(emailInput, 'invalid-email');

      const submitButton = screen.getByRole('button', { name: 'Submit' });
      await userEvent.click(submitButton);

      expect(
        screen.getByText('Please enter a valid email address'),
      ).toBeInTheDocument();
    });

    test('When I submit the form with valid data, the form is submitted successfully', async () => {
      // Mock successful API responses with a delay to simulate network request
      (global.fetch as jest.Mock).mockImplementation((url) => {
        if (url === '/api/contact') {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve({
                json: () => Promise.resolve({ success: true }),
              });
            }, 100);
          });
        }
        return Promise.reject(new Error('Not found'));
      });

      // Fill in the form
      await userEvent.type(
        screen.getByRole('textbox', { name: /name/i }),
        'John Doe',
      );
      await userEvent.type(
        screen.getByRole('textbox', { name: /email/i }),
        'john@example.com',
      );
      await userEvent.type(
        screen.getByRole('textbox', { name: /message/i }),
        'Hello, this is a test message',
      );

      // Submit the form
      const submitButton = screen.getByRole('button', { name: 'Submit' });
      await userEvent.click(submitButton);

      // Check that the loading state is shown - using waitFor to handle the async state change
      await waitFor(() => {
        expect(
          screen.getByRole('button', { name: 'Sending...' }),
        ).toBeInTheDocument();
      });

      // Wait for the success message to appear
      await waitFor(() => {
        expect(
          screen.getByText(
            "Thank you for your message! I'll get back to you soon.",
          ),
        ).toBeInTheDocument();
      });

      // Verify that the API was called twice (once for admin, once for client)
      expect(global.fetch).toHaveBeenCalledTimes(2);
    });

    test('When the API returns an error, I see an error message', async () => {
      // Mock API error response
      (global.fetch as jest.Mock).mockImplementation((url) => {
        if (url === '/api/contact') {
          return Promise.resolve({
            json: () =>
              Promise.resolve({
                success: false,
                error: 'Failed to send message',
              }),
          });
        }
        return Promise.reject(new Error('Not found'));
      });

      // Fill in the form
      await userEvent.type(
        screen.getByRole('textbox', { name: /name/i }),
        'John Doe',
      );
      await userEvent.type(
        screen.getByRole('textbox', { name: /email/i }),
        'john@example.com',
      );
      await userEvent.type(
        screen.getByRole('textbox', { name: /message/i }),
        'Hello, this is a test message',
      );

      // Submit the form
      const submitButton = screen.getByRole('button', { name: 'Submit' });
      await userEvent.click(submitButton);

      // Wait for the error message to appear
      await waitFor(() => {
        expect(
          screen.getByText(
            'An Unexpected Error Has Occurred. Please Try Again Later.',
          ),
        ).toBeInTheDocument();
      });
    });

    test('When I use a keyboard, I can navigate to and focus all form fields', async () => {
      const nameInput = screen.getByRole('textbox', { name: /name/i });
      const emailInput = screen.getByRole('textbox', { name: /email/i });
      const messageInput = screen.getByRole('textbox', { name: /message/i });
      const submitButton = screen.getByRole('button', { name: 'Submit' });

      // Focus each element
      nameInput.focus();
      expect(nameInput).toHaveFocus();

      emailInput.focus();
      expect(emailInput).toHaveFocus();

      messageInput.focus();
      expect(messageInput).toHaveFocus();

      submitButton.focus();
      expect(submitButton).toHaveFocus();
    });

    test('When I view the contact form, I can see and access the privacy policy link', () => {
      const privacyPolicyLink = screen.getByRole('link', {
        name: /privacy policy/i,
      });
      const privacyPolicyContainer = screen.getByRole('contentinfo');

      expect(privacyPolicyLink).toBeInTheDocument();
      expect(privacyPolicyLink).toHaveAttribute('href', '/privacy-policy');
      expect(privacyPolicyLink).toHaveAttribute(
        'aria-label',
        'View our Privacy Policy',
      );
      expect(privacyPolicyLink).toHaveAttribute('title', 'Privacy Policy');
      expect(privacyPolicyContainer).toBeInTheDocument();
    });
  });

  describe('Contact Information', () => {
    test('When I open the contact page, I see the contact information section', () => {
      expect(screen.getByText('Connect With Me')).toBeInTheDocument();
      expect(screen.getByText('Contact Information')).toBeInTheDocument();
      expect(screen.getByText('Social Media')).toBeInTheDocument();
    });

    test('When I view the contact information, I can see all contact links', () => {
      // Check for email link
      expect(screen.getByText('hello@maddierosecodes.com')).toBeInTheDocument();

      // Check for CV link
      expect(screen.getByText('View CV')).toBeInTheDocument();

      // Check for review link
      expect(screen.getByText('Leave a Review!')).toBeInTheDocument();
    });

    test('When I view the social media section, I can see all social media links', () => {
      // Check for social media links
      expect(screen.getByText('Facebook')).toBeInTheDocument();
      expect(screen.getByText('LinkedIn')).toBeInTheDocument();
      expect(screen.getByText('Etsy')).toBeInTheDocument();
      expect(screen.getByText('Instagram')).toBeInTheDocument();
      expect(screen.getByText('Upwork')).toBeInTheDocument();
      expect(screen.getByText('Fiverr')).toBeInTheDocument();
    });

    test('When I click on an external link, it opens in a new tab', () => {
      // Check that external links have the correct attributes
      const externalLinks = screen
        .getAllByRole('link')
        .filter((link) => link.getAttribute('target') === '_blank');

      // We should have several external links (social media, review link)
      expect(externalLinks.length).toBeGreaterThan(0);

      // Check that they have the correct rel attribute
      externalLinks.forEach((link) => {
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });

    test('When I use a screen reader, I can navigate the contact information section', () => {
      // Check for proper ARIA attributes
      const contactSection = screen
        .getByText('Contact Information')
        .closest('div');
      expect(contactSection).toHaveAttribute('aria-labelledby');

      const socialSection = screen.getByText('Social Media').closest('div');
      expect(socialSection).toHaveAttribute('aria-labelledby');

      // Check that the links lists have proper ARIA roles
      // Use getAllByRole instead of getByRole since there are multiple lists
      const linksLists = screen.getAllByRole('list');
      expect(linksLists.length).toBeGreaterThan(0);

      // Check that at least one list has an aria-label
      const listsWithAriaLabel = linksLists.filter((list) =>
        list.hasAttribute('aria-label'),
      );
      expect(listsWithAriaLabel.length).toBeGreaterThan(0);

      // Check that list items have proper roles
      const listItems = screen.getAllByRole('listitem');
      expect(listItems.length).toBeGreaterThan(0);
    });
  });

  describe('Accessibility and SEO', () => {
    test('The contact page has proper semantic structure', () => {
      // Check for main landmark
      expect(screen.getByRole('main')).toBeInTheDocument();

      // Check for section with proper role and aria attributes
      const mainSection = screen.getByRole('region', {
        name: 'Contact page content',
      });
      expect(mainSection).toBeInTheDocument();
      expect(mainSection).toHaveAttribute(
        'aria-roledescription',
        'Contact form and information section',
      );

      // Check for proper heading hierarchy
      const headings = screen.getAllByRole('heading');
      expect(headings.length).toBeGreaterThan(0);
    });

    test('The contact form has proper structured data for SEO', () => {
      // Check for schema.org structured data
      const form = screen.getByRole('form', { name: 'Contact form' });
      expect(form).toHaveAttribute('itemScope');
      expect(form).toHaveAttribute(
        'itemType',
        'https://schema.org/ContactForm',
      );

      // Check for itemProp attributes on form fields
      const nameInput = screen.getByRole('textbox', { name: /name/i });
      expect(nameInput).toHaveAttribute('itemProp', 'name');

      const emailInput = screen.getByRole('textbox', { name: /email/i });
      expect(emailInput).toHaveAttribute('itemProp', 'email');

      const messageInput = screen.getByRole('textbox', { name: /message/i });
      expect(messageInput).toHaveAttribute('itemProp', 'message');
    });

    test('The contact page has proper accessibility attributes for form validation', async () => {
      // Check for aria-invalid and aria-describedby on form fields
      const nameInput = screen.getByRole('textbox', { name: /name/i });
      expect(nameInput).toHaveAttribute('aria-required', 'true');

      const emailInput = screen.getByRole('textbox', { name: /email/i });
      expect(emailInput).toHaveAttribute('aria-required', 'true');

      const messageInput = screen.getByRole('textbox', { name: /message/i });
      expect(messageInput).toHaveAttribute('aria-required', 'true');

      // Submit form with invalid data to check aria-invalid
      const submitButton = screen.getByRole('button', { name: 'Submit' });
      await userEvent.click(submitButton);

      // Wait for validation to complete
      await waitFor(() => {
        // Check that aria-invalid is set to true after validation
        expect(nameInput).toHaveAttribute('aria-invalid', 'true');
        expect(emailInput).toHaveAttribute('aria-invalid', 'true');
        expect(messageInput).toHaveAttribute('aria-invalid', 'true');
      });
    });
  });
});
