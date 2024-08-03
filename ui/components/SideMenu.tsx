import logoWrapUrl from "@/docs/public/windcraft-logo-text.webp";
import logoMarkUrl from "@/docs/public/windcraft-logo.webp";
import { ChevronsLeftIcon, type LucideIcon } from "lucide-react";
import { createContext, useCallback, useContext, useState } from "react";
import { tv } from "tailwind-variants";
import { Button } from "./Button";
import { Dialog, DialogTrigger } from "./Dialog";
import { Modal } from "./Modal";
import { Tooltip, TooltipTrigger } from "./Tooltip";
import { useRouter } from "@/lib/useRouter";

const collapsedContext = createContext(false);

const menuButtonStyles = tv({
  base: "flex text-base font-normal w-full justify-start transition-all duration-300",
  variants: {
    isCollapsed: {
      true: "gap-0 ease-out",
      false: "gap-4 ease-in"
    }
  }
});

const menuTextStyles = tv({
  base: "text-foreground transition-all duration-300 text-start",
  variants: {
    isCollapsed: {
      true: "w-0 opacity-0 text-xs ease-out",
      false: "w-fit opacity-100 text-base ease-in"
    }
  }
});

const menuButtonContainerStyles = tv({
  base: "px-2 border-r-2 w-full",
  variants: {
    isSelected: {
      true: "border-primary",
      false: "border-transparent"
    }
  }
});

type MenuButtonProps = {
  icon: LucideIcon;
  label: string;
  href: string;
  isSelected?: boolean;
  onPress?: () => void;
};

export function MenuButton({ icon: Icon, label, href: to, onPress, isSelected }: Readonly<MenuButtonProps>) {
  const isCollapsed = useContext(collapsedContext);
  const { navigate } = useRouter();
  const onPressHandle = useCallback(() => {
    if (to != null) navigate({ to });
    if (onPress != null) onPress();
  }, [to, onPress, navigate]);

  return (
    <TooltipTrigger delay={300}>
      <div
        className={menuButtonContainerStyles({ isSelected: to != null ? to === window.location.pathname : isSelected })}
      >
        <Button variant="link" className={menuButtonStyles({ isCollapsed })} onPress={onPressHandle}>
          <Icon className="h-6 w-6 shrink-0 grow-0 stroke-foreground" />
          <div className={menuTextStyles({ isCollapsed })}>{label}</div>
        </Button>
        {isCollapsed && <Tooltip placement="right">{label}</Tooltip>}
      </div>
    </TooltipTrigger>
  );
}

const sideMenuStyles = tv({
  base: "relative hidden sm:flex flex-col py-4 transition-all duration-300 items-start shrink-0 grow-0 z-50 bg-white/80 dark:bg-black/20 backdrop-blur-sm",
  variants: {
    isCollapsed: {
      true: "w-[72px] gap-2 ease-out",
      false: "w-72 gap-4 pl-6 ease-in"
    }
  }
});

const chevronStyles = tv({
  base: "w-4 h-4 transition-all duration-300",
  variants: {
    isCollapsed: {
      true: "transform rotate-180 ease-out",
      false: "transform rotate-0 ease-in"
    }
  }
});

const logoWrapStyles = tv({
  base: "self-start  transition-all duration-300",
  variants: {
    isCollapsed: {
      true: "h-8 opacity-0 ease-out",
      false: "h-8 ease-in opacity-100"
    }
  }
});

const logoMarkStyles = tv({
  base: "self-start transition-all duration-300",
  variants: {
    isCollapsed: {
      true: "h-8 opacity-100 ease-in",
      false: "h-8 opacity-0 ease-out"
    }
  }
});

type SideMenuProps = {
  className?: string;
  children: React.ReactNode;
};

export function SideMenu({ className, children }: Readonly<SideMenuProps>) {
  const [isCollapsed, setIsCollapsed] = useState(() => !window.matchMedia("(min-width: 1024px)").matches);

  const toggleCollapse = () => {
    setIsCollapsed((v) => !v);
  };

  return (
    <>
      <collapsedContext.Provider value={isCollapsed}>
        <div className={sideMenuStyles({ isCollapsed, className })}>
          <div className="h-20 px-2 w-full">
            <Button
              variant="ghost"
              size="sm"
              onPress={toggleCollapse}
              className="absolute top-3.5 right-0 rounded-r-none border-border border-r-2 hover:bg-transparent hover:text-muted-foreground"
            >
              <ChevronsLeftIcon className={chevronStyles({ isCollapsed })} />
            </Button>
            <div className="pr-8">
              <img src={logoWrapUrl} alt="Logo Wrap" className={logoWrapStyles({ isCollapsed })} />
            </div>
            <div className="flex pt-4 pl-3">
              <img src={logoMarkUrl} alt="Logo" className={logoMarkStyles({ isCollapsed })} />
            </div>
          </div>
          {children}
        </div>
      </collapsedContext.Provider>
      <collapsedContext.Provider value={false}>
        <div className="absolute right-2 bottom-2 z-50 sm:hidden">
          <DialogTrigger>
            <Button aria-label="Help" variant="icon">
              <img src={logoMarkUrl} alt="Logo" className="h-8 w-8" />
            </Button>
            <Modal position="left" fullSize isDismissable>
              <Dialog className="w-60 p-0">
                <div className="pb-8 px-2 pt-2">
                  <img src={logoWrapUrl} alt="Logo Wrap" />
                </div>
                {children}
              </Dialog>
            </Modal>
          </DialogTrigger>
        </div>
      </collapsedContext.Provider>
    </>
  );
}

const sideMenuSeparatorStyles = tv({
  base: "text-muted-foreground border-b-0 font-semibold uppercase transition-all duration-300 leading-4",
  variants: {
    isCollapsed: {
      true: "h-0 w-6 text-muted-foreground/0 border-b-4 border-border/100 text-[0px] pt-0 self-center ease-out",
      false: "h-8 w-full border-border/0 text-xs pt-4 ease-in"
    }
  }
});

type SideMenuSeparatorProps = {
  children: React.ReactNode;
};

export function SideMenuSeparator({ children }: Readonly<SideMenuSeparatorProps>) {
  const isCollapsed = useContext(collapsedContext);
  return (
    <div className="pl-6 pr-2">
      <div className={sideMenuSeparatorStyles({ isCollapsed })}>{children}</div>
    </div>
  );
}
