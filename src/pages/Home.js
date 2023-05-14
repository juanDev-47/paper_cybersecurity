import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../context/contextProvider';
import i18n from '../i18n';
import Informacion from '../components/informacion';
import Separador from '../components/separador';
//import Toggle from '../components/toggle';
import Nombres from '../components/nombres';
import List from '../components/list';
import Entities from '../components/entities';
import Linklist from '../components/linkList';

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

  let elements2 = [
    {
      text: t('context1'),
      id: 1,
    },
    {
      text: t('context2'),
      id: 2,
    },
    {
      text: t('context3'),
      id: 3,
    },
    {
      text: t('context4'),
      id: 4,
    },
    {
      text: t('context5'),
      id: 5,
    },
  ];

  let elements3 = [
    {
      text: t('definition1'),
      id: 1,
    },
    {
      text: t('definition2'),
      id: 2,
    },
    {
      text: t('definition3'),
      id: 3,
    },
    {
      text: t('definition4'),
      id: 4,
    },
    {
      text: t('definition5'),
      id: 5,
    },
    {
      text: t('definition6'),
      id: 6,
    },
    {
      text: t('definition7'),
      id: 7,
    },
  ];

  let elements4 = [
    {
      text: t('need1'),
      id: 1,
    },
    {
      text: t('need2'),
      id: 2,
    },
  ];

  let linkElements5 = [
    {
      text: t('references1'),
      link: t('referenceLink1'),
      id: 1,
    },
    {
      text: t('references2'),
      link: t('referenceLink2'),
      id: 2,
    },
    {
      text: t('references3'),
      link: t('referenceLink3'),
      id: 3,
    },
    {
      text: t('references4'),
      link: t('referenceLink4'),
      id: 4,
    },
    {
      text: t('references5'),
      link: t('referenceLink5'),
      id: 5,
    },
  ];

  return (
    <div>
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
      </div>
      <List elements={elements1} listType='ordered' />
      <div className='w-full px-4'>
        <Separador titulo={t('contextTitle')} />
        <Informacion value={t('context')} />
        <br />
        <Informacion value={t('subtitle1')} />
        <List elements={elements2} listType='unordered' />
        <Informacion value={t('subtitle2')} />
        <Entities />
        <Separador titulo={t('definitionTitle')} />
        <List elements={elements3} listType='unordered' />
        <Separador titulo={t('needTitle')} />
        <List elements={elements4} listType='unordered' />
        <Informacion value={t('subtitle3')} />
        <Separador titulo={t('support_needTitle')} />
        <Informacion value={t('subtitle4')} />
        <Informacion value={t('subtitle5')} />
        <Informacion value={t('subtitle6')} />
        <Informacion value={t('subtitle7')} />
        <Separador titulo={t('problemTitle')} />
        <Informacion value={t('subtitle8')} />
        <Separador titulo={t('referencesTitle')} />
        <Linklist elements={linkElements5} />
      </div>
    </div>
  );
};

export default Home;
