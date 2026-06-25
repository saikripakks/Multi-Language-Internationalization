import { useTranslation } from 'react-i18next';
import './App.css';
import LanguageSwitcher from './components/LanguageSwitcher';
import Hero from './components/Hero';

function App() {
  const { t } = useTranslation();

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <h2 className="logo">{t('nav.brand')}</h2>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Welcome Section */}
      <Hero />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>{t('footer.text')}</p>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;