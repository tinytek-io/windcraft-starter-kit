import { Button } from "@/ui/components/Button";
import { Dialog } from "@/ui/components/Dialog";
import { Popover } from "@/ui/components/Popover";
import { SettingsIcon } from "lucide-react";
import { DialogTrigger } from "react-aria-components";
import { ThemeModeSelector } from "./ThemeSelector";

export function CustomizeThemeButton() {
  return (
    <DialogTrigger>
      <Button size="sm">
        <SettingsIcon className="h-4 w-4" />
        Customize
      </Button>
      <Popover>
        <Dialog className="w-96">
          <ThemeModeSelector />
        </Dialog>
      </Popover>
    </DialogTrigger>
  );
}
