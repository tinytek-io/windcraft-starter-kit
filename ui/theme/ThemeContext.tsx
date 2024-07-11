import { type ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";
import { type Color, parseColor } from "react-aria-components";
import type { Theme, ThemePanelOpacity, ThemeRadius } from "./theme";

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeRadius: ThemeRadius;
  setThemeRadius: (themeRadius: ThemeRadius) => void;
  panelOpacity: ThemePanelOpacity;
  setPanelOpacity: (opacity: ThemePanelOpacity) => void;
  hue: Color;
  setHue: (hue: Color) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
const Provider = ThemeContext.Provider;

const defaultTheme = "theme-neutral";
const defaultThemeRadius = "radius-050";
const defaultPanelOpacity = "panel-solid";

document.documentElement.classList.add(defaultTheme, defaultThemeRadius);

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: Readonly<ThemeProviderProps>) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [themeRadius, setThemeRadius] = useState<ThemeRadius>(defaultThemeRadius);
  const [panelOpacity, setPanelOpacity] = useState<ThemePanelOpacity>(defaultPanelOpacity);
  const [hue, setHue] = useState<Color>(parseColor("hsl(0, 100%, 50%)"));

  useEffect(() => {
    const oldClasses = Array.from(document.documentElement.classList).filter(
      (c) => c.startsWith("theme-") || c.startsWith("radius-") || c.startsWith("panel-")
    );
    document.documentElement.classList.remove(...oldClasses);
    document.documentElement.classList.add(theme, themeRadius, panelOpacity);
  }, [theme, themeRadius, panelOpacity]);

  const context: ThemeContextType = useMemo(
    () => ({
      theme,
      setTheme,
      themeRadius,
      setThemeRadius,
      panelOpacity,
      setPanelOpacity,
      hue,
      setHue
    }),
    [theme, themeRadius, panelOpacity, hue]
  );

  return <Provider value={context}>{children}</Provider>;
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
