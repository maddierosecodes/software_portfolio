import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../../app/page';
import { usePathname, useRouter } from 'next/navigation';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

describe('As a visitor, I am greeted by a hero section, with information about the author', () => {
  beforeEach(() => {
    mockRouter.push('/');
    jest.mocked(usePathname).mockReturnValue('/');
    jest.mocked(useRouter).mockReturnValue({
      push: jest.fn(),
      refresh: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      prefetch: jest.fn(),
      replace: jest.fn(),
    });
    render(<Home />);
  });
  test('When I open the website, I see a photo of the author', () => {
    expect(
      screen.getByAltText(/photo of Maddie.*site owner and creator/i),
    ).toBeInTheDocument();
  });
  test('When I open the website, I see the authors details headings', () => {
    expect(screen.getByText('Hello! I am')).toBeInTheDocument();
    expect(screen.getByText('Maddie')).toBeInTheDocument();
    expect(
      screen.getByText('a Freelance Web & Software Dev'),
    ).toBeInTheDocument();
  });
  test('When I select the CTA button, I am navigated to the projects page', async () => {
    const router = useRouter();
    const ctaButton = screen.getByRole('button', {
      name: "View Maddie's portfolio projects",
    });
    expect(ctaButton).toBeInTheDocument();
    await userEvent.click(ctaButton);
    expect(router.push).toHaveBeenCalledWith('/projects');
  });
  test('When I use a keyboard, I can navigate to and focus the CTA button', async () => {
    const ctaButton = screen.getByRole('button', {
      name: "View Maddie's portfolio projects",
    });
    ctaButton.focus();
    expect(ctaButton).toHaveFocus();
  });
});

describe('As a visitor, I can see the latest project section', () => {
  beforeEach(() => {
    mockRouter.push('/');
    jest.mocked(usePathname).mockReturnValue('/');
    render(<Home />);
  });

  test('I can see the latest project section heading', () => {
    expect(screen.getByText('Latest Project')).toBeInTheDocument();
  });

  test('I can see the project title', () => {
    expect(screen.getByText('Maddie Rose Codes')).toBeInTheDocument();
  });

  test('I can see the project description', () => {
    expect(
      screen.getByText(
        'My personal website, built with Next.js, Tailwind CSS, and TypeScript.',
      ),
    ).toBeInTheDocument();
  });

  test('I can see the project links', () => {
    expect(
      screen.getByRole('link', {
        name: 'Visit live Maddie Rose Codes project',
      }),
    ).toHaveAttribute('href', 'https://maddierosecodes.com');
    expect(
      screen.getByRole('link', {
        name: 'View Maddie Rose Codes GitHub repository',
      }),
    ).toHaveAttribute(
      'href',
      'https://github.com/maddierosecodes/software_portfolio',
    );
  });
});
