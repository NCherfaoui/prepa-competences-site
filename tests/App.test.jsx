import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import App from '../src/App'

// Mock react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await import('react-router-dom')
  return {
    ...actual,
    BrowserRouter: ({ children }) => children,
    Routes: ({ children }) => children,
    Route: ({ children }) => children,
    useNavigate: () => vi.fn()
  }
})
test('renders App component', () => {
  render(<App />)

  // Check for the presence of the main content wrapper
  const mainContent = screen.getByRole('main')
  expect(mainContent).toBeInTheDocument()

  const errorMessage = screen.getByText(/Quelque chose s'est mal passé/i)
  expect(errorMessage).toBeInTheDocument()
  expect(errorMessage.tagName).toBe('H1')
})
