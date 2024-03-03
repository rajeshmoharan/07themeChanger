import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import Theme from "./components/Theme";
import Card from "./components/Card";

function App() {

  const[themeMode,setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change the theme
useEffect(()=> {
   document.querySelector('html').classList.remove("light","dark");
   document.querySelector('html').classList.add(themeMode);
},[themeMode])


  return (
    // eslint-disable-next-line no-undef
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <h1 className="bg-pink-500 text-4xl font-bold p-2  text-center">
        Welcome to Dashboard
      </h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Theme/>
          </div>

          <div className="w-full max-w-sm mx-auto"><Card/></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
