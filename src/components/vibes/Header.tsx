import { useState } from "react";
import { Sun, Moon } from "lucide-react";

const Header = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#" className="header__logo">
          <svg className="header__logo-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="The Vibes Index Logo">
            <rect x="2" y="14" width="5" height="18" rx="2.5" fill="currentColor" opacity="0.4" />
            <rect x="10" y="8" width="5" height="24" rx="2.5" fill="currentColor" opacity="0.6" />
            <rect x="18" y="2" width="5" height="30" rx="2.5" fill="currentColor" opacity="0.8" />
            <rect x="26" y="10" width="5" height="22" rx="2.5" fill="currentColor" />
          </svg>
          <span className="header__logo-text">STREET HEAT INDEX TRACKER</span>
        </a>
        <div className="header__actions">
          <span className="header__update-tag">
            <span className="header__pulse"></span>
            Updated Mar 2026
          </span>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>);

};

export default Header;