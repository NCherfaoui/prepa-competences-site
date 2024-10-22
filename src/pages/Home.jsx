import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from 'lucide-react'
// import logos
import afpaLogo from '../../../logos/afpa_logo.svg'
import afpaLogoDark from '../../../logos/afpa_logo-dark.svg'
import franceTravailLogo from '../../../logos/LOGO-FRANCE-TRAVAIL.png'

const Home = () => {
  return (
    <div className='container mx-auto px-4 py-12'>
      <h1 className='text-5xl font-bold mb-8 text-center'>
        Bienvenue sur Prépa Compétences
      </h1>
      <div className='flex justify-center space-x-20 my-6'>
        <img
          src={franceTravailLogo}
          alt='France Travail Logo'
          className='h-16'
        />
        <img
          src={afpaLogo}
          alt='AFPA Logo'
          className='h-16 afpa-logo dark:hidden '
        />
        <img
          src={afpaLogoDark}
          alt='AFPA Logo'
          className='h-16 afpa-logo hidden dark:block'
        />
      </div>

      <div className='bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 mb-12'>
        <h2 className='text-3xl font-semibold mb-4'>
          Qu'est-ce que Prépa Compétences ?
        </h2>
        <p className='text-gray-600 dark:text-gray-300 mb-2 text-lg leading-relaxed'>
          Prépa Compétences est un accompagnement individuel innovant qui vise à
          sécuriser votre projet professionnel, préparer votre entrée en
          formation et garantir sa réussite pour vous permettre d'accéder à un
          emploi durable.
        </p>
        <p className='text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed'>
          Ce dispositif s'adresse aux personnes éloignées de l'emploi et a pour
          objectif de lever les principaux freins à l'insertion professionnelle,
          en vous offrant un parcours personnalisé et adapté à vos besoins.
        </p>
        <h3 className='text-2xl font-semibold mb-4'>
          Pourquoi cette application ?
        </h3>
        <p className='text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed'>
          L'AFPA a développé cette application pour optimiser et moderniser le
          processus d'accompagnement Prépa Compétences. Elle permet de
          centraliser le suivi des parcours, faciliter la communication entre
          les participants et les formateurs, et générer des rapports détaillés
          pour France Travail. Cette solution numérique vise à améliorer
          l'efficacité du programme, offrir une expérience personnalisée aux
          participants, et fournir des données précieuses pour l'évaluation
          continue et l'amélioration du dispositif.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
        <Link to='/about' className='no-underline'>
          <Button className='w-full text-lg py-6 bg-blue-600 hover:bg-blue-700 transition-colors'>
            En savoir plus sur le projet
            <ArrowRightIcon className='ml-2 h-5 w-5' />
          </Button>
        </Link>
        <Link to='/features' className='no-underline'>
          <Button className='w-full text-lg py-6 bg-green-600 hover:bg-green-700 transition-colors'>
            Découvrir les fonctionnalités
            <ArrowRightIcon className='ml-2 h-5 w-5' />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Home
