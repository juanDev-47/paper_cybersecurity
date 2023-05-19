import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../context/contextProvider';
import i18n from '../i18n';
import Nombres from '../components/nombres';

const Members = () => {
  const { traslate } = useContextProvider();
  const { t } = useTranslation();
  useEffect(() => {
    if (traslate) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('es');
    }
  }, [traslate]);
  return <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mb-20'>
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
  </div>;
};
export default Members;
