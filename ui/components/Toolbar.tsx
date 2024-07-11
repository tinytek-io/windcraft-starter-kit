/**
 * This WindCraft component is based off the React Aria Components Tailwind Starter Kit.
 * Most files are heavily modified adding more styles, variants and theming
 * to make it more versatile and closer to the Shadcn-ui theme and simple design tokens.
 *
 * Please include the RAC license when reusing this component, give due credit
 * and support the Open Source Community :)
 */
import { Toolbar as AriaToolbar, type ToolbarProps, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";

export { Group as ToolbarGroup } from "react-aria-components";

const styles = tv({
  base: "flex gap-2",
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col items-start"
    }
  }
});

export function Toolbar(props: Readonly<ToolbarProps>) {
  return (
    <AriaToolbar
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) => styles({ ...renderProps, className }))}
    />
  );
}
