import { render, screen } from '@testing-library/react'
import ErrorBoundary from '../src/components/ErrorBoundary'

function ProblematicComponent () {
  throw new Error('Test Error')
}

test('renders fallback UI when there is an error', () => {
  render(
    <ErrorBoundary>
      <ProblematicComponent />
    </ErrorBoundary>
  )
  const fallbackElement = screen.getByText(/Quelque chose s'est mal passé/i)
  expect(fallbackElement).toBeInTheDocument()
})
