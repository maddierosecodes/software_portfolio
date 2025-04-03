import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import Projects from '@/app/projects/page';
import { projectsPageSchema } from '@/config/structuredData';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('As a visitor, I can view the projects page with a list of portfolio projects', () => {
  beforeEach(() => {
    mockRouter.push('/projects');
    jest.mocked(usePathname).mockReturnValue('/projects');
    render(<Projects />);
  });

  describe('Page Structure and Accessibility', () => {
    test('When I open the projects page, I see the main section with correct ARIA role and label', () => {
      const mainSection = screen.getByRole('region', {
        name: 'Projects page content',
      });
      expect(mainSection).toBeInTheDocument();
    });

    test('When I open the projects page, I see the "My Projects" heading', () => {
      expect(screen.getByText('My Projects')).toBeInTheDocument();
    });

    test('When I open the projects page, I see the project description text', () => {
      expect(
        screen.getByText("Take a look at what I've been working on!"),
      ).toBeInTheDocument();
    });
  });

  describe('Project List Section', () => {
    test('When I open the projects page, I see the project title', () => {
      expect(screen.getByText('Maddie Rose Codes')).toBeInTheDocument();
    });

    test('When I open the projects page, I see the project description', () => {
      expect(
        screen.getByText(
          'My personal website, built with Next.js, Tailwind CSS, and TypeScript.',
        ),
      ).toBeInTheDocument();
    });

    test('When I open the projects page, I see the project links', () => {
      const liveProjectLink = screen.getByRole('link', {
        name: 'Visit live Maddie Rose Codes project',
      });
      const githubLink = screen.getByRole('link', {
        name: 'View Maddie Rose Codes GitHub repository',
      });

      expect(liveProjectLink).toHaveAttribute(
        'href',
        'https://maddierosecodes.com',
      );
      expect(githubLink).toHaveAttribute(
        'href',
        'https://github.com/maddierosecodes/software_portfolio',
      );
    });
  });

  describe('SEO and Structured Data', () => {
    test('When I open the projects page, I see the correct structured data schema', () => {
      const structuredData = document.querySelector(
        'script[type="application/ld+json"]',
      );
      expect(structuredData).toBeInTheDocument();

      const parsedData = JSON.parse(structuredData?.textContent || '{}');
      expect(parsedData['@context']).toBe(projectsPageSchema['@context']);
      expect(parsedData['@type']).toBe(projectsPageSchema['@type']);
      expect(parsedData.name).toBe(projectsPageSchema.name);
      expect(parsedData.description).toBe(projectsPageSchema.description);
    });
  });
});
