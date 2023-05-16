import { useEffect } from 'react';
import { useContextProvider } from '../context/contextProvider';
import i18n from '../i18n';
import Entitie from '../components/entities';
const Entities = () => {
  const { traslate } = useContextProvider();
  useEffect(() => {
    if (traslate) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('es');
    }
  }, [traslate]);

  return <div className='mb-20'>
    <Entitie />
  </div>;
};
export default Entities;
