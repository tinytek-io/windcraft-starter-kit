/**
 * This WindCraft component is based off the React Aria Components Tailwind Starter Kit.
 * Most files are heavily modified adding more styles, variants and theming
 * to make it more versatile and closer to the Shadcn-ui theme and simple design tokens.
 *
 * Please include the RAC license when reusing this component, give due credit
 * and support the Open Source Community :)
 */
import type { FormProps } from "react-aria-components";
import { Form as AriaForm } from "react-aria-components";
import { tv } from "tailwind-variants";

const formStyles = tv({
  base: "flex flex-col gap-4"
});

export function Form({ className, ...props }: Readonly<FormProps>) {
  return <AriaForm {...props} className={formStyles({ className })} />;
}
