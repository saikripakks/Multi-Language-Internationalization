import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'



i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: { brand: "Kripzart", language: "Select" },
          hero: { title: "Welcome to Our Website", description: "We bring your ideas to life with modern design." },
          footer: { text: "© 2026 Kripzart. All rights reserved." }
        }
      },
      hi: {
        translation: {
          nav: { brand: "Kripzart", language: "चुनें" },
          hero: { title: "हमारी वेबसाइट में आपका स्वागत है", description: "हम आधुनिक डिजाइन के साथ आपके विचारों को जीवन में लाते हैं।" },
          footer: { text: "© 2026 Kripzart। सर्वाधिकार सुरक्षित।" }
        }
      },
      ml: {
        translation: {
          nav: { brand: "Kripzart", language: "തിരഞ്ഞെടുക്കുക" },
          hero: { title: "ഞങ്ങളുടെ വെബ്സൈറ്റിലേക്ക് സ്വാഗതം", description: "ആധുനിക രൂപകൽപ്പനയിലൂടെ ഞങ്ങൾ നിങ്ങളുടെ ആശയങ്ങൾക്ക് ജീവൻ നൽകുന്നു." },
          footer: { text: "© 2026 Kripzart. സർവ്വ അവകാശങ്ങളും നിക്ഷിപ്തം." }
        }
      }
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'hi', 'ml'],
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'preferred-language',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
