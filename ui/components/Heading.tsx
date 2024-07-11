/**
 * This WindCraft component is based off the React Aria Components Tailwind Starter Kit.
 * Most files are heavily modified adding more styles, variants and theming
 * to make it more versatile and closer to the Shadcn-ui theme and simple design tokens.
 *
 * Please include the RAC license when reusing this component, give due credit
 * and support the Open Source Community :)
 */
import { Heading as AriaHeading } from "react-aria-components";
import type { HeadingProps } from "react-aria-components";
import { tv } from "tailwind-variants";

const headingStyles = tv({
  base: "my-0 font-semibold text-xl leading-6"
});

export function Heading({ className, slot = "title", ...props }: Readonly<HeadingProps>) {
  return <AriaHeading {...props} slot={slot} className={headingStyles({ className })} />;
}
