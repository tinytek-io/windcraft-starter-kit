/**
 * This WindCraft component is based off the React Aria Components Tailwind Starter Kit.
 * Most files are heavily modified adding more styles, variants and theming
 * to make it more versatile and closer to the Shadcn-ui theme and simple design tokens.
 *
 * Please include the RAC license when reusing this component, give due credit
 * and support the Open Source Community :)
 */
import { Dialog as AriaDialog, type DialogProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export { DialogTrigger } from "react-aria-components";

export function Dialog(props: Readonly<DialogProps>) {
  return (
    <AriaDialog
      {...props}
      className={twMerge(
        "relative max-h-[inherit] overflow-auto p-6 outline outline-0 [[data-placement]>&]:p-4",
        props.className
      )}
    />
  );
}
