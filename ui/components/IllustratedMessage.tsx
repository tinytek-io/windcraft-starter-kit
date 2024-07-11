/**
 * This WindCraft component is styled close to the Shadcn-ui theme and
 * simple design tokens and inspired by the awesome Adobe Spectrum library.
 *
 * Please give due credit and support the Open Source Community :)
 */
import type { PropsWithChildren, ReactNode } from "react";

type IllustratedMessageProps = {
  title: string;
  image: ReactNode;
} & PropsWithChildren;

export function IllustratedMessage({ title, image, children }: Readonly<IllustratedMessageProps>) {
  return (
    <div className="flex flex-col items-center justify-center stroke-muted-foreground [&>svg]:mb-6">{children}</div>
  );
}

export function Heading({ children }: PropsWithChildren) {
  return <h1 className="max-w-md text-center font-semibold text-foreground text-xl">{children}</h1>;
}

export function Content({ children }: PropsWithChildren) {
  return <section className="max-w-md text-center font-base text-foreground text-sm">{children}</section>;
}
