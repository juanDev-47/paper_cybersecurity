import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../context/contextProvider';
import i18n from '../i18n';
import List from '../components/list';
import Informacion from '../components/informacion';
import SubTitle from '../components/subTitle';

const Context = () => {
  const { traslate } = useContextProvider();
  const { t } = useTranslation();
  useEffect(() => {
    if (traslate) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('es');
    }
  }, [traslate]);
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
  return <div>
    <div className='w-full px-4 mb-20'>
      <SubTitle titulo={t('contextTitle')} />
      <Informacion value={t('context')} />
      <br />
      <Informacion value={t('subtitle1')} />
      <List elements={elements2} listType='unordered' />
      <Informacion value={t('subtitle2')} />
    </div>
  </div>;
};
export default Context;
