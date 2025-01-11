import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './Languages/en.json';
import lv from './Languages/lv.json';
import ru from './Languages/ru.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            lv: { translation: lv },
            ru: { translation: ru },
        },
        fallbackLng: 'lv', // Default language
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;