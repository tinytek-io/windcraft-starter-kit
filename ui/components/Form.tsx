import type { FormProps } from "react-aria-components";
import { Form as AriaForm } from "react-aria-components";
import { tv } from "tailwind-variants";

const formStyles = tv({
  base: "flex flex-col gap-4"
});

export function Form({ className, ...props }: Readonly<FormProps>) {
  return <AriaForm {...props} className={formStyles({ className })} />;
}
