// tests/Footer.test.jsx
import { render, screen } from '@testing-library/react'
import Footer from '../src/components/Footer'

test('renders footer with copyright', () => {
  render(<Footer />)
  const copyrightElement = screen.getByText(
    /© 2024 Prépa Compétences. Tous droits réservés./i
  )
  expect(copyrightElement).toBeInTheDocument()
})
