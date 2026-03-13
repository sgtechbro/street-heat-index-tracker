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
          <span className="header__logo-icon" style={{ fontSize: '28px' }} aria-label="Street Heat Index Logo">💩</span>
          <span className="header__logo-text">Street Heat Index Tracker</span>
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
    </header>
  );
};

export default Header;
