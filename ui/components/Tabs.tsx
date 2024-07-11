/**
 * This WindCraft component is based off the React Aria Components Tailwind Starter Kit.
 * Most files are heavily modified adding more styles, variants and theming
 * to make it more versatile and closer to the Shadcn-ui theme and simple design tokens.
 *
 * Please include the RAC license when reusing this component, give due credit
 * and support the Open Source Community :)
 */
import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabPanel as AriaTabPanel,
  Tabs as AriaTabs,
  type TabListProps,
  type TabPanelProps,
  type TabProps,
  type TabsProps,
  composeRenderProps
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "./focusRing";

const tabsStyles = tv({
  base: "flex gap-4",
  variants: {
    orientation: {
      horizontal: "flex-col",
      vertical: "flex-row w-[800px]"
    }
  }
});

export function Tabs(props: Readonly<TabsProps>) {
  return (
    <AriaTabs
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabsStyles({ ...renderProps, className })
      )}
    />
  );
}

const tabListStyles = tv({
  base: "flex gap-1 border-border",
  variants: {
    orientation: {
      horizontal: "flex-row border-b [&>*]:border-b-2",
      vertical: "flex-col items-start border-r [&>*]:border-r-2 [&>*]:w-full"
    }
  }
});

export function TabList<T extends object>(props: Readonly<TabListProps<T>>) {
  return (
    <AriaTabList
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabListStyles({ ...renderProps, className })
      )}
    />
  );
}

const tabProps = tv({
  extend: focusRing,
  base: "flex items-center cursor-default px-4 pt-1.5 pb-0.5 text-sm font-medium transition forced-color-adjust-none",
  variants: {
    isSelected: {
      false: "text-muted-foreground border-transparent",
      true: "text-foreground border-primary forced-colors:text-[HighlightText]"
    },
    isHovered: {
      true: "text-muted-foreground/90"
    },
    isFocusVisible: {
      true: "rounded-md border-transparent"
    },
    isDisabled: {
      true: "opacity-50 cursor-not-allowed"
    }
  }
});

export function Tab(props: Readonly<TabProps>) {
  return (
    <AriaTab
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabProps({ ...renderProps, className })
      )}
    />
  );
}

const tabPanelStyles = tv({
  extend: focusRing,
  base: "flex-1 p-4 text-sm text-foreground border border-border rounded-lg"
});

export function TabPanel(props: Readonly<TabPanelProps>) {
  return (
    <AriaTabPanel
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        tabPanelStyles({ ...renderProps, className })
      )}
    />
  );
}
