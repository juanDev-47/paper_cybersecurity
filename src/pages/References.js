import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../context/contextProvider';
import i18n from '../i18n';
import SubTitle from '../components/subTitle'
import Linklist from '../components/linkList';
const References = () => {
  const { traslate } = useContextProvider();
  const { t } = useTranslation();
  useEffect(() => {
    if (traslate) {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('es');
    }
  }, [traslate]);
  let linkElements5 = [
    {
      text: t('references1'),
      link: t('referenceLink1'),
      id: 1,
    },
    {
      text: t('references2'),
      link: t('referenceLink2'),
      id: 2,
    },
    {
      text: t('references3'),
      link: t('referenceLink3'),
      id: 3,
    },
    {
      text: t('references4'),
      link: t('referenceLink4'),
      id: 4,
    },
    {
      text: t('references5'),
      link: t('referenceLink5'),
      id: 5,
    },
  ];
  return <div>
    <div className='w-full px-4 mb-20'>
      <SubTitle titulo={t('referencesTitle')} />
      <Linklist elements={linkElements5} />
    </div>
  </div>;
};
export default References;
