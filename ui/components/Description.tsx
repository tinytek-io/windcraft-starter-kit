/**
 * This WindCraft component is based off the React Aria Components Tailwind Starter Kit.
 * Most files are heavily modified adding more styles, variants and theming
 * to make it more versatile and closer to the Shadcn-ui theme and simple design tokens.
 *
 * Please include the RAC license when reusing this component, give due credit
 * and support the Open Source Community :)
 */
import { Text, type TextProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Description(props: Readonly<TextProps>) {
  return <Text {...props} slot="description" className={twMerge("text-gray-600 text-sm", props.className)} />;
}
