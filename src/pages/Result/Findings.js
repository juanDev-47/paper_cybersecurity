import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../../context/contextProvider';
import i18n from '../../i18n';
import SubTitle from '../../components/subTitle';
import List from '../../components/list';
import Informacion from '../../components/informacion';

const Findings = () => {
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
      text: t('findings1'),
      id: 1,
    },
    {
      text: t('findings2'),
      id: 2,
    },
    {
      text: t('findings3'),
      id: 3,
    },
    {
      text: t('findings4'),
      id: 4,
    },
    {
      text: t('findings5'),
      id: 5,
    },
  ];

  return (
    <div>
      <SubTitle titulo={t('findingsTitle')} />
      <List elements={elements2} listType='unordered' />
      <Informacion value={t('findingsItem1')} />
    </div>
  );
};
export default Findings;
