import { useState } from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const InteractiveDiscoveryModal = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState(null);

  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0%)" : "translateY(-100%)",
  });

  const sections = [
    {
      title: "Pour qui ?",
      content:
        "Public inscrit à France Travail (anciennement Pôle Emploi), niveau Bac ou inférieur, ayant un projet professionnel ou souhaitant le définir. Ouvert également aux bénéficiaires du RSA avec une obligation de 15 heures de formation par semaine.",
    },
    { 
      title: "Où ?", 
      content: "Dans les Centres AFPA répartis sur tout le territoire français" 
    },
    {
      title: "Pourquoi ?",
      content:
        "Faciliter la réussite des formations des demandeurs d'emploi, qualifier un public pas ou peu qualifié. Améliorer l'adéquation entre les compétences des demandeurs d'emploi et les besoins du marché du travail.",
    },
    {
      title: "Comment ?",
      content:
        "PHASE 1: Accueil et évaluation personnalisée des besoins<br/>PHASE 2: Stage en entreprise pour découvrir ou confirmer un métier<br/>PHASE 3: Ateliers de renforcement des compétences<br/>PHASE 4: Co-construction du parcours de formation personnalisé",
    },
    {
      title: "Qui ?",
      content:
        "FRANCE TRAVAIL (prescripteur): repérer le public cible, assurer le suivi personnalisé<br/>CENTRE AFPA (opérateur national): mise en œuvre du dispositif, formation et accompagnement",
    },
    {
      title: "Quoi ?",
      content:
        "DISPOSITIF D'ACCOMPAGNEMENT : Parcours personnalisé pour accès à la qualification et à l'emploi, incluant un diagnostic complet des compétences et des besoins en formation",
    },
    { 
      title: "Quand ?", 
      content: "Nouveau groupe tous les lundis, avec une flexibilité accrue pour s'adapter aux besoins individuels" 
    },
    {
      title: "Financement",
      content: "Pris en charge par France Travail, avec possibilité de rémunération pendant la formation (AREF ou R2F)",
    },
    {
      title: "Résultats",
      content: "Taux d'accès à l'emploi de 63,2% dans les 6 mois suivant la fin de la formation (au 4e trimestre 2023)",
    },
  ];

  if (!isOpen) return null;

  return (
    <animated.div
      style={modalAnimation}
      className="fixed inset-0 bg-black bg-opacity-80 bg-blur backdrop-blur backdrop-saturate-150 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className=" rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
      >
        <Button
          onClick={onClose}
          className="absolute top-0 right-0 bg-transparent text-white hover:text-gray-300 hover:bg-gray-700 p-2 rounded-full"
        >
          <X size={24} />
        </Button>
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          Découvrez Prépa Compétences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                setActiveSection(activeSection === index ? null : index)
              }
              className={`bg-gradient-to-br ${
                activeSection === index
                  ? "from-blue-500 to-purple-500"
                  : "from-gray-500 to-gray-300"
              } rounded-lg p-6 cursor-pointer transition-all duration-300 ease-in-out transform hover:shadow-xl`}
              
            >
              <h3
                className={`text-xl font-semibold mb-2 ${
                  activeSection === index ? "text-white" : "text-gray-800"
                }`}
              >
                {section.title}
              </h3>
              {activeSection === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-gray-200"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                >
                
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </animated.div>
  );
};

export default InteractiveDiscoveryModal;
