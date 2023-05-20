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
  return <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20 object-center'>
    <Nombres
      name='Tatiana E. Sánchez Sanin'
      text1={t('text1')}
      text2={t('text2')}
      text3={t('text3')}
      email='tatiana.sanchez1@udea.edu.co'
      enlace1 = 'https://github.com/TatianaSanchez01'
      enlace2 = 'https://www.linkedin.com/in/tatiana-sanchez-sanin/'
    />
    <Nombres
      name='Juan P. Arenas Velez'
      text1={t('text1')}
      text2={t('text2')}
      text3={t('text3')}
      email='juanp.arenas@udea.edu.co'
      enlace1 = 'https://github.com/juanDev-47'
      enlace2 = 'https://www.linkedin.com/in/juandev47/'
    />
    <Nombres
      name='Diego A. Poveda Alzate'
      text1={t('text1')}
      text2={t('text2')}
      text3={t('text3')}
      email='diego.poveda1@udea.edu.co'
      enlace1 = 'https://github.com/diegopovalz'
      enlace2 = 'https://www.linkedin.com/in/diegopovalz/'
    />
    <Nombres
      name='Yohel O. Pérez García'
      text1={t('text1')}
      text2={t('text2')}
      text3={t('text3')}
      email='yohel.perez@udea.edu.co'
      enlace1 = 'https://github.com/yohelperez'
      enlace2 = 'https://www.linkedin.com/in/yohel-p%C3%A9rez-0b05551a9/'
    />
    <Nombres
      name='Johan S. Muentes Casadiego'
      text1={t('text1')}
      text2={t('text2')}
      text3={t('text3')}
      email='johan.muentes@udea.edu.co'
      enlace1 = ''
      enlace2 = ''
    />
  </div>;
};
export default Members;
