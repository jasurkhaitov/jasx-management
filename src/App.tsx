import { useState, useEffect } from "react";
import { GlobalContent, MyGlobalContext } from "./context/Context";
import Register from "./pages/Register";

function App() {
  // Get the initial theme from localStorage or default to 'dark'
  const initialTheme = localStorage.getItem('theme') || 'dark';

  const [theme, setTheme] = useState<string>(initialTheme);

  // Update localStorage whenever the theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const contextValue: GlobalContent = {
    themeChange: theme,
    setThemeChange: setTheme,
  };

  return (
    <div className="font-roboto">
      <MyGlobalContext.Provider value={contextValue}>
        <div className={theme}>
          <Register/>
        </div>
      </MyGlobalContext.Provider>
    </div>
  );
}

export default App;
