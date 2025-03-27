import { render, screen } from '@testing-library/react';
import AboutPage from '../../app/about/page';
import { usePathname } from 'next/navigation';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('As a visitor, I can view the about page with information about the author', () => {
  beforeEach(() => {
    mockRouter.push('/about');
    jest.mocked(usePathname).mockReturnValue('/about');
    render(<AboutPage />);
  });

  test('When I open the about page, I see the about hero section with the profile image', () => {
    expect(
      screen.getByAltText(
        /photo of Maddie, the maddierosecodessite owner and creator/i,
      ),
    ).toBeInTheDocument();
  });

  test('When I open the about page, I see the "About Me" heading', () => {
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  test('When I open the about page, I see the introduction text', () => {
    const paragraph = screen.getByText('Hi!', {
      exact: false,
    });
    expect(paragraph).toBeInTheDocument();
  });

  test('When I open the about page, I see the key values emphasised in pink', () => {
    expect(screen.getByText(/accessibility/)).toBeInTheDocument();
    expect(screen.getByText(/autonomy/)).toBeInTheDocument();
    expect(screen.getByText(/building tech/)).toBeInTheDocument();
  });
});
