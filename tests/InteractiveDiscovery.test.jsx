import { render, screen } from '@testing-library/react';
import InteractiveDiscovery from '../src/components/InteractiveDiscovery';

test('renders interactive discovery component', () => {
  render(<InteractiveDiscovery />);
  const interactiveElement = screen.getByText(/Découvrez Prépa Compétences/i);
  expect(interactiveElement).toBeInTheDocument();
});
