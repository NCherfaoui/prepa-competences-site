// tests/About.test.jsx
import { render, screen } from '@testing-library/react'
import About from '../src/pages/About'

test('renders about page', () => {
  render(<About />)
  const aboutElement = screen.getByText(/À propos de Prépa Compétences/i)
  expect(aboutElement).toBeInTheDocument()
})
