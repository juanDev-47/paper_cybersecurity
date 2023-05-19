import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../../context/contextProvider';
import i18n from '../../i18n';
import List from '../../components/list';
import SubTitle from '../../components/subTitle';

const Objectives = () => {
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
    <div className='mb-20'>
      <div className='w-full px-4'>
        <SubTitle titulo={t('goals')} />
      </div>
      <List elements={elements1} listType='ordered' />
    </div>
  );
};
export default Objectives;
