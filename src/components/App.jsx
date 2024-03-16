import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';
import { initReactI18next } from 'react-i18next';


// Initialize i18next with a provider
i18n.use(initReactI18next).init({
  resources: {
    uk: {
      translation: {
        welcome: 'Вітаємо на нашому сайті!',
        about: 'Про нас',
        contact: 'Звязатися з нами',
      },
    },
    en: {
      translation: {
        welcome: 'Welcome to our website!',
        about: 'About Us',
        contact: 'Contact Us',
      },
    },
  },
  lng: 'uk', // Default language
  fallbackLng: 'uk',
});

// Wrap your application with the i18next Provider
function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AppContent />
    </I18nextProvider>
  );
}

// Use useTranslation hook within a React function component
function AppContent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>
        <a href="/about">{t('about')}</a> | <a href="/contact">{t('contact')}</a>
      </p>
    </div>
  );
}

export default App;
