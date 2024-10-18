import { Link } from 'react-router-dom'
import { navItems } from '../nav-items'
import ErrorBoundary from '../components/ErrorBoundary'

const Header = () => {
  return (
    <ErrorBoundary>
      <header
        role='banner'
        className='bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-md'
      >
        <nav className='container mx-auto px-4 py-4'>
          <ul className='flex space-x-6 justify-center'>
            {navItems.map(({ title, to, icon }) => (
              <li key={to}>
                <Link
                  to={to}
                  className='flex items-center hover:text-blue-500 dark:hover:text-blue-300 transition-colors'
                >
                  {icon}
                  <span className='ml-2'>{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </ErrorBoundary>
  )
}

export default Header
