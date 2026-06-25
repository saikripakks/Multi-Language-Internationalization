import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'hi', label: 'हिंदी', flag: '🇮🇳' },
  { code: 'ml', label: 'മലയാളം', flag: '🇮🇳' },
]

function LanguageSwitcher() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (e) => {
    const lang = e.target.value
    i18n.changeLanguage(lang)
    localStorage.setItem('preferred-language', lang)
  }

  return (
    <div className="language-switcher" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <span className="language-label" style={{ fontWeight: '500' }}>{t('nav.language')}:</span>
      <select
        value={i18n.language || 'en'}
        onChange={changeLanguage}
        style={{
          padding: '0.4rem 0.8rem',
          borderRadius: '0.5rem',
          border: '1px solid #d1d5db',
          cursor: 'pointer',
          background: 'white',
          fontSize: '0.9rem',
          outline: 'none'
        }}
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.flag} {language.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSwitcher
