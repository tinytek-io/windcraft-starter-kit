/**
 * This file counteract the theme mode setup in Rspress. This is a temporary
 * solution until Rspress provides a way to disable the theme mode setup.
 */
import {} from "./ThemeContext";
import { getStorageThemeMode } from "./mode/useStorageThemeMode";
import { getSystemThemeMode } from "./mode/useSystemThemeMode";
import { resolveThemeMode, setClassNameThemeMode } from "./mode/utils";

const getCurrentThemeMode = () => resolveThemeMode(getStorageThemeMode(), getSystemThemeMode());

const observer = new MutationObserver((mutations, o) => {
  for (const mutation of mutations) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      if (mutation.target instanceof HTMLElement) {
        const currentThemeMode = getCurrentThemeMode();
        const elementTheme = mutation.target.classList.contains("dark")
          ? "dark"
          : mutation.target.classList.contains("light")
            ? "light"
            : "system";
        if (elementTheme !== currentThemeMode) {
          console.log(`[FIX] Changing theme back ${elementTheme}=>${currentThemeMode}`);
          setClassNameThemeMode(currentThemeMode);
        }
      }
    }
  }
});
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["class"]
});

// Set the initial theme mode on the document element as soon as possible
setClassNameThemeMode(getCurrentThemeMode());
