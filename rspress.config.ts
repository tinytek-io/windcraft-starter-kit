import path from "node:path";
import { pluginApiDocgen } from "@rspress/plugin-api-docgen";
import { pluginLastUpdated } from "@rspress/plugin-last-updated";
import { pluginPreview } from "@rspress/plugin-preview";
import { defineConfig } from "rspress/config";

export default defineConfig({
  ssg: false,
  globalStyles: path.join(__dirname, "styles", "index.css"),
  root: path.join(__dirname, "docs"),
  route: {
    exclude: ["**/_lib/*.*"]
  },
  title: "WindCraftUI",
  description: "React Template Components",
  icon: "/windcraft-logo.webp",
  logo: {
    light: "/windcraft-logo-text.webp",
    dark: "/windcraft-logo-text.webp"
  },
  themeConfig: {
    darkMode: false,
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/tinytek-io/windcraft-ui"
      }
    ]
  },
  plugins: [
    pluginLastUpdated(),
    pluginPreview(),
    pluginApiDocgen({
      entries: {
        button: "./ui/components/Button.tsx"
      },
      apiParseTool: "react-docgen-typescript"
    })
  ]
});
