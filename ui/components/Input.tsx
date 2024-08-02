/**
 * ref: https://react-spectrum.adobe.com/react-aria-tailwind-starter/?path=/docs/textfield--docs
 * ref: https://ui.shadcn.com/docs/components/input
 */
import type { InputProps as AriaInputProps } from "react-aria-components";
import { Input as AriaInput, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRingBorderedField } from "./focusRing";

export interface InputProps extends Omit<AriaInputProps, "disabled"> {
  isDisabled?: boolean;
  isEmbedded?: boolean;
}

const inputStyles = tv({
  extend: focusRingBorderedField,
  base: "min-w-0 flex-1 items-center justify-center",
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
      true: "border-0 px-0 min-h-8 max-h-full w-full"
    }
  }
});

export function Input({ className, type, isEmbedded, isDisabled, ...props }: Readonly<InputProps>) {
  return (
    <AriaInput
      {...props}
      disabled={isDisabled}
      type={type}
      className={composeRenderProps(className, (className, { isFocusVisible, isDisabled, ...renderProps }) =>
        inputStyles({
          ...renderProps,
          isFile: type === "file",
          isFocusVisible: isEmbedded ? false : isFocusVisible,
          isEmbedded,
          isDisabled,
          className
        })
      )}
    />
  );
}
