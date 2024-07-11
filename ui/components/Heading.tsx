import { Heading as AriaHeading } from "react-aria-components";
import type { HeadingProps } from "react-aria-components";
import { tv } from "tailwind-variants";

const headingStyles = tv({
  base: "my-0 font-semibold text-xl leading-6"
});

export function Heading({ className, slot = "title", ...props }: Readonly<HeadingProps>) {
  return <AriaHeading {...props} slot={slot} className={headingStyles({ className })} />;
}
