import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContextProvider } from '../../context/contextProvider';
import i18n from '../../i18n';
import SubTitle from '../../components/subTitle';
import Information from '../../components/informacion';
import List from '../../components/list';
import Topic from '../../components/topic'

const Instrument = () => {
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
            text: t('instruments1-1'),
            id: 1,
        },
        {
            text: t('instruments1-2'),
            id: 2,
        },
        {
            text: t('instruments1-3'),
            id: 3,
        }
    ];

    let elements5 = [
        {
            text: t('instruments2-1'),
            id: 1,
        },
        {
            text: t('instruments2-2'),
            id: 2,
        }
    ];

    let elements6 = [
        {
            text: t('instruments3-1'),
            id: 1,
        },
        {
            text: t('instruments3-2'),
            id: 2,
        },
        {
            text: t('instruments3-3'),
            id: 3,
        }
    ];
    return <div>
        <SubTitle titulo={t('intrumentsTitle')} />
        <Information value={t('instruments')} />
        <Topic titulo={t('intruments1')} />
        <List elements={elements4} listType='unordered' />
        <Topic titulo={t('intruments2')} />
        <List elements={elements5} listType='unordered' />
        <Topic titulo={t('intruments3')} />
        <List elements={elements6} listType='unordered' />
        <SubTitle />
    </div>
};
export default Instrument;