import { type FieldErrorProps, FieldError as AriaFieldError } from "react-aria-components";
import { composeTailwindRenderProps } from "./utils";

export function FieldError(props: Readonly<FieldErrorProps>) {
  return (
    <AriaFieldError
      {...props}
      className={composeTailwindRenderProps(props.className, "text-destructive text-sm forced-colors:text-[Mark]")}
    />
  );
}
