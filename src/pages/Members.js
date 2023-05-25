import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../context/contextProvider';
import i18n from '../i18n';
import Nombres from '../components/nombres';
import image1 from '../images/profile/Tatiana Sánchez Sanin.jpg'
import image2 from '../images/profile/Juan Pablo Arenas.jpg'
import image3 from '../images/profile/Diego Alejandro Poveda.jpg'
import image4 from '../images/profile/Yohel Perez.jpg'

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
  return <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-20 justify-items-center'>
    <Nombres
      name='Tatiana E. Sánchez Sanin'
      image={image1}
      text1={t('text1')}
      text2={t('text2')}
      text3={t('text3')}
      email='tatiana.sanchez1@udea.edu.co'
      enlace1='https://github.com/TatianaSanchez01'
      enlace2='https://www.linkedin.com/in/tatiana-sanchez-sanin/'
    />
    <Nombres
      name='Juan P. Arenas Velez'
      image={image2}
      text1={t('text1')}
      text2={t('text2')}
      text3={t('text3')}
      email='juanp.arenas@udea.edu.co'
      enlace1='https://github.com/juanDev-47'
      enlace2='https://www.linkedin.com/in/juandev47/'
    />
    <Nombres
      name='Diego A. Poveda Alzate'
      image={image3}
      text1={t('text1')}
      text2={t('text2')}
      text3={t('text3')}
      email='diego.poveda1@udea.edu.co'
      enlace1='https://github.com/diegopovalz'
      enlace2='https://www.linkedin.com/in/diegopovalz/'
    />
    <Nombres
      name='Yohel O. Pérez García'
      image={image4}
      text1={t('text1')}
      text2={t('text2')}
      text3={t('text3')}
      email='yohel.perez@udea.edu.co'
      enlace1='https://github.com/yohelperez'
      enlace2='https://www.linkedin.com/in/yohel-p%C3%A9rez-0b05551a9/'
    />
  </div>;
};
export default Members;
