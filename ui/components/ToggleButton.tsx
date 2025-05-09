/**
 * ref: https://react-spectrum.adobe.com/react-aria-tailwind-starter/?path=/docs/togglebutton--docs
 * ref: https://ui.shadcn.com/docs/components/toggle
 */
import {
  ToggleButton as AriaToggleButton,
  type ToggleButtonProps as AriaToggleButtonProps,
  composeRenderProps
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "./focusRing";

export type ToggleButtonProps = AriaToggleButtonProps & {
  /**
   * The variant of the toggle button.
   * @default primary
   */
  variant?: "primary" | "secondary" | "destructive" | "outline" | "ghost";
  /**
   * The size of the toggle button.
   * @default md
   */
  size?: "md" | "sm" | "lg";
};

const styles = tv({
  extend: focusRing,
  base: "inline-flex gap-1 items-center justify-center whitespace-nowrap rounded-md px-5 py-2 text-sm transition forced-colors:border-[ButtonBorder] forced-color-adjust-none cursor-pointer",
  variants: {
    variant: {
      primary: "[--text-color:var(--color-primary-foreground)] [--color:var(--color-primary)]",
      secondary: "[--text-color:var(--color-secondary-foreground)] [--color:var(--color-secondary)]",
      destructive: "[--text-color:var(--color-destructive-foreground)] [--color:var(--color-destructive)]",
      outline:
        "border border-input [--text-color:var(--color-accent-foreground)] [--color:var(--color-accent)]",
      ghost: "[--text-color:var(--color-accent-foreground)] [--color:var(--color-accent)]"
    },
    size: {
      sm: "h-9 px-3",
      md: "h-10 px-4 py-2",
      lg: "h-11 px-6"
    },
    isDisabled: {
      true: "pointer-events-none opacity-50"
    },
    isSelected: {
      false:
        "bg-background text-foreground hover:bg-(--color) hover:text-(--text-color) pressed:opacity-90 hover:opacity-50",
      true: "text-(--text-color) bg-(--color) border-(--color) pressed:opacity-80 hover:opacity-90"
    }
  },
  defaultVariants: {
    variant: "secondary",
    size: "md"
  }
});

export function ToggleButton({ size, variant, ...props }: Readonly<ToggleButtonProps>) {
  return (
    <AriaToggleButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        styles({ ...renderProps, size, variant, className })
      )}
    />
  );
}
