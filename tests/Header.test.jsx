// tests/Header.test.jsx
import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from '../src/components/Header'
import { navItems } from '../src/nav-items'

describe('Header Component', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
  })

  test('renders all navigation items', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    navItems.forEach((item) => {
      expect(getByText(item.title)).toBeInTheDocument()
    })
  })

  test('renders navigation links with correct href', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    navItems.forEach((item) => {
      expect(getByText(item.title).closest('a')).toHaveAttribute(
        'href',
        item.to
      )
    })
  })

  test('renders with correct classes', () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    expect(container.querySelector('header')).toHaveClass(
      'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-md'
    )
    expect(container.querySelector('nav')).toHaveClass(
      'container mx-auto px-4 py-4'
    )
    expect(container.querySelector('ul')).toHaveClass(
      'flex space-x-6 justify-center'
    )
    navItems.forEach((item) => {
      const linkElement = container.querySelector(`a[href="${item.to}"]`)
      expect(linkElement).toHaveClass(
        'flex items-center hover:text-blue-500 dark:hover:text-blue-300 transition-colors'
      )
    })
  })
})
