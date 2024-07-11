/**
 * This WindCraft component is based off the React Aria Components Tailwind Starter Kit.
 * Most files are heavily modified adding more styles, variants and theming
 * to make it more versatile and closer to the Shadcn-ui theme and simple design tokens.
 *
 * Please include the RAC license when reusing this component, give due credit
 * and support the Open Source Community :)
 */
import { Link as AriaLink, type LinkProps as AriaLinkProps, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "./focusRing";

interface LinkProps extends AriaLinkProps {
  variant?: "primary" | "secondary";
  underline?: boolean | "hover";
  size?: "md" | "sm" | "lg";
}

const styles = tv({
  extend: focusRing,
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors cursor-default",
  variants: {
    variant: {
      primary: "text-primary hover:text-primary/90",
      secondary: "text-secondary-foreground hover:text-secondary-foreground/90",
      destructive: "text-destructive hover:text-destructive/90",
      ghost: "text-muted-foreground hover:text-muted-foreground/90"
    },
    underline: {
      true: "underline disabled:no-underline",
      hover: "hover:underline no-underline",
      false: "no-underline"
    },
    size: {
      md: "text-md",
      sm: "text-sm",
      lg: "text-lg"
    },
    isDisabled: {
      true: "opacity-50 pointer-events-none"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    underline: "hover"
  }
});

export function Link(props: Readonly<LinkProps>) {
  return (
    <AriaLink
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        styles({
          ...renderProps,
          className,
          variant: props.variant,
          size: props.size,
          underline: props.underline
        })
      )}
    />
  );
}
