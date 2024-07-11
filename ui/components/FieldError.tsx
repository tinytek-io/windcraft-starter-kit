/**
 * This WindCraft component is based off the React Aria Components Tailwind Starter Kit.
 * Most files are heavily modified adding more styles, variants and theming
 * to make it more versatile and closer to the Shadcn-ui theme and simple design tokens.
 *
 * Please include the RAC license when reusing this component, give due credit
 * and support the Open Source Community :)
 */
import { FieldError as AriaFieldError, type FieldErrorProps } from "react-aria-components";
import { composeTailwindRenderProps } from "./utils";

export function FieldError(props: Readonly<FieldErrorProps>) {
  return (
    <AriaFieldError
      {...props}
      className={composeTailwindRenderProps(props.className, "text-destructive text-sm forced-colors:text-[Mark]")}
    />
  );
}
