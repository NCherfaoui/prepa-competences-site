import { Button } from '@/components/ui/button';
import CustomButton from '@/components/ui/CustomButton';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found text-center'>
      <h1 className='text-4xl font-bold my-12'>404 Page Non Trouvée</h1>
      <p className='text-lg mb-6'>Désolé, la page que vous recherchez n'existe pas.</p>
      <CustomButton onClick={() => window.location.replace('/')}>Retour à l'accueil</CustomButton>
    </div>
  );
}

export default NotFound;
