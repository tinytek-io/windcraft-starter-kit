/**
 * This WindCraft component is based off the React Aria Components Tailwind Starter Kit.
 * Most files are heavily modified adding more styles, variants and theming
 * to make it more versatile and closer to the Shadcn-ui theme and simple design tokens.
 *
 * Please include the RAC license when reusing this component, give due credit
 * and support the Open Source Community :)
 */
import { Separator as AriaSeparator, type SeparatorProps } from "react-aria-components";
import { tv } from "tailwind-variants";

const styles = tv({
  base: "bg-gray-300 dark:bg-zinc-600 forced-colors:bg-[ButtonBorder]",
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "w-px"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});

export function Separator(props: Readonly<SeparatorProps>) {
  return (
    <AriaSeparator {...props} className={styles({ orientation: props.orientation, className: props.className })} />
  );
}
