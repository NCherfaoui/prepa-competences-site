import { useState } from 'react'
import { Button } from '@/components/ui/button'
import InteractiveDiscoveryModal from '@/components/InteractiveDiscoveryModal'
import MindomoModal from '@/components/MindomoModal.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const About = () => {
  const [isInteractiveModalOpen, setIsInteractiveModalOpen] = useState(false)
  const [isMindomoModalOpen, setIsMindomoModalOpen] = useState(false)

  return (
    <div className='container mx-auto px-4 py-12'>
      {/* <h1 className="text-4xl font-bold mb-8 text-center">À propos</h1> */}
      <Tabs defaultValue='prepa-competences'>
        <TabsList className='grid w-full grid-cols-2 mb-14 gap-4 bg-transparent px-12'>
          <TabsTrigger
            value='prepa-competences'
            className='text-xl font-bold p-8 rounded-t-xl'
          >
            À propos de Prépa Compétences
          </TabsTrigger>
          <TabsTrigger
            value='project'
            className='text-xl font-bold p-8 rounded-t-xl'
          >
            À propos du Projet
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value='prepa-competences'
          className='shadow-lg rounded-xl p-12 mb-12 dark:bg-gray-800'
        >
          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6'>
              Qu'est-ce que Prépa Compétences ?
            </h2>
            <p className='text-gray-600 dark:text-gray-300 mb-4 w-[90%]'>
              Prépa Compétences est un accompagnement individuel innovant qui
              vise à safegarder le projet professionnel des participants,
              préparer leur entrée en formation et garantir sa réussite pour
              accéder à un emploi durable.
            </p>
          </section>

          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6'>Finalités du projet</h2>
            <ul className='list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300'>
              <li>
                Sécuriser le projet professionnel des participants en les aidant
                à confirmer leur projet et à définir le parcours de formation
                adapté.
              </li>
              <li>
                Permettre aux candidats de s'exercer aux premiers gestes
                professionnels via des immersions en plateaux techniques ou en
                entreprises.
              </li>
              <li>
                Identifier et valoriser les compétences professionnelles des
                participants afin de les aider à faire le meilleur choix
                d'orientation.
              </li>
              <li>
                Permettre aux participants de s'engager en connaissance de cause
                dans une formation qui les mènera vers l'emploi durable.
              </li>
            </ul>
          </section>
          <section>
            <h2 className='text-3xl font-semibold mb-6'>Public cible</h2>
            <h3 className='text-gray-600 mb-4 dark:text-gray-300'>
              Prépa Compétences s'adresse principalement aux :
            </h3>
            <ul className='list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300'>
              <li>Demandeurs d'emploi inscrits à France Travail</li>
              <li>Bénéficiaires du revenu de solidarité active (RSA)</li>
              <li>Jeunes en accompagnement Contrat d'engagement jeune (CEJ)</li>
              <li>
                Publics prioritaires du Plan d'investissement dans les
                compétences (PIC)
              </li>
            </ul>
          </section>
          <div className='mt-12 flex justify-center space-x-14'>
            <Button
              onClick={() => setIsInteractiveModalOpen(true)}
              className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded'
            >
              Découvrir Prépa Compétences
            </Button>
            <Button
              onClick={() => setIsMindomoModalOpen(true)}
              className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-20 rounded ml-4'
            >
              Voir la carte mentale
            </Button>
          </div>
        </TabsContent>
        <TabsContent
          value='project'
          className='shadow-lg rounded-xl p-12 mb-12 dark:bg-gray-800'
        >
          <section className='mb-12'>
            <h2 className='text-3xl font-semibold mb-6'>
              Objectifs de l'application
            </h2>
            <ul className='list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300'>
              <li>
                Centraliser et organiser l'ensemble des informations relatives
                aux parcours des candidats, aux ateliers, aux évaluations et aux
                bilans de compétences.
              </li>
              <li>
                Faciliter la communication et la collaboration entre les
                candidats, les formateurs et les conseillers France Travail.
              </li>
              <li>
                Automatiser la génération et la transmission des documents, tels
                que les formulaires d'adhésion et les bilans de sortie.
              </li>
              <li>
                Améliorer le suivi et l'évaluation des progrès des candidats
                tout au long de leur parcours.
              </li>
            </ul>
          </section>

          <section>
            <h2 className='text-3xl font-semibold mb-6'>
              Pourquoi cette application ?
            </h2>
            <p className='text-gray-600 dark:text-gray-300 mb-4 '>
              Nous avons développé cette application pour optimiser et
              moderniser le processus d'accompagnement Prépa Compétences.
            </p>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              <span className='font-bold pl-2'> Elle permet de: </span>

              <ul className='list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300'>
                <li>Centraliser le suivi des parcours.</li>
                <li>
                  Faciliter la communication entre les participants et les
                  formateurs.
                </li>
                <li>Genérer des rapports détaillés pour France Travail.</li>
              </ul>
            </p>
            <p className='text-gray-600 dark:text-gray-300 mb-4 w-[80%]'>
              Cette solution numérique vise à améliorer l'efficacité du
              programme, offrir une expérience personnalisée aux participants,
              et fournir des données précieuses pour l'évaluation continue et
              l'amélioration du dispositif.
            </p>
          </section>
        </TabsContent>
      </Tabs>

      <InteractiveDiscoveryModal
        isOpen={isInteractiveModalOpen}
        onClose={() => setIsInteractiveModalOpen(false)}
      />
      <MindomoModal
        isOpen={isMindomoModalOpen}
        onClose={() => setIsMindomoModalOpen(false)}
      />
    </div>
  )
}

export default About
