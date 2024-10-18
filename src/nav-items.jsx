import {
  HomeIcon,
  InfoIcon,
  ListIcon,
  CodeIcon,
  RocketIcon
} from 'lucide-react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Features from './pages/Features.jsx'
import Development from './pages/Development.jsx'
import Demo from './pages/Demo.jsx'
import TechDetails from './components/TechDetails.jsx'
import ProcessusDev from './pages/ProcessusDev.jsx'

export const navItems = [
  {
    title: 'Accueil',
    to: '/',
    icon: <HomeIcon className='h-4 w-4' />,
    page: <Home />
  },
  {
    title: 'À propos',
    to: '/about',
    icon: <InfoIcon className='h-4 w-4' />,
    page: <About />
  },
  {
    title: 'Fonctionnalités',
    to: '/features',
    icon: <ListIcon className='h-4 w-4' />,
    page: <Features />
  },
  {
    title: 'Développement',
    to: '/development',
    icon: <CodeIcon className='h-4 w-4' />,
    page: <Development />,
    details: <TechDetails />
  },
  {
    title: 'Processus de Développement',
    to: '/development-process',
    icon: <CodeIcon className='h-4 w-4' />,
    page: <ProcessusDev />
  },
  {
    title: 'Démo',
    to: '/demo',
    icon: <RocketIcon className='h-4 w-4' />,
    page: <Demo />
  }
]
