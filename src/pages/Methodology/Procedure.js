import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../../context/contextProvider';
import i18n from '../../i18n';

const Procedure = () => {
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
        procedure
    </div>
};
export default Procedure;