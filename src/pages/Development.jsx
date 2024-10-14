import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "@/components/ui/CustomButton";
import PdfModal from "@/components/PdfModal";

import {
  SiReact,
  SiMongodb,
  SiDocker,
  SiTailwindcss,
  SiSpring,
  SiPostgresql,
  SiOpenai,
  SiMysql,
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import UMLModal from "@/components/UMLModal.jsx";

const TechIcon = ({ icon: Icon, name }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center"
  >
    <Icon className="w-16 h-16 mb-2" />
    <span className="text-sm font-medium">{name}</span>
  </motion.div>
);

const Development = () => {
  const techStack = [
    { icon: SiReact, name: "React.js" },
    { icon: SiSpring, name: "Spring Boot" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiTailwindcss, name: "TailwindCSS" },
    { icon: SiOpenai, name: "ChatGPT" },
  ];
  const navigate = useNavigate();
  const [isUMLModalOpen, setIsUMLModalOpen] = useState(false);
  const [isCahierModalOpen, setIsCahierModalOpen] = useState(false);
  const [isBilanModalOpen, setIsBilanModalOpen] = useState(false);

  const openCahierModal = () => setIsCahierModalOpen(true);
  const closeCahierModal = () => setIsCahierModalOpen(false);

  const openBilanModal = () => setIsBilanModalOpen(true);
  const closeBilanModal = () => setIsBilanModalOpen(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Développement du Projet</h1>

      <Card className="mb-6 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle>Notre Stack Technologique</CardTitle>
          <CardDescription>Les technologies que nous utilisons</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <TechIcon key={index} {...tech} />
            ))}
          </div>
        </CardContent>
        <div className="flex justify-center">
          <CustomButton
            className="mt-6 text-lg p-6 bg-blue-600 hover:bg-blue-700 transition-colors"
            onClick={() => navigate("/tech-details")}
          >
            Voir plus en détails
          </CustomButton>
        </div>
      </Card>

      <Card className="mb-6 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle>Processus de développement</CardTitle>
          <CardDescription>Méthodologie Agile</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Notre équipe de 4 développeurs Java/React de CDA Brest suit une
            méthodologie Agile pour le développement de l'application Prépa
            Compétences. Nous travaillons en sprints de deux semaines, avec des
            réunions quotidiennes pour assurer une communication efficace et une
            progression constante du projet.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Nous avons également réalisé un cahier des charges détaillé pour
            définir les objectifs et les exigences du projet. Vous pouvez
            consulter le cahier des charges en cliquant sur le bouton
            ci-dessous.
          </p>
          <CustomButton onClick={openCahierModal} className="mt-4">
            Voir le cahier des charges
          </CustomButton>
        </CardContent>
      </Card>

      <Card className="mb-6 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle>Défis et solutions</CardTitle>
          <CardDescription>
            Intégration de multiples sources de données
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            L'un des principaux défis a été l'intégration de multiples sources
            de données (MySQL et MongoDB). Nous avons résolu ce problème en
            créant une couche d'abstraction qui unifie l'accès aux données,
            simplifiant ainsi le développement et la maintenance de
            l'application.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle>Migration vers PostgreSQL</CardTitle>
          <CardDescription>
            Unification de notre base de données
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Notre projet a évolué d'une architecture utilisant MySQL et MongoDB
            vers une solution unifiée avec PostgreSQL. Cette migration nous a
            permis de :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Simplifier notre infrastructure de données</li>
            <li>
              Bénéficier des fonctionnalités avancées de PostgreSQL, comme le
              support JSON natif
            </li>
            <li>Améliorer les performances et la cohérence des données</li>
          </ul>
          <CustomButton className="mt-4">
            En savoir plus sur la migration
          </CustomButton>
        </CardContent>
      </Card>

      <Card className="mb-6 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle>Intégration de Shadcn UI</CardTitle>
          <CardDescription>
            Amélioration de l'interface utilisateur
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Nous avons intégré Shadcn UI pour moderniser notre interface
            utilisateur. Cette bibliothèque nous offre :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Des composants React réutilisables et personnalisables</li>
            <li>Une esthétique moderne et cohérente</li>
            <li>Une meilleure expérience utilisateur</li>
          </ul>
          <CustomButton className="mt-4">
            Explorer les composants Shadcn
          </CustomButton>
        </CardContent>
      </Card>

      <Card className="mb-6 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle>Modélisation et Documentation</CardTitle>
          <CardDescription>Utilisation de diagrammes UML</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Pour améliorer la documentation et la compréhension de notre
            architecture, nous utilisons des diagrammes UML. Bien que React ne
            prenne pas en charge nativement l'affichage de diagrammes UML, nous
            avons des solutions alternatives :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Utilisation d'images statiques pour les diagrammes UML</li>
            <li>
              Intégration de bibliothèques tierces comme Mermaid.js pour des
              diagrammes dynamiques
            </li>
            <li>Liens vers des outils de modélisation UML externes</li>
          </ul>
          <CustomButton className="mt-4">Voir nos diagrammes UML</CustomButton>
        </CardContent>
      </Card>

      <Card className="mb-6 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle>Modélisation et Documentation</CardTitle>
          <CardDescription>Utilisation de PlantUML et Swagger</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Pour améliorer la documentation et la compréhension de notre
            architecture, nous utilisons PlantUML pour créer des diagrammes UML.
            Voici un exemple de diagramme UML que nous avons réalisé au début du
            projet :
          </p>
          <CustomButton
            className="mt-4"
            onClick={() => setIsUMLModalOpen(true)}
          >
            Voir le diagramme UML
          </CustomButton>
          <p>
            Nous utilisons également Swagger pour documenter notre API. Vous
            pouvez accéder à l'interface Swagger à l'adresse suivante :
          </p>

          <CustomButton className="mt-4">
            <a
              href="http://localhost:8081/swagger-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full h-full"
            >
              Accéder à Swagger
              <FiExternalLink className="ml-2" />
            </a>
          </CustomButton>
        </CardContent>
      </Card>

      <Card className="mb-6 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle>Fonctionnalité de génération de PDF</CardTitle>
          <CardDescription>Bilan de sortie Prépa Compétences</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            L'application permet de générer un PDF du bilan de sortie Prépa
            Compétences, complété par le candidat ainsi que son formateur. Ce
            PDF est ensuite transmis par mail à tous les acteurs, y compris le
            conseiller France Travail.
          </p>
          <CustomButton className="mt-4" onClick={openBilanModal}>
            Voir un modèle de PDF
          </CustomButton>
        </CardContent>
      </Card>
      <UMLModal
        isOpen={isUMLModalOpen}
        onClose={() => setIsUMLModalOpen(false)}
      />
      {/* Modal pour le cahier des charges */}
      <PdfModal isOpen={isCahierModalOpen} onClose={closeCahierModal}>
        <iframe
          src="./cahier-des-charges.pdf"
          width="100%"
          height="600px"
          title="Cahier des Charges"
        ></iframe>
      </PdfModal>
      {/* Modal pour le modèle de PDF */}
      <PdfModal isOpen={isBilanModalOpen} onClose={closeBilanModal}>
        <iframe
          src="./bilan-de-sortie.pdf"
          width="100%"
          height="600px"
          title="Bilan de Sortie"
        ></iframe>
      </PdfModal>
    </div>
  );
};

export default Development;
