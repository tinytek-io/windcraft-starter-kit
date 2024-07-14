import { Bar, CartesianGrid, Legend, BarChart as ReBarChart, Tooltip, XAxis, YAxis } from "recharts";
import { getChartColor } from "./util";

export type GroupedData<T extends string> = { name: string } & Record<T, number>;

type BarChartProps<T extends string> = {
  data: GroupedData<T>[];
};

export function BarChart<T extends string>({ data }: BarChartProps<T>) {
  const dataKeys = Object.keys(data[0]).filter((key) => key !== "name") as T[];
  return (
    <ReBarChart width={730} height={250} data={data} className="bg-background text-foreground">
      <CartesianGrid strokeDasharray="3 3" className="!stroke-border" />
      <Tooltip
        wrapperClassName="!bg-background rounded-xl !border !border-border !p-2 !text-foreground !text-xs"
        labelClassName="!font-semibold !text-xs"
      />
      {dataKeys.map((key, index) => (
        <Bar key={key} dataKey={key} fill={getChartColor(index, dataKeys.length)} className="!stroke-border" />
      ))}
      <XAxis dataKey="name" className="!text-sm" stroke="hsl(var(--muted-foreground))" />
      <YAxis className="!text-sm" stroke="hsl(var(--muted-foreground))" />
      <Legend stroke="hsl(var(--muted-foreground))" />
    </ReBarChart>
  );
}
