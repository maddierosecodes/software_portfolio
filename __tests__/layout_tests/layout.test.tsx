import { render, screen } from '@testing-library/react';
import Header from '@/components/organisms/Header';
import { usePathname } from 'next/navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('As a visitor, I can see the site header with navigation', () => {
  beforeEach(() => {
    jest.mocked(usePathname).mockReturnValue('/');
    render(
      <div className="bg-blue-700">
        <Header />
        <main role="main" aria-label="Main content">
          <div>Test Content</div>
        </main>
      </div>,
    );
  });

  test('When I open any page, I see the site header with the site title', () => {
    expect(screen.getByRole('banner')).toHaveAttribute(
      'aria-label',
      'Site header',
    );
    expect(screen.getByText('MaddieRoseCodes')).toBeInTheDocument();
  });

  test('When I open any page, I see the current page title in the header', () => {
    const siteTitle = screen.getByRole('heading', { level: 1 });
    expect(siteTitle).toHaveTextContent('MaddieRoseCodes');
    expect(siteTitle).toHaveAttribute('aria-label', 'MaddieRoseCodes - Home');

    const pageTitle = screen.getByText('Home', {
      selector: 'p[aria-label="Current page: Home"]',
    });
    expect(pageTitle).toHaveAttribute('aria-label', 'Current page: Home');
  });

  test('When I use a keyboard, I can navigate through all navigation items', async () => {
    const navItems = screen.getAllByRole('link');
    for (const item of navItems) {
      item.focus();
      expect(item).toHaveFocus();
    }
  });

  test('Blog and Games pages are not shown in navigation', () => {
    // Check that blog and games links are not present in navigation
    const blogLink = screen.queryByRole('link', { name: /blog/i });
    const gamesLink = screen.queryByRole('link', { name: /games/i });

    expect(blogLink).not.toBeInTheDocument();
    expect(gamesLink).not.toBeInTheDocument();
  });

  test('Navigation contains expected available pages', () => {
    // Check that the available navigation items are present
    const allLinks = screen.getAllByRole('link');
    const linkTexts = allLinks.map((link) => link.textContent);

    // Should contain these navigation items (may appear twice due to desktop/mobile)
    expect(linkTexts.filter((text) => text === 'Home').length).toBeGreaterThan(
      0,
    );
    expect(
      linkTexts.filter((text) => text === 'About Me').length,
    ).toBeGreaterThan(0);
    expect(
      linkTexts.filter((text) => text === 'My Projects').length,
    ).toBeGreaterThan(0);
    expect(
      linkTexts.filter((text) => text === 'Contact Me').length,
    ).toBeGreaterThan(0);
  });
});
