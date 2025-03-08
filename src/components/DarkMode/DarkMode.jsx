import { useState, useEffect } from 'react';
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export const DarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setIsDark(theme === 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  return (
    <Switch
      isSelected={isDark}
      onValueChange={toggleTheme}
      size="lg"
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    />
  );
};
