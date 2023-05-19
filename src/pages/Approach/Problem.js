import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../../context/contextProvider';
import i18n from '../../i18n';
import Informacion from '../../components/informacion';
import SubTitle from '../../components/subTitle';
const Problem = () => {
  const { traslate } = useContextProvider();
  const { t } = useTranslation();
  useEffect(() => {
    if (traslate) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('es');
    }
  }, [traslate]);
  return <div>
    <div className='w-full px-4 mb-20'>
      <SubTitle titulo={t('problemTitle')} />
      <Informacion value={t('subtitle8')} />
    </div>
  </div>;
};
export default Problem;
