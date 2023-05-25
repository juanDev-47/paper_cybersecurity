import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../context/contextProvider';
import i18n from '../i18n';
import Titulo from '../components/titulo';
import Carousel from '../components/carousel/carousel';
import Members from '../pages/Members';
import References from '../pages/References';
import SubTitle from '../components/subTitle';

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
        <Titulo titulo={t('tittle1')} />
        <Carousel />
        <SubTitle titulo={t('membersTitle')} />
        <Members />
        <References />
      </div>
    </div>
  );
};

export default Home;
