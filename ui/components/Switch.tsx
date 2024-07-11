/**
 * This WindCraft component is based off the React Aria Components Tailwind Starter Kit.
 * Most files are heavily modified adding more styles, variants and theming
 * to make it more versatile and closer to the Shadcn-ui theme and simple design tokens.
 *
 * Please include the RAC license when reusing this component, give due credit
 * and support the Open Source Community :)
 */
import type React from "react";
import { Switch as AriaSwitch, type SwitchProps as AriaSwitchProps } from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "./focusRing";
import { composeTailwindRenderProps } from "./utils";

export interface SwitchProps extends Omit<AriaSwitchProps, "children"> {
  children: React.ReactNode;
}

const trackStyles = tv({
  extend: focusRing,
  base: "flex h-6 w-11 px-px items-center shrink-0 cursor-default rounded-full transition duration-200 ease-in-out shadow-inner border border-transparent",
  variants: {
    isSelected: {
      false: "bg-input group-pressed:bg-input/80",
      true: "bg-primary forced-colors:!bg-[Highlight] group-pressed:bg-primary/80"
    },
    isDisabled: {
      true: "opacity-50 cursor-not-allowed"
    }
  }
});

const handleStyles = tv({
  base: "h-5 w-5 transform rounded-full bg-background outline outline-1 -outline-offset-1 outline-transparent shadow transition duration-200 ease-in-out",
  variants: {
    isSelected: {
      false: "translate-x-0",
      true: "translate-x-[100%]"
    },
    isDisabled: {
      true: "forced-colors:outline-[GrayText]"
    }
  }
});

export function Switch({ children, className, ...props }: Readonly<SwitchProps>) {
  return (
    <AriaSwitch
      {...props}
      className={composeTailwindRenderProps(
        className,
        "group flex items-center gap-2 text-muted-foreground text-sm transition disabled:opacity-50 forced-colors:disabled:text-[GrayText]"
      )}
    >
      {(renderProps) => (
        <>
          <div className={trackStyles(renderProps)}>
            <span className={handleStyles(renderProps)} />
          </div>
          {children}
        </>
      )}
    </AriaSwitch>
  );
}
