import { Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CartesianGrid } from "./CartesianGrid";
import { Tooltip } from "./Tooltip";
import { type GroupedData, getChartColor } from "./util";

type LinePlotProps<T extends string> = {
  data: GroupedData<T>[];
  isAnimationActive?: boolean;
  className?: string;
};

export function LinePlot<T extends string>({ data, isAnimationActive, className }: LinePlotProps<T>) {
  const dataKeys = Object.keys(data[0]).filter((key) => key !== "name") as T[];
  return (
    <ResponsiveContainer width="100%" height="100%" className={className}>
      <LineChart data={data}>
        <CartesianGrid />
        <Tooltip />
        {dataKeys.map((key, index) => (
          <Line
            key={key}
            dataKey={key}
            type="monotone"
            stroke={getChartColor(index, dataKeys.length)}
            className="!stroke-border"
            activeDot={{ r: 4 }}
            isAnimationActive={isAnimationActive}
          />
        ))}
        <XAxis dataKey="name" className="!text-sm" stroke="hsl(var(--muted-foreground))" />
        <YAxis className="!text-sm" stroke="hsl(var(--muted-foreground))" />
        <Legend stroke="hsl(var(--muted-foreground))" />
      </LineChart>
    </ResponsiveContainer>
  );
}
