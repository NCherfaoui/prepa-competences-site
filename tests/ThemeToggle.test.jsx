import { render, screen } from '@testing-library/react';
import ThemeToggle from '../src/components/ThemeToggle';

test('renders theme toggle button', () => {
  render(<ThemeToggle />);
  const toggleButton = screen.getByRole('button');
  expect(toggleButton).toBeInTheDocument();
});
