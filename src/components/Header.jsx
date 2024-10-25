import { Link } from 'react-router-dom'
import { navItems } from '../nav-items'
import ErrorBoundary from '../components/ErrorBoundary'

const Header = () => {
  return (
    <ErrorBoundary>
      <header
        role='banner'
        className='bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white shadow-md sticky top-0 z-10 flex justify-center items-center'
      >
        <img
          src='logos/white_on_trans.png'
          alt='Prépa Compétences Logo'
          onClick={() => window.scrollTo(0, 0)}
          className='w-12 h-12  my-2 mx-12 cursor-pointer invert dark:invert-0'
        />
        <nav className='container mx-auto p-4'>
          <ul className='flex space-x-6 justify-center'>
            {navItems.map(({ title, to, icon }) => (
              <li key={to}>
                <Link
                  to={to}
                  className='flex items-center hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300'
                >
                  {icon}
                  <span className='ml-4'>{title}</span>
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
