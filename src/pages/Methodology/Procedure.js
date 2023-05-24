import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../../context/contextProvider';
import i18n from '../../i18n';
import SubTitle from '../../components/subTitle';
import List from '../../components/list';

const Procedure = () => {
  const { traslate } = useContextProvider();
  const { t } = useTranslation();
  useEffect(() => {
    if (traslate) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('es');
    }
  }, [traslate]);
  const procedures = [
    {
      text: t('procedure1'),
      id: 1,
    },
    {
      text: t('procedure2'),
      id: 2,
    },
    {
      text: t('procedure3'),
      id: 3,
    },
    {
      text: t('procedure4'),
      id: 4,
    },
    {
      text: t('procedure5'),
      id: 5,
    },
  ];

  return (
    <div className='mb-20'>
      <div className='w-full px-4'>
        <SubTitle titulo={t('procedure')} />
      </div>
      <div className='flex justify-center items-center'>
        <List elements={procedures} listType='ordered' />
      </div>
    </div>
  );
};
export default Procedure;
