import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../context/contextProvider';
import i18n from '../i18n';
// import Informacion from "../components/informacion";
import Separador from '../components/separador';
import Toggle from '../components/toggle';
import Nombres from '../components/nombres';
import List from '../components/list';
import Entities from '../components/entities';

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

  let elements1 = [
    {
      text: t('goal1'),
      id: 1,
    },
    {
      text: t('goal2'),
      id: 2,
    },
  ];

  return (
    <div>
      <div>
        <Toggle />
      </div>
      {/* body include all here */}
      <div className='w-full px-4'>
        <Separador titulo={t('tittle1')} />
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
          <Nombres
            name='Tatiana E. Sánchez Sanin'
            text1={t('text1')}
            text2={t('text2')}
            text3={t('text3')}
            email='tatiana.sanchez1@udea.edu.co'
          />
          <Nombres
            name='Juan P. Arenas Velez'
            text1={t('text1')}
            text2={t('text2')}
            text3={t('text3')}
            email='juanp.arenas@udea.edu.co'
          />
          <Nombres
            name='Diego A. Poveda Alzate'
            text1={t('text1')}
            text2={t('text2')}
            text3={t('text3')}
            email='diego.poveda1@udea.edu.co'
          />
          <Nombres
            name='Yohel O. Pérez García'
            text1={t('text1')}
            text2={t('text2')}
            text3={t('text3')}
            email='yohel.perez@udea.edu.co'
          />
          <Nombres
            name='Johan S. Muentes Casadiego'
            text1={t('text1')}
            text2={t('text2')}
            text3={t('text3')}
            email='johan.muentes@udea.edu.co'
          />
        </div>
      </div>
      <div className='w-full px-4'>
        <Separador titulo={t('goals')} />
        <List elements={elements1} />
      </div>
      <Entities />
    </div>
  );
};

export default Home;
