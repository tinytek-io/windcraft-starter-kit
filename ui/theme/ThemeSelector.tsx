import { cn } from "@/lib/utils";
import { Button } from "@/ui/components/Button";
import { Separator } from "@/ui/components/Separator";
import { CheckIcon, MoonStarIcon, SunIcon } from "lucide-react";
import { useThemeContext } from "./ThemeContext";
import { useThemeMode } from "./mode/ThemeMode";
import "./fixRspressThemeMode";
import {
  ColorSlider,
  type ColorSliderProps,
  ColorThumb,
  Label,
  SliderOutput,
  SliderTrack
} from "react-aria-components";
import { type Theme, type ThemePanelOpacity, type ThemeRadius, themes } from "./theme";

export function ThemeModeSelector() {
  const { theme, setTheme, themeRadius, setThemeRadius, panelOpacity, setPanelOpacity, hue, setHue } =
    useThemeContext();

  return (
    <div className="flex h-full w-full flex-col gap-4 px-2">
      <ThemeModePicker />
      <Separator orientation="horizontal" />
      <ThemePicker theme={theme} onChange={setTheme} />
      {/*<ThemeHueSelector label="Hue" channel="hue" value={hue} onChange={setHue} defaultValue="hsl(0, 100%, 50%)" /> */}
      <Separator orientation="horizontal" />
      <ThemeRadiusPicker radius={themeRadius} onChange={setThemeRadius} />
      <Separator orientation="horizontal" />
      <ThemePanelOpacityPicker opacity={panelOpacity} onChange={setPanelOpacity} />
    </div>
  );
}

type ThemeColorButtonProps = {
  theme: Theme;
  selected: boolean;
  onClick: (theme: Theme) => void;
};

export function ThemeColorButton({ theme, selected, onClick }: Readonly<ThemeColorButtonProps>) {
  const { themeMode } = useThemeMode();
  const name = theme.replace("theme-", "");

  return (
    <Button
      variant={"outline"}
      size={"sm"}
      onPress={() => onClick(theme)}
      className={cn(
        themeMode,
        "w-full justify-start gap-2 border-2",
        selected ? " border-primary" : "border-transparent"
      )}
    >
      <span className={theme}>
        <div className={cn("h-4 w-4 rounded-full bg-primary text-primary-foreground")}>
          {selected && <CheckIcon className="h-4 w-4" />}
        </div>
      </span>
      <span className="sm capitalize">{name}</span>
    </Button>
  );
}

type ThemePickerProps = {
  theme: Theme;
  onChange: (theme: Theme) => void;
};

function ThemePicker({ theme, onChange }: Readonly<ThemePickerProps>) {
  return (
    <>
      <span className="text-sm">Color</span>
      <div className="grid w-full grid-cols-3 gap-1">
        {themes.map((t) => (
          <ThemeColorButton key={t} theme={t} selected={t === theme} onClick={() => onChange(t)} />
        ))}
      </div>
    </>
  );
}

function ThemeModePicker() {
  const { themeMode, setThemeMode } = useThemeMode();

  return (
    <>
      <span className="text-sm">Appearance</span>
      <div className="grid w-full grid-cols-3 gap-1">
        <Button
          onPress={() => setThemeMode("light")}
          variant={"outline"}
          size={"sm"}
          className={cn("font-bold dark:font-normal", themeMode === "light" ? "border-2 border-primary" : "")}
        >
          <SunIcon className="mr-1 h-4 w-4" />
          Light
        </Button>
        <Button
          onPress={() => setThemeMode("dark")}
          variant={"outline"}
          size={"sm"}
          className={cn("dark:font-bold", themeMode === "dark" ? "border-2 border-primary" : "")}
        >
          <MoonStarIcon className="mr-1 h-4 w-4" />
          Dark
        </Button>
        <Button
          onPress={() => setThemeMode("system")}
          variant={"outline"}
          size={"sm"}
          className={themeMode === "system" ? "border-2 border-primary" : ""}
        >
          <MoonStarIcon className="mr-1 h-4 w-4" />
          System
        </Button>
      </div>
    </>
  );
}

type ThemeRadiusPickerProps = {
  radius: ThemeRadius;
  onChange: (radius: ThemeRadius) => void;
};
const themeRadius: Record<string, ThemeRadius> = {
  "0": "radius-000",
  "0.3": "radius-030",
  "0.5": "radius-050",
  "0.75": "radius-075",
  "1": "radius-100"
};

function ThemeRadiusPicker({ radius, onChange }: Readonly<ThemeRadiusPickerProps>) {
  return (
    <>
      <span className="text-sm">Radius</span>
      <div className="grid w-full grid-cols-5 gap-1">
        {Object.entries(themeRadius)
          .sort((a, b) => Number.parseInt(a[0], 10) - Number.parseInt(b[0], 10))
          .map(([key, value]) => (
            <Button
              key={key}
              onPress={() => onChange(value)}
              variant={"outline"}
              size={"sm"}
              className={radius === value ? "border-2 border-primary" : ""}
            >
              {key}
            </Button>
          ))}
      </div>
    </>
  );
}

type ThemePanelOpacityPickerProps = {
  opacity: ThemePanelOpacity;
  onChange: (opacity: ThemePanelOpacity) => void;
};

function ThemePanelOpacityPicker({ opacity, onChange }: Readonly<ThemePanelOpacityPickerProps>) {
  return (
    <>
      <span className="text-sm">Background</span>
      <div className="grid w-full grid-cols-2 gap-1">
        <Button
          onPress={() => onChange("panel-solid")}
          variant={"outline"}
          size={"sm"}
          className={opacity === "panel-solid" ? "border-2 border-primary" : ""}
        >
          Solid
        </Button>
        <Button
          onPress={() => onChange("panel-translucent")}
          variant={"outline"}
          size={"sm"}
          className={opacity === "panel-translucent" ? "border-2 border-primary" : ""}
        >
          Translucent
        </Button>
      </div>
    </>
  );
}

type ThemeHueSelectorProps = {
  label: string;
} & ColorSliderProps;

const TRACK_THICKNESS = 28;
const THUMB_SIZE = 20;

function ThemeHueSelector({ label, ...props }: Readonly<ThemeHueSelectorProps>) {
  return (
    <ColorSlider {...props}>
      <div className="flex justify-between">
        <Label>{label}</Label>
        <SliderOutput />
      </div>
      <SliderTrack className="h-8 rounded-md">
        <ColorThumb
          className="top-4 h-8 w-8 rounded-full border-2"
          style={({ color }) => ({
            background: color.toString()
          })}
        />
      </SliderTrack>
    </ColorSlider>
  );
}
