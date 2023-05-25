import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../../context/contextProvider';
import i18n from '../../i18n';
import SubTitle from '../../components/subTitle';
import List from '../../components/list';
import Separador from '../../components/separador';

const Method = () => {
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
          text: t('method1'),
          id: 1,
        },
        {
          text: t('method2'),
          id: 2,
        },
        {
          text: t('method3'),
          id: 3,
        },
        {
          text: t('method4'),
          id: 4,
        },
      ];

    return <div>
        <SubTitle titulo={t('methodTitle')} />
        <List elements={elements2} listType='unordered' />
        <Separador />
    </div>
};
export default Method;