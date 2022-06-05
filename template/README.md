## Theme

import {setTheme} from 'designs/Colors';
setTheme();

## Change language

import {useTranslation} from 'react-i18next';
const {t, i18n} = useTranslation();
i18n.changeLanguage(i18n.language === 'vi' ? 'en' : 'vi');

## show Global Modal
import {showModalGlobal} from 'components/ModalGlobal';

showModalGlobal({
    visible: true,
    rowButton: true,
    arrayButton: [
        {
            label: 'Left',
            onPress: () => {},
        },
        {
            label: 'Right',
            onPress: () => {},
        },
    ],
});
