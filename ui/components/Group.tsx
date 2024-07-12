/**
 * ref: https://react-spectrum.adobe.com/react-aria-tailwind-starter/?path=/docs/textfield--docs
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
