/**
 * This WindCraft component is based off the React Aria Components Tailwind Starter Kit.
 * Most files are heavily modified adding more styles, variants and theming
 * to make it more versatile and closer to the Shadcn-ui theme and simple design tokens.
 *
 * Please include the RAC license when reusing this component, give due credit
 * and support the Open Source Community :)
 */
import { Group, type GroupProps, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "./focusRing";

export const fieldBorderStyles = tv({
  variants: {
    isFocusWithin: {
      false: "border-input forced-colors:border-[ButtonBorder]",
      true: "border-border forced-colors:border-[Highlight]"
    },
    isInvalid: {
      true: "border-destructive forced-colors:border-[Mark]"
    },
    isDisabled: {
      true: "opacity-50 cursor-not-allowed forced-colors:border-[GrayText]"
    }
  }
});

export const fieldGroupStyles = tv({
  extend: focusRing,
  base: "group flex items-center h-9 bg-background forced-colors:bg-[Field] border-2 rounded-md overflow-hidden",
  variants: fieldBorderStyles.variants
});

export function FieldGroup(props: Readonly<GroupProps>) {
  return (
    <Group
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        fieldGroupStyles({ ...renderProps, className })
      )}
    />
  );
}
