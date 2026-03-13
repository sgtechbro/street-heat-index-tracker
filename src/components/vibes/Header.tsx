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
          <span className="header__logo-text">STREET HEAT INDEX TRACKER</span>
        </a>
        <div className="header__actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>);

};

export default Header;