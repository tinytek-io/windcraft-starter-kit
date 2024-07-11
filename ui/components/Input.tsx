/**
 * This WindCraft component is based off the React Aria Components Tailwind Starter Kit.
 * Most files are heavily modified adding more styles, variants and theming
 * to make it more versatile and closer to the Shadcn-ui theme and simple design tokens.
 *
 * Please include the RAC license when reusing this component, give due credit
 * and support the Open Source Community :)
 */
import type { InputProps as AriaInputProps } from "react-aria-components";
import { Input as AriaInput, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "./focusRing";

export interface InputProps extends AriaInputProps {
  isEmbedded?: boolean;
}

const inputStyles = tv({
  extend: focusRing,
  base: "min-w-0 flex-1 rounded-md border border-input bg-background px-2 py-1.5 text-foreground text-sm placeholder:text-muted-foreground",
  variants: {
    isInvalid: {
      true: "border-destructive"
    },
    isDisabled: {
      true: "opacity-50 cursor-not-allowed"
    },
    isFile: {
      true: "file:border-0 file:bg-transparent file:font-medium file:text-sm cursor-pointer file:cursor-pointer"
    },
    isEmbedded: {
      true: "border-0"
    }
  }
});

export function Input({ className, type, isEmbedded, ...props }: Readonly<InputProps>) {
  return (
    <AriaInput
      {...props}
      type={type}
      className={composeRenderProps(className, (className, { isFocusVisible, ...renderProps }) =>
        inputStyles({
          ...renderProps,
          isFile: type === "file",
          isFocusVisible: isEmbedded ? false : isFocusVisible,
          isEmbedded,
          className
        })
      )}
    />
  );
}
