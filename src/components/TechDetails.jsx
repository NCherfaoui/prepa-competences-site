import { Card, CardContent } from '@/components/ui/card'

const TechDetails = () => {
  return (
    <div className='container mx-auto px-4 py-12'>
      {' '}
      <h1 className='text-4xl font-bold mb-8 text-center'>
        Notre Stack Technologique
      </h1>{' '}
      <Card className='mb-8 dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
        {' '}
        <CardContent>
          {' '}
          <h2 className='text-3xl font-semibold mb-4'>Backend</h2>{' '}
          <ul className='list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300'>
            {' '}
            <li>
              <strong>Langage</strong>: Java
            </li>{' '}
            <li>
              <strong>Framework</strong>: Spring Boot
            </li>{' '}
            <li>
              <strong>Outil de Build</strong>: Maven
            </li>{' '}
            <li>
              <strong>Base de Données</strong>: PostgreSQL
            </li>{' '}
            <li>
              <strong>Authentification</strong>: JWT (JSON Web Tokens)
            </li>{' '}
            <li>
              <strong>Documentation</strong>: Swagger
            </li>{' '}
            <li>
              <strong>Containerisation</strong>: Docker
            </li>{' '}
          </ul>{' '}
          <h3 className='text-2xl font-semibold mt-6 mb-4'>Bibliothèques</h3>{' '}
          <ul className='list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300'>
            {' '}
            <li>
              spring-boot-starter-web: Starter Spring Boot pour créer des
              applications web.
            </li>{' '}
            <li>
              spring-boot-starter-data-jpa: Starter Spring Boot pour Spring Data
              JPA avec Hibernate.
            </li>{' '}
            <li>
              spring-boot-starter-security: Starter Spring Boot pour Spring
              Security.
            </li>{' '}
            <li>jjwt: Java JWT: JSON Web Token pour Java et Android.</li>{' '}
            <li>
              springdoc-openapi-ui: Bibliothèque pour OpenAPI 3 avec Spring
              Boot.
            </li>{' '}
            <li>postgresql: Driver JDBC PostgreSQL.</li>{' '}
          </ul>{' '}
        </CardContent>{' '}
      </Card>{' '}
      <Card className='mb-8 dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
        {' '}
        <CardContent>
          {' '}
          <h2 className='text-3xl font-semibold mb-4'>Frontend</h2>{' '}
          <ul className='list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300'>
            {' '}
            <li>
              <strong>Langage</strong>: TypeScript
            </li>{' '}
            <li>
              <strong>Framework</strong>: React
            </li>{' '}
            <li>
              <strong>Outil de Build</strong>: Vite
            </li>{' '}
            <li>
              <strong>Framework CSS</strong>: Tailwind CSS
            </li>{' '}
            <li>
              <strong>Gestion d'État</strong>: Zustand
            </li>{' '}
            <li>
              <strong>Routage</strong>: React Router
            </li>{' '}
            <li>
              <strong>Composants UI</strong>: Shadcn UI
            </li>{' '}
          </ul>{' '}
          <h3 className='text-2xl font-semibold mt-6 mb-4'>Bibliothèques</h3>{' '}
          <ul className='list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300'>
            {' '}
            <li>
              react: Une bibliothèque JavaScript pour créer des interfaces
              utilisateur.
            </li>{' '}
            <li>
              react-dom: Point d'entrée pour les rendus DOM et serveur pour
              React.
            </li>{' '}
            <li>react-router-dom: Liaisons DOM pour React Router.</li>{' '}
            <li>
              zustand: Une solution de gestion d'état petite, rapide et
              évolutive.
            </li>{' '}
            <li>
              axios: Client HTTP basé sur les promesses pour le navigateur et
              node.js.
            </li>{' '}
            <li>
              tailwindcss: Un framework CSS utilitaire pour un développement
              rapide d'UI.
            </li>{' '}
            <li>
              @headlessui/react: Composants UI entièrement accessibles et non
              stylisés, conçus pour s'intégrer parfaitement avec Tailwind CSS.
            </li>{' '}
            <li>
              @heroicons/react: Un ensemble d'icônes SVG de haute qualité sous
              licence MIT pour vos projets web.
            </li>{' '}
            <li>
              vite: Outils de développement de nouvelle génération pour le
              frontend.
            </li>{' '}
            <li>shadcn/ui: Une bibliothèque de composants UI pour React.</li>{' '}
          </ul>{' '}
        </CardContent>{' '}
      </Card>{' '}
      <Card className='mb-8 dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
        {' '}
        <CardContent>
          {' '}
          <h2 className='text-3xl font-semibold mb-4'>DevOps</h2>{' '}
          <ul className='list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300'>
            {' '}
            <li>
              <strong>Containerisation</strong>: Docker
            </li>{' '}
            <li>
              <strong>Orchestration de Conteneurs</strong>: Docker Compose
            </li>{' '}
            <li className='text-gray-400'>
              <strong>Orchestration de Conteneurs</strong>: Kubernetes (à venir)
            </li>{' '}
            <li className='text-gray-400'>
              <strong>CI/CD</strong>: Jenkins (à venir)
            </li>{' '}
          </ul>{' '}
        </CardContent>{' '}
      </Card>{' '}
    </div>
  )
}

export default TechDetails
