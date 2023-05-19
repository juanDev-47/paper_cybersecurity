import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../../context/contextProvider';
import i18n from '../../i18n';

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

    return <div>
        method
    </div>
};
export default Method;