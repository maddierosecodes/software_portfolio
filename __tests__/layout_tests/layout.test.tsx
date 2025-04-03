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
});
