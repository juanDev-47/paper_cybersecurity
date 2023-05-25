import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../../context/contextProvider';
import i18n from '../../i18n';
import SubTitle from '../../components/subTitle';
import List from '../../components/list';
import Separador from '../../components/separador';

const Analysis = () => {
  const { traslate } = useContextProvider();
  const { t } = useTranslation();
  useEffect(() => {
    if (traslate) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('es');
    }
  }, [traslate]);

  const analysis = [
    {
      text: t('analysis1'),
      id: 1,
    },
    {
      text: t('analysis2'),
      id: 2,
    },
    {
      text: t('analysis3'),
      id: 3,
    },
    {
      text: t('analysis4'),
      id: 4,
    },
    {
      text: t('analysis5'),
      id: 5,
    },
  ];

  return (
    <div className='mb-20'>
      <div className='w-full px-4'>
        <SubTitle titulo={t('analysis')} />
      </div>
      <div className='flex justify-center items-center'>
        <List elements={analysis} listType='none' />
      </div>
      <Separador />
    </div>
  );
};
export default Analysis;
