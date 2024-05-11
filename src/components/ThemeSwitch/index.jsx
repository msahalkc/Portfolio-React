import { useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <Switch
        defaultSelected
        size="lg"
        color="secondary"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
        onChange={toggleDarkMode}
      />
      <style>{`
        body{
          background-color: ${isDarkMode ? "#0a0a0a" : "#eee5e0"} !important;
        }
        h1, h2, h3, h4, h5, h6, p, a, button, i, Bebas{
          color: ${isDarkMode ? "#eee5e0" : "#0a0a0a"} !important;
        }
        button, div{
          border-color: ${isDarkMode ? "#eee5e0" : "#0a0a0a"} !important;
        }
      `}</style>
    </div>
  );
}
