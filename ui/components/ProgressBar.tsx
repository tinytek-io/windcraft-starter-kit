/**
 * This WindCraft component is based off the React Aria Components Tailwind Starter Kit.
 * Most files are heavily modified adding more styles, variants and theming
 * to make it more versatile and closer to the Shadcn-ui theme and simple design tokens.
 *
 * Please include the RAC license when reusing this component, give due credit
 * and support the Open Source Community :)
 */
import { ProgressBar as AriaProgressBar, type ProgressBarProps as AriaProgressBarProps } from "react-aria-components";
import { Label } from "./Label";
import { composeTailwindRenderProps } from "./utils";

export interface ProgressBarProps extends AriaProgressBarProps {
  label?: string;
}

export function ProgressBar({ label, ...props }: Readonly<ProgressBarProps>) {
  return (
    <AriaProgressBar {...props} className={composeTailwindRenderProps(props.className, "flex flex-col gap-1")}>
      {({ percentage, valueText, isIndeterminate }) => (
        <>
          <div className="flex justify-between gap-2">
            <Label>{label}</Label>
            <span className="text-muted-foreground text-sm">{valueText}</span>
          </div>
          <div className="-outline-offset-1 relative h-2 w-64 overflow-hidden rounded-full bg-muted outline outline-1 outline-transparent">
            <div
              className={`absolute top-0 h-full rounded-full bg-info forced-colors:bg-[Highlight] ${isIndeterminate ? "slide-out-to-right-full repeat-infinite left-full animate-in duration-1000 ease-out [--tw-enter-translate-x:calc(-16rem-100%)]" : "left-0"}`}
              style={{ width: `${isIndeterminate ? 40 : percentage}%` }}
            />
          </div>
        </>
      )}
    </AriaProgressBar>
  );
}
