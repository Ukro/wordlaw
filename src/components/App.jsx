import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { I18nextProvider } from 'react-i18next';

// Переклад безпосередньо в коді
const resources = {
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
};

// Функція для визначення мови за IP
function getLanguageByIP() {
  // Замість цього коду використовуйте API для визначення IP та мови
  // ...

  // Приклад: якщо IP з України, повертаємо "uk", інакше "en"
  return navigator.language.includes('uk') ? 'uk' : 'en';
}

// Ініціалізація i18next
i18n.init({
  resources,
  lng: getLanguageByIP(), // Встановлюємо мову за IP
  fallbackLng: 'en',
});

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AppContent />
    </I18nextProvider>
  );
}

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
