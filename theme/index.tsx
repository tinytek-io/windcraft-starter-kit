import { CustomizeThemeButton } from "@/ui/theme/CustomizeThemeButton";
import { ThemeProvider } from "@/ui/theme/ThemeContext";
import { ThemeModeProvider } from "@/ui/theme/mode/ThemeMode";
import Theme from "rspress/theme";

const Layout = () => (
  <ThemeModeProvider>
    <ThemeProvider>
      <Theme.Layout
        afterNavMenu={
          <div className="px-4">
            <CustomizeThemeButton />
          </div>
        }
      />
    </ThemeProvider>
  </ThemeModeProvider>
);

export default {
  ...Theme,
  Layout
};

export * from "rspress/theme";
