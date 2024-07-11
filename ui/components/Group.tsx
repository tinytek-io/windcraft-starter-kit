/**
 * This WindCraft component is based off the React Aria Components Tailwind Starter Kit.
 * Most files are heavily modified adding more styles, variants and theming
 * to make it more versatile and closer to the Shadcn-ui theme and simple design tokens.
 *
 * Please include the RAC license when reusing this component, give due credit
 * and support the Open Source Community :)
 */
import type { GroupProps } from "react-aria-components";
import { Group as AriaGroup } from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "./focusRing";

const styles = tv({
  extend: focusRing,
  base: "rounded-md border-2 border-border [&>*:not(:last-child)]:border-r-2 [&>*:not(:last-child)]:rounded-r-none"
});
export function Group({ className, children, ...props }: Readonly<GroupProps>) {
  return (
    <AriaGroup {...props} className={styles}>
      {children}
    </AriaGroup>
  );
}
