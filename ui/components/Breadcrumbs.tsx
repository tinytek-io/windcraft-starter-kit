/**
 * This WindCraft component is based off the React Aria Components Tailwind Starter Kit.
 * Most files are heavily modified adding more styles, variants and theming
 * to make it more versatile and closer to the Shadcn-ui theme and simple design tokens.
 *
 * Please include the RAC license when reusing this component, give due credit
 * and support the Open Source Community :)
 */
import { ChevronRight } from "lucide-react";
import {
  Breadcrumb as AriaBreadcrumb,
  Breadcrumbs as AriaBreadcrumbs,
  type BreadcrumbProps,
  type BreadcrumbsProps,
  type LinkProps
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { Link } from "./Link";

export function Breadcrumbs<T extends object>(props: Readonly<BreadcrumbsProps<T>>) {
  return <AriaBreadcrumbs {...props} className={twMerge("flex gap-2", props.className)} />;
}

export function Breadcrumb(props: BreadcrumbProps & LinkProps) {
  return (
    <AriaBreadcrumb {...props} className={twMerge("flex items-center gap-2", props.className)}>
      <Link variant="primary" {...props} />
      {props.href && <ChevronRight className="h-3 w-3 text-muted-foreground" />}
    </AriaBreadcrumb>
  );
}
