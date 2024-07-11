import { Text, type TextProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Description(props: Readonly<TextProps>) {
  return <Text {...props} slot="description" className={twMerge("text-gray-600 text-sm", props.className)} />;
}
