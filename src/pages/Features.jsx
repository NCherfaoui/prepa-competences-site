import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, UserCheck, BookOpen, Users, FileText, UserPlus, UserCircle, MessageSquare, Calendar, ClipboardList, Mail, Building, BarChart2, Search, Lock, Monitor, Send } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, color, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={`bg-white/30 dark:bg-gray-800/30 dark:backdrop-filt backdrop-blur-md backdrop-saturate-150 border border-white/20 dark:border-gray-800/20 p-8 rounded-lg shadow-md hover:cursor-pointer transition-transform ${color} hover:scale-105`}
      whileHover={{ scale: 1.03 }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between my-8 ">
        <div className="flex items-center">
          <Icon className={`w-8 h-8 ${color}`} />
          <h3 className="text-xl font-semibold ml-3">{title}</h3>
        </div>
        <ChevronDown className={`w-6 h-6 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FeatureItem = ({ icon: Icon, title, description }) => (
  <div className="mt-4">
    <div className="flex items-center mb-2">
      <Icon className="w-5 h-5 mr-2" />
      <h4 className="text-lg font-medium">{title}</h4>
    </div>
    <p className="text-gray-600 dark:text-gray-300 ml-7">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: UserCheck,
      title: "Gestion des Candidats",
      color: "text-blue-500",
      items: [
        { icon: UserPlus, title: "Inscription", description: "Permet aux candidats de s'inscrire en fournissant leurs informations personnelles, objectifs professionnels, etc." },
        { icon: UserCircle, title: "Profil du Candidat", description: "Espace personnel pour gérer les informations, visualiser le parcours, suivre les progrès et consulter les évaluations." },
        { icon: MessageSquare, title: "Communication", description: "Messagerie intégrée pour faciliter les échanges entre candidats et formateurs." },
      ],
    },
    {
      icon: BookOpen,
      title: "Gestion des Formateurs",
      color: "text-green-500",
      items: [
        { icon: Calendar, title: "Gestion des Ateliers", description: "Outils pour planifier les sessions, gérer les inscriptions et suivre les présences." },
        { icon: ClipboardList, title: "Évaluation des Candidats", description: "Fonctionnalités pour évaluer les progrès, saisir les résultats et générer des bilans de compétences." },
        { icon: Mail, title: "Communication", description: "Interface de messagerie pour interagir avec les candidats et partager des documents." },
      ],
    },
    {
      icon: Users,
      title: "Gestion Administrative",
      color: "text-yellow-500",
      items: [
        { icon: Building, title: "Gestion des Sessions de Formation", description: "Création et gestion des sessions Prépa Compétences, affectation des formateurs et suivi des participants." },
        { icon: Calendar, title: "Gestion des Ateliers", description: "Création, modification et suppression des ateliers avec définition des objectifs et contenus." },
        { icon: Users, title: "Gestion des Formateurs", description: "Gestion des informations des formateurs, affectation aux parcours et suivi de la disponibilité." },
        { icon: BarChart2, title: "Statistiques et Reporting", description: "Génération de statistiques et rapports sur les indicateurs clés de performance." },
      ],
    },
    {
      icon: FileText,
      title: "Fonctionnalités Générales",
      color: "text-purple-500",
      items: [
        { icon: Search, title: "Moteur de Recherche Interne", description: "Recherche facile d'informations spécifiques au sein de l'application." },
        { icon: Lock, title: "Gestion des Droits d'Utilisateurs", description: "Système de gestion des rôles et permissions pour contrôler l'accès aux fonctionnalités." },
        { icon: Monitor, title: "Interface de Mise à Jour du Site", description: "Back-office pour la gestion et la mise à jour du contenu du site et des paramètres de l'application." },
        { icon: Monitor, title: "Responsive Design", description: "Adaptation automatique à différents types d'appareils pour une expérience utilisateur optimale." },
        { icon: Send, title: "Communication avec France Travail", description: "Envoi automatique de documents aux conseillers France Travail pour faciliter le suivi et la coordination." },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Fonctionnalités de Prépa Compétences</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} color={feature.color}>
            {feature.items.map((item, itemIndex) => (
              <FeatureItem key={itemIndex} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default Features;