import { useState } from 'react';
import { Button } from "@/components/ui/button";
import InteractiveDiscoveryModal from '@/components/InteractiveDiscoveryModal';
import MindomoModal from '@/components/MindomoModal.jsx'; 

const About = () => {
  const [isInteractiveModalOpen, setIsInteractiveModalOpen] = useState(false);
  const [isMindomoModalOpen, setIsMindomoModalOpen] = useState(false); // État pour la nouvelle modale

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center ">À propos de Prépa Compétences</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Objectifs de l'application</h2>
        <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300">
          <li>Centraliser et organiser l'ensemble des informations relatives aux parcours des candidats, aux ateliers, aux évaluations et aux bilans de compétences.</li>
          <li>Faciliter la communication et la collaboration entre les candidats, les formateurs et les conseillers France Travail.</li>
          <li>Automatiser la génération et la transmission des documents, tels que les formulaires d'adhésion et les bilans de sortie.</li>
          <li>Améliorer le suivi et l'évaluation des progrès des candidats tout au long de leur parcours.</li>
        </ul>
      </section>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Finalités du projet</h2>
        <ul className="list-disc pl-6 space-y-4 text-gray-600 dark:text-gray-300">
          <li>Sécuriser le projet professionnel des participants en les aidant à confirmer leur projet et à définir le parcours de formation adapté.</li>
          <li>Permettre aux candidats de s'exercer aux premiers gestes professionnels via des immersions en plateaux techniques ou en entreprises.</li>
          <li>Identifier et valoriser les compétences professionnelles des participants afin de les aider à faire le meilleur choix d'orientation.</li>
          <li>Permettre aux participants de s'engager en connaissance de cause dans une formation qui les mènera vers l'emploi durable.</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-3xl font-semibold mb-6">Public cible</h2>
        <p className="text-gray-600 mb-4 dark:text-gray-300">Prépa Compétences s'adresse principalement aux :</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
          <li>Demandeurs d'emploi inscrits à France Travail</li>
          <li>Bénéficiaires du revenu de solidarité active (RSA)</li>
          <li>Jeunes en accompagnement Contrat d'engagement jeune (CEJ)</li>
          <li>Publics prioritaires du Plan d'investissement dans les compétences (PIC)</li>
        </ul>
      </section>
      <div className="mt-12 text-center">
        <Button onClick={() => setIsInteractiveModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Découvrir Prépa Compétences 
       </Button>
        <Button onClick={() => setIsMindomoModalOpen(true)} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-4">
          Voir la carte mentale
        </Button>
      </div>

      <InteractiveDiscoveryModal isOpen={isInteractiveModalOpen} onClose={() => setIsInteractiveModalOpen(false)} />
      <MindomoModal isOpen={isMindomoModalOpen} onClose={() => setIsMindomoModalOpen(false)} /> 
    </div>
  );
};

export default About;