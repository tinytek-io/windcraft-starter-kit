import fs from "node:fs";
import path from "node:path";
import { type Color, Palette, type PaletteName } from "viridis";

const outputCssFile = path.join(__dirname, "ui", "theme", "chartThemes.css");
const outputTsFile = path.join(__dirname, "ui", "theme", "chartThemes.ts");

const scale = 9;
const totalScale = 12;

let outputCss = "";

for (const paletteName of Object.keys(Palette) as PaletteName[]) {
  let light = "";
  let dark = "";

  light += `.chart-${paletteName.toLowerCase()} {\n`;
  dark += `.dark.chart-${paletteName.toLowerCase()} {\n`;

  for (let darkIndex = 0; darkIndex < totalScale; darkIndex++) {
    const lightIndex = darkIndex - (totalScale - scale);
    const color = Palette[paletteName].getColor(darkIndex + 1, 1, totalScale);
    if (darkIndex > 0 && darkIndex < scale) {
      dark += `  --chart-${darkIndex + 1}: ${color.toString()}; /* ${isLight(color.getContrastingColor()) ? "light" : "dark"} */\n`;
    }
    if (lightIndex >= 0 && lightIndex < scale) {
      light += `  --chart-${lightIndex + 1}: ${color.toString()}; /* ${isLight(color.getContrastingColor()) ? "light" : "dark"} */\n`;
    }
  }
  light += "}\n\n";
  dark += "}\n\n";

  outputCss += light;
  outputCss += dark;
}

const outputTs = `import "./chartThemes.css";

export type ChartTheme =
${Object.keys(Palette)
  .map((paletteName) => `  | "chart-${paletteName.toLowerCase()}"`)
  .join("\n")};

export const chartThemes: ChartTheme[] = [
${Object.keys(Palette)
  .map((paletteName) => `  "chart-${paletteName.toLowerCase()}"`)
  .join(",\n")}
];
`;

fs.writeFileSync(outputCssFile, outputCss, "utf-8");
fs.writeFileSync(outputTsFile, outputTs, "utf-8");

function isLight(color: Color) {
  return color.red + color.green + color.blue > 382;
}
