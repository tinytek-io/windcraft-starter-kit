import { type LabelProps, Label as AriaLabel } from "react-aria-components";
import { tv } from "tailwind-variants";

const labelStyles = tv({
  base: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
});

export function Label({ className, ...props }: Readonly<LabelProps>) {
  return <AriaLabel {...props} className={labelStyles({ className })} />;
}
