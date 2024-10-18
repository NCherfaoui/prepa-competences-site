import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

const InteractiveDiscovery = () => {
  return (
    <div className='container mx-auto px-4 py-12'>
      <h2 className='text-3xl font-bold mb-8 text-center text-gray-800'>
        Découvrez Prépa Compétences
      </h2>
      <Accordion type='single' collapsible className='w-full'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Pour qui ?</AccordionTrigger>
          <AccordionContent>
            <ul className='list-disc pl-6 space-y-2 text-gray-600'>
              <li>Public inscrit à Pôle Emploi</li>
              <li>Niveau Bac ou inférieur</li>
              <li>Ayant un projet professionnel</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Où ?</AccordionTrigger>
          <AccordionContent>
            <p className='text-gray-600'>Dans un Centre AFPA en France</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>Pourquoi ?</AccordionTrigger>
          <AccordionContent>
            <ul className='list-disc pl-6 space-y-2 text-gray-600'>
              <li>
                Faciliter la réussite des formations des demandeurs d'emploi
              </li>
              <li>Qualifier un public pas ou peu qualifié</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger>Comment ?</AccordionTrigger>
          <AccordionContent>
            <ul className='list-disc pl-6 space-y-2 text-gray-600'>
              <li>
                PHASE 1: accueil + co-construction du parcours de renforcement
              </li>
              <li>PHASE 2: stage en entreprise (PMSMP)</li>
              <li>PHASE 3: Ateliers de renforcement compétences de base</li>
              <li>
                PHASE 4 : co-construction du parcours de formation individualisé
                / BILAN FINAL
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-5'>
          <AccordionTrigger>Qui ?</AccordionTrigger>
          <AccordionContent>
            <ul className='list-disc pl-6 space-y-2 text-gray-600'>
              <li>POLE EMPLOI (prescripteur): repérer le public cible</li>
              <li>AFPA (opérateur national): mise en œuvre du dispositif</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-6'>
          <AccordionTrigger>Quoi ?</AccordionTrigger>
          <AccordionContent>
            <p className='text-gray-600 mb-4'>DISPOSITIF D'ACCOMPAGNEMENT :</p>
            <ul className='list-disc pl-6 space-y-2 text-gray-600'>
              <li>Parcours personnalisé pour accès à la qualification</li>
              <li>Préparation à l'entrée en formation</li>
              <li>Renforcer leurs connaissances</li>
              <li>Se confronter aux réalités du métier visé</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-7'>
          <AccordionTrigger>Quand ?</AccordionTrigger>
          <AccordionContent>
            <p className='text-gray-600'>Nouveau groupe tous les lundis</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default InteractiveDiscovery
