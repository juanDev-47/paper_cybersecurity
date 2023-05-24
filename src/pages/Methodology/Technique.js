import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../../context/contextProvider';
import i18n from '../../i18n';
import SubTitle from '../../components/subTitle';
import List from '../../components/list';

const Technique = () => {
  const { traslate } = useContextProvider();
  const { t } = useTranslation();
  const techniques = [
    {
      text: t('technique1'),
      id: 1,
    },
    {
      text: t('technique2'),
      id: 2,
    },
  ];

  useEffect(() => {
    if (traslate) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('es');
    }
  }, [traslate]);

  return (
    <div className='mb-20'>
      <div className='w-full px-4'>
        <SubTitle titulo={t('techniques')} />
      </div>
      <div className='flex justify-center items-center'>
        <List elements={techniques} listType='ordered' />
      </div>
    </div>
  );
};
export default Technique;
