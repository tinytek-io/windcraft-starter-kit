import { Area, Legend, AreaChart as ReAreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CartesianGrid } from "./CartesianGrid";
import { Tooltip } from "./Tooltip";
import { type GroupedData, getChartColor } from "./util";

type AreaChartProps<T extends string> = {
  data: GroupedData<T>[];
  isAnimationActive?: boolean;
  className?: string;
};

export function AreaChart<T extends string>({ data, isAnimationActive, className }: AreaChartProps<T>) {
  const dataKeys = Object.keys(data[0]).filter((key) => key !== "name") as T[];
  return (
    <ResponsiveContainer width="100%" height="100%" className={className}>
      <ReAreaChart data={data}>
        <CartesianGrid />
        <Tooltip />
        {dataKeys.map((key, index) => (
          <Area
            key={key}
            dataKey={key}
            type="monotone"
            stroke={getChartColor(index, dataKeys.length)}
            fill={getChartColor(index, dataKeys.length)}
            className="!stroke-border"
            activeDot={{ r: 4 }}
            isAnimationActive={isAnimationActive}
          />
        ))}
        <XAxis dataKey="name" className="!text-sm" stroke="hsl(var(--muted-foreground))" />
        <YAxis className="!text-sm" stroke="hsl(var(--muted-foreground))" />
        <Legend stroke="hsl(var(--muted-foreground))" />
      </ReAreaChart>
    </ResponsiveContainer>
  );
}
