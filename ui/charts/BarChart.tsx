import { Bar, Legend, BarChart as ReBarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CartesianGrid } from "./CartesianGrid";
import { Tooltip } from "./Tooltip";
import { type GroupedData, getChartColor } from "./util";

type BarChartProps<T extends string> = {
  data: GroupedData<T>[];
  isAnimationActive?: boolean;
  className?: string;
};

export function BarChart<T extends string>({ data, isAnimationActive, className }: BarChartProps<T>) {
  const dataKeys = Object.keys(data[0]).filter((key) => key !== "name") as T[];
  return (
    <ResponsiveContainer width="100%" height="100%" className={className}>
      <ReBarChart data={data}>
        <CartesianGrid />
        <Tooltip />
        {dataKeys.map((key, index) => (
          <Bar
            key={key}
            dataKey={key}
            fill={getChartColor(index, dataKeys.length)}
            className="!stroke-border"
            isAnimationActive={isAnimationActive}
          />
        ))}
        <XAxis dataKey="name" className="!text-sm" stroke="hsl(var(--muted-foreground))" />
        <YAxis className="!text-sm" stroke="hsl(var(--muted-foreground))" />
        <Legend stroke="hsl(var(--muted-foreground))" />
      </ReBarChart>
    </ResponsiveContainer>
  );
}
