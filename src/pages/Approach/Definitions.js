import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../../context/contextProvider';
import i18n from '../../i18n';
import List from '../../components/list';
import SubTitle from '../../components/subTitle';
const Definitions = () => {
  const { traslate } = useContextProvider();
  const { t } = useTranslation();
  useEffect(() => {
    if (traslate) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('es');
    }
  }, [traslate]);

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
  return <div>
    <div className='w-full px-4 mb-20'>
      <SubTitle titulo={t('definitionTitle')} />
      <List elements={elements3} listType='unordered' />
    </div>
  </div>;
};
export default Definitions;
