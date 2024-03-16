import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

// Initialize i18next
i18n.init({
  resources: {
    en: {
      translation: {
        welcome: 'Welcome to our website!',
        about: 'About Us',
        contact: 'Contact Us',
      },
    },
    uk: {
      translation: {
        welcome: 'Вітаємо на нашому сайті!',
        about: 'Про нас',
        contact: 'Звязатися з нами',
      },
    },
  },
  lng: 'uk', // Default language
  fallbackLng: 'en',
});



export const App = () => {
  // Translate text

const { t } = useTranslation();

  return (
    <div>
    <h1>{t('welcome')}</h1>
    <p>
      <a href="/about">{t('about')}</a> | <a href="/contact">{t('contact')}</a>
    </p>
    </div>
  );
};
