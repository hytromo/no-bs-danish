import { atom, type StoreValue } from "nanostores";

export const THEMES = {
  dark: "forest" as const,
  light: "lemonade" as const,
};

// gets the user's theme preference from the operating system
export const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEMES.dark
    : THEMES.light;

export const $currentTheme = atom<
  typeof THEMES.dark | typeof THEMES.light | ""
>("");
export type ThemeType = StoreValue<typeof $currentTheme>;
