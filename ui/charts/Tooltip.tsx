import { Tooltip as ReTooltip, type TooltipProps } from "recharts";
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

export function Tooltip<TValue extends ValueType, TName extends NameType>({
  labelClassName = "!font-semibold !text-xs !text-foreground",
  wrapperClassName = "!bg-background rounded-xl !border !border-border !p-2 !text-foreground !text-xs",
  itemStyle = { background: "hsl(var(--background))", color: "hsl(var(--foreground))" },
  ...props
}: TooltipProps<TValue, TName>) {
  return (
    <ReTooltip {...props} wrapperClassName={wrapperClassName} labelClassName={labelClassName} itemStyle={itemStyle} />
  );
}
