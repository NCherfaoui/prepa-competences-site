import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import plantumlEncoder from 'plantuml-encoder';

const UMLModal = ({ isOpen, onClose }) => {
  const [plantUMLCode, setPlantUMLCode] = useState('');

  useEffect(() => {
    if (isOpen) {
      fetch('./plantUMLCode.puml')
        .then(response => response.text())
        .then(data => setPlantUMLCode(data))
        .catch(error => console.error('Error fetching PlantUML code:', error));
    }
  }, [isOpen]);

  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)',
  });

  if (!isOpen) return null;

  const encodedUML = plantumlEncoder.encode(plantUMLCode);
  const umlUrl = `http://www.plantuml.com/plantuml/svg/${encodedUML}`;

  return (
    <animated.div style={modalAnimation} className="fixed inset-0 bg-black bg-opacity-80 bg-blur backdrop-blur backdrop-saturate-150 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <Button onClick={onClose} className="absolute top-0 right-0 bg-transparent text-black hover:text-gray-700 hover:bg-gray-200 p-2 rounded-full">
          <X size={24} />
        </Button>
        <h2 className="text-3xl font-bold mb-8 text-center">Diagramme UML</h2>
        {plantUMLCode ? (
          <img src={umlUrl} alt="Diagramme UML" className="my-4" />
        ) : (
          <p>Chargement du diagramme UML...</p>
        )}
      </div>
    </animated.div>
  );
};

export default UMLModal;