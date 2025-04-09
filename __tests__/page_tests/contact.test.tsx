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

describe('As a visitor, I can interact with the contact form', () => {
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

  test('When I open the contact page, I see the contact form', () => {
    expect(screen.getByText('Get in Touch!')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('When I submit the form with empty fields, I see validation errors', async () => {
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await userEvent.click(submitButton);

    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Message is required')).toBeInTheDocument();
  });

  test('When I enter an invalid email, I see a validation error', async () => {
    const emailInput = screen.getByLabelText('Email');
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
    await userEvent.type(screen.getByLabelText('Name'), 'John Doe');
    await userEvent.type(screen.getByLabelText('Email'), 'john@example.com');
    await userEvent.type(
      screen.getByLabelText('Message'),
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
    await userEvent.type(screen.getByLabelText('Name'), 'John Doe');
    await userEvent.type(screen.getByLabelText('Email'), 'john@example.com');
    await userEvent.type(
      screen.getByLabelText('Message'),
      'Hello, this is a test message',
    );

    // Submit the form
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await userEvent.click(submitButton);

    // Wait for the error message to appear
    await waitFor(() => {
      expect(
        screen.getByText(
          'An Unexpected Error Has Occured. Please Try Again Later.',
        ),
      ).toBeInTheDocument();
    });
  });

  test('When I use a keyboard, I can navigate to and focus all form fields', async () => {
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Message');
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
});
