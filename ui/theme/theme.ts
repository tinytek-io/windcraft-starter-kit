import "./themes.css";

export type Theme =
  | "theme-zinc"
  | "theme-slate"
  | "theme-stone"
  | "theme-gray"
  | "theme-neutral"
  | "theme-red"
  | "theme-rose"
  | "theme-orange"
  | "theme-green"
  | "theme-blue"
  | "theme-yellow"
  | "theme-violet";

export const themes: Theme[] = [
  "theme-zinc",
  "theme-slate",
  "theme-stone",
  "theme-gray",
  "theme-neutral",
  "theme-red",
  "theme-rose",
  "theme-orange",
  "theme-green",
  "theme-blue",
  "theme-yellow",
  "theme-violet"
];

export type ThemeMode = "light-mode" | "dark-mode";

export type ThemeRadius = "radius-000" | "radius-030" | "radius-050" | "radius-075" | "radius-100";

export type ThemePanelOpacity = "panel-solid" | "panel-translucent";
