import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../../context/contextProvider';
import i18n from '../../i18n';
import List from '../../components/list';
import Informacion from '../../components/informacion';
import Quote from '../../components/quote';
import SubTitle from '../../components/subTitle';
const Necessity = () => {
  const { traslate } = useContextProvider();
  const { t } = useTranslation();
  useEffect(() => {
    if (traslate) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('es');
    }
  }, [traslate]);
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
  return <div>
    <div className='w-full px-4 mb-20'>
      <SubTitle titulo={t('needTitle')} />
      <List elements={elements4} listType='unordered' />
      <Quote value={t('subtitle3')} />
      <SubTitle titulo={t('support_needTitle')} />
      <Informacion value={t('subtitle4')} />
      <Informacion value={t('subtitle5')} />
      <Informacion value={t('subtitle6')} />
      <Informacion value={t('subtitle7')} />
    </div>
  </div>;
};
export default Necessity;
