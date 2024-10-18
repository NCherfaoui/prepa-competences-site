// tests/Main.test.jsx
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '../src/pages/Home'
test('renders home page', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )
  const pageTitle = screen.getByText(/Bienvenue sur Prépa Compétences/i)
  expect(pageTitle).toBeInTheDocument()
})
