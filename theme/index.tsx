import { CustomizeThemeButton } from "@/ui/theme/CustomizeThemeButton";
import { ThemeProvider } from "@/ui/theme/ThemeContext";
import { ThemeModeProvider } from "@/ui/theme/mode/ThemeMode";
import { Layout as BasicLayout } from "rspress/theme";

export const Layout = () => (
  <ThemeModeProvider>
    <ThemeProvider>
      <BasicLayout
        afterNavMenu={
          <div className="px-4">
            <CustomizeThemeButton />
          </div>
        }
      />
    </ThemeProvider>
  </ThemeModeProvider>
);

export * from "rspress/theme";
