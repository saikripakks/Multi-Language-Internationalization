import { useTranslation } from "react-i18next";
import { ArrowRight, PlayCircle } from "lucide-react";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const getButtonTexts = () => {
    switch (currentLang) {
      case 'hi':
        return { start: 'अपनी यात्रा शुरू करें', demo: 'डेमो देखें', badge: 'आधुनिक रिस्पॉन्सिव डिज़ाइन' };
      case 'ml':
        return { start: 'നിങ്ങളുടെ യാത്ര ആരംഭിക്കുക', demo: 'ഡെമോ കാണുക', badge: 'ആധുനിക റെസ്പോൺസീവ് ഡിസൈൻ' };
      default:
        return { start: 'Start Your Journey', demo: 'Watch Demo',
          badge: 'Modern Responsive Design' };
    }
  };

  const getStats = () => {
    switch (currentLang) {
      case 'hi':
        return [
          { number: "50K+", label: "संतुष्ट ग्राहक" },
          { number: "120+", label: "पूरे किए गए प्रोजेक्ट" },
          { number: "99%", label: "संतुष्टि" }
        ];
      case 'ml':
        return [
          { number: "50K+", label: "സന്തുഷ്ടരായ ഉപഭോക്താക്കൾ" },
          { number: "120+", label: "പൂർത്തിയാക്കിയ പ്രോജക്റ്റുകൾ" },
          { number: "99%", label: "സംതൃപ്തി" }
        ];
      default:
        return [
          { number: "50K+", label: "Happy Clients" },
          { number: "120+", label: "Completed Projects" },
          { number: "99%", label: "Satisfaction" }
        ];
    }
  };

  const buttonTexts = getButtonTexts();
  const stats = getStats();

  return (
    <main className="hero">
      <div className="hero-content">
        <span className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', background: '#e0e7ff', color: '#4338ca', borderRadius: '9999px', marginBottom: '1rem', fontWeight: 'bold' }}>
          {buttonTexts.badge}
        </span>
        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-description">{t('hero.description')}</p>
        <div className="hero-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
          <button className="cta-button" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {buttonTexts.start} <ArrowRight size={20} />
          </button>
          <button className="cta-button" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: 'inherit', border: '1px solid currentColor' }}>
            <PlayCircle size={20} /> {buttonTexts.demo}
          </button>
        </div>
        <div className="hero-stats" style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '3rem', color: '#666' }}>
          {stats.map((stat, index) => (
            <div key={index} className="stat">
              <strong>{stat.number}</strong> {stat.label}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Hero;
