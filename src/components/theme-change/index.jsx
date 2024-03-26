import useLocalStorage from './useLocalStorage';

import './index.css';

export default function ThemeChange() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  function handleThemeChange() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  console.log(theme);
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h2>Hello There</h2>

        <button onClick={handleThemeChange}>Change Theme</button>
      </div>
    </div>
  );
}
