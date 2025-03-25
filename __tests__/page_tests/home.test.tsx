import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../../app/page';
import RootLayout from '../../app/layout';
import { usePathname } from 'next/navigation';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('As a visitor, I am greeted by a hero section, with information about the author', () => {
  beforeEach(() => {
    mockRouter.push('/');
    jest.mocked(usePathname).mockReturnValue('/');
    render(
      <RootLayout>
        <Home />
      </RootLayout>,
    );
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
  test('When I select the CTA button (nothing happens yet!)', async () => {
    const ctaButton = screen.getByRole('button', { name: 'CTA Button' });
    expect(ctaButton).toBeInTheDocument();
    await userEvent.click(ctaButton);
    expect(ctaButton).toBeInTheDocument();
  });
});
