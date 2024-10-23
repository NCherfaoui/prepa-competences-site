import { useState, useEffect } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card'
import CustomButton from '@/components/ui/CustomButton'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  SiReact,
  SiSpring,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiTailwindcss,
  SiOpenai
} from 'react-icons/si'

const ProcessusDev = () => {
  const [cards, setCards] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('./devCards.json')
      .then((response) => response.json())
      .then((data) => setCards(data))
  }, [])

  const TechIcon = ({ icon: Icon, name }) => (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className='flex flex-col items-center'
    >
      <Icon className='w-16 h-16 mb-2' />
      <span className='text-sm font-medium'>{name}</span>
    </motion.div>
  )
  const techStack = [
    { icon: SiReact, name: 'React.js' },
    { icon: SiSpring, name: 'Spring Boot' },
    { icon: SiPostgresql, name: 'PostgreSQL' },
    { icon: SiMongodb, name: 'MongoDB' },
    { icon: SiMysql, name: 'MySQL' },
    { icon: SiDocker, name: 'Docker' },
    { icon: SiTailwindcss, name: 'TailwindCSS' },
    { icon: SiOpenai, name: 'ChatGPT' }
  ]

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>Développement du Projet</h1>
      <Card className='mb-6 dark:bg-gray-800 p-6  custom-shadow'>
        <CardHeader>
          <CardTitle>Notre Stack Technologique</CardTitle>
          <CardDescription>Les technologies que nous utilisons</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {techStack.map((tech, index) => (
              <TechIcon key={index} {...tech} />
            ))}
          </div>
        </CardContent>
        <div className='flex justify-center'>
          <CustomButton
            className='mt-6 text-lg p-6 bg-blue-600 hover:bg-blue-700 transition-colors'
            onClick={() => navigate('/tech-details')}
          >
            Voir plus en détails
          </CustomButton>
        </div>
      </Card>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {cards.map((card) => (
          <Card
            key={card.id}
            className='mb-6 dark:bg-gray-800 p-6 custom-shadow flex flex-col '
          >
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent className='flex-grow'>
              <p className='text-gray-600 dark:text-gray-300 mb-4'>
                {card.content}
              </p>
            </CardContent>
            <div className='mt-auto flex justify-center'>
              <CustomButton className='mt-4'>
                <a
                  href={card.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center w-full h-full justify-center'
                >
                  En savoir plus
                </a>
              </CustomButton>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
export default ProcessusDev
