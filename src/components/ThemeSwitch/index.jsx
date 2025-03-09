import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeSwitch() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div>
      <Switch
        defaultSelected
        checked={isDarkMode}
        size="lg"
        color="success"
        thumbIcon={({ isSelected, className }) =>
          isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
        onChange={toggleTheme}
      />
    </div>
  );
}
