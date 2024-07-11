/**
 * This WindCraft component is based off the React Aria Components Tailwind Starter Kit.
 * Most files are heavily modified adding more styles, variants and theming
 * to make it more versatile and closer to the Shadcn-ui theme and simple design tokens.
 *
 * Please include the RAC license when reusing this component, give due credit
 * and support the Open Source Community :)
 */
import { Label as AriaLabel, type LabelProps } from "react-aria-components";
import { tv } from "tailwind-variants";

const labelStyles = tv({
  base: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
});

export function Label({ className, ...props }: Readonly<LabelProps>) {
  return <AriaLabel {...props} className={labelStyles({ className })} />;
}
