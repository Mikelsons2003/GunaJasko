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
        supportedLngs: ['lv', 'en', 'ru'], // Ensure only these are allowed
        detection: {
            order: ['querystring', 'localStorage', 'cookie', 'navigator', 'htmlTag'],
            caches: ['localStorage', 'cookie'], // Save detected language
        },
        interpolation: {
            escapeValue: false,
        },
    });

// If the detected language is not supported, force 'lv'
if (!['lv', 'en', 'ru'].includes(i18n.language)) {
    i18n.changeLanguage('lv');
}

export default i18n;