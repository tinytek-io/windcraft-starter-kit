import { type ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";
import { type Color, parseColor } from "react-aria-components";
import type { ChartTheme } from "./chartThemes";
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
  chartTheme: ChartTheme;
  setChartTheme: (theme: ChartTheme) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
const Provider = ThemeContext.Provider;

const defaultTheme = "theme-neutral";
const defaultThemeRadius = "radius-050";
const defaultPanelOpacity = "panel-solid";
const defaultChartTheme: ChartTheme = "chart-viridis";

document.documentElement.classList.add(defaultTheme, defaultThemeRadius, defaultChartTheme);

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: Readonly<ThemeProviderProps>) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [themeRadius, setThemeRadius] = useState<ThemeRadius>(defaultThemeRadius);
  const [panelOpacity, setPanelOpacity] = useState<ThemePanelOpacity>(defaultPanelOpacity);
  const [hue, setHue] = useState<Color>(parseColor("hsl(0, 100%, 50%)"));
  const [chartTheme, setChartTheme] = useState<ChartTheme>(defaultChartTheme);

  useEffect(() => {
    const oldClasses = Array.from(document.documentElement.classList).filter(
      (c) => c.startsWith("theme-") || c.startsWith("radius-") || c.startsWith("panel-") || c.startsWith("chart-")
    );
    document.documentElement.classList.remove(...oldClasses);
    document.documentElement.classList.add(theme, themeRadius, panelOpacity, chartTheme);
  }, [theme, themeRadius, panelOpacity, chartTheme]);

  const context: ThemeContextType = useMemo(
    () => ({
      theme,
      setTheme,
      themeRadius,
      setThemeRadius,
      panelOpacity,
      setPanelOpacity,
      hue,
      setHue,
      chartTheme,
      setChartTheme
    }),
    [theme, themeRadius, panelOpacity, hue, chartTheme]
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
