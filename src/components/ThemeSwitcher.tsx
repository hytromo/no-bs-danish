import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { useLayoutEffect, useState } from "react";
import {
  $currentTheme,
  THEMES,
  getSystemTheme,
  type ThemeType,
} from "../utils/theme";

function ThemeButton({
  theme,
  isSelected,
  setCurrentTheme,
  children,
}: {
  theme: ThemeType;
  isSelected: boolean;
  setCurrentTheme: (theme: ThemeType) => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={() => {
        setCurrentTheme(theme);
      }}
      className={"btn btn-circle" + (isSelected ? " btn-active" : "")}
    >
      {children}
    </button>
  );
}

export default function ThemeSwitcher({ className }: { className?: string }) {
  const [selectedSwitchOption, setSelectedSwitchOption] = useState<ThemeType>(
    () => (window.localStorage.getItem("theme") as ThemeType) || "",
  );

  const setThemeWrap = (theme: ThemeType, themeToApply?: ThemeType) => {
    $currentTheme.set(themeToApply || theme);
    setSelectedSwitchOption(theme);

    window.localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", themeToApply || theme);
  };

  useLayoutEffect(() => {
    if ($currentTheme.get() === "") {
      $currentTheme.set(
        (window.localStorage.getItem("theme") as ThemeType) || getSystemTheme(),
      );
    }
  }, []);

  return (
    <div className={className || "flex"} >
      <div className="inline-flex ml-auto space-x-2">
        <ThemeButton
          theme={""}
          setCurrentTheme={() => {
            setThemeWrap("", getSystemTheme());
          }}
          isSelected={selectedSwitchOption === ""}
        >
          <ComputerDesktopIcon className="size-4" />
        </ThemeButton>

        <ThemeButton
          theme={THEMES.dark}
          setCurrentTheme={setThemeWrap}
          isSelected={selectedSwitchOption === THEMES.dark}
        >
          <MoonIcon className="size-4" />
        </ThemeButton>

        <ThemeButton
          theme={THEMES.light}
          setCurrentTheme={setThemeWrap}
          isSelected={selectedSwitchOption === THEMES.light}
        >
          <SunIcon className="size-4" />
        </ThemeButton>
      </div>
    </div >
  );
}
