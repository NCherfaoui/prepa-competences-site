// tests/Main.test.jsx
import { render, screen } from '@testing-library/react';
import Main from '../src/components/Main';

test('renders main content', () => {
  render(<Main />);
  const mainContent = screen.getByText(/Présentation Projet Prépa Compétences/i);
  expect(mainContent).toBeInTheDocument();
});