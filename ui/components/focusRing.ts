/**
 * ref: https://react-spectrum.adobe.com/react-aria-tailwind-starter
 * ref: https://ui.shadcn.com/docs/components
 */
import { tv } from "tailwind-variants";

export const focusRing = tv({
  base: "outline outline-ring forced-colors:outline-[Highlight] outline-offset-2",
  variants: {
    isFocusVisible: {
      false: "outline-0",
      true: "outline-2"
    }
  }
});

export const focusRingBorderedField = tv({
  extend: focusRing,
  base: "leading-none flex items-center min-h-9 max-h-9 px-2 bg-background text-foreground border border-input rounded-md placeholder:text-muted-foreground text-sm"
});
