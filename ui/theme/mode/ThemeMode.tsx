import { createContext, useContext, useEffect, useMemo } from "react";
import { getStorageThemeMode, useStorageThemeMode } from "./useStorageThemeMode";
import { getSystemThemeMode, useSystemThemeMode } from "./useSystemThemeMode";
import { type ThemeMode, resolveThemeMode, setClassNameThemeMode } from "./utils";

export type ThemeModeContextType = {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
};

export const ThemeModeContext = createContext<ThemeModeContextType>({
  themeMode: "system",
  setThemeMode: () => {}
});

const getInitialThemeMode = () => resolveThemeMode(getStorageThemeMode(), getSystemThemeMode());

// Set the initial theme mode on the document element as soon as possible
setClassNameThemeMode(getInitialThemeMode());

type ThemeModeProviderProps = {
  children: React.ReactNode;
};

export function ThemeModeProvider({ children }: Readonly<ThemeModeProviderProps>) {
  const systemThemeMode = useSystemThemeMode();
  const [storageThemeMode, setStorageThemeMode] = useStorageThemeMode();

  const resolvedThemeMode = useMemo(
    () => resolveThemeMode(storageThemeMode, systemThemeMode),
    [storageThemeMode, systemThemeMode]
  );

  useEffect(() => setClassNameThemeMode(resolvedThemeMode), [resolvedThemeMode]);

  const value = useMemo<ThemeModeContextType>(
    () => ({ themeMode: storageThemeMode, setThemeMode: setStorageThemeMode }),
    [storageThemeMode, setStorageThemeMode]
  );

  return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>;
}

/**
 * Hook to get the current theme mode and a function to set it.
 */
export const useThemeMode = () => useContext(ThemeModeContext);
