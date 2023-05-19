import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../context/contextProvider';
import i18n from '../i18n';
import Separador from '../components/separador';
import Carousel from '../components/carousel/carousel';

const Home = () => {
  const { traslate } = useContextProvider();
  const { t } = useTranslation();
  useEffect(() => {
    if (traslate) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('es');
    }
  }, [traslate]);

  return (
    <div>
      {/* body include all here */}
      <div className='w-full px-4 mb-20'>
        <Separador titulo={t('tittle1')} />
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
