import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../../context/contextProvider';
import i18n from '../../i18n';
import SubTitle from '../../components/subTitle';
import List from '../../components/list';
import Informacion from '../../components/informacion';
import Separador from '../../components/separador';

const Methodology = () => {
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
      text: t('methodology1'),
      id: 1,
    },
    {
      text: t('methodology2'),
      id: 2,
    },
    {
      text: t('methodology3'),
      id: 3,
    },
  ];

  return <div>
    <SubTitle titulo={t('methodologyTitle')} />
    <Informacion value={t('methodologyItem1')} />
    <List elements={elements2} listType='unordered' />
    <Informacion value={t('methodologyItem2')} />
    <Separador />
  </div>
};
export default Methodology;