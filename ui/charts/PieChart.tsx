import { Legend, Pie, PieChart as RePieChart, ResponsiveContainer } from "recharts";
import { Tooltip } from "./Tooltip";
import { type GroupedData, getChartColor } from "./util";

type PieChartProps<T extends string> = {
  data: GroupedData<T>[];
  isAnimationActive?: boolean;
};

type Radius = {
  innerRadius?: number;
  outerRadius: number;
};

const radius: Radius[] = [
  { outerRadius: 60 },
  { innerRadius: 70, outerRadius: 90 },
  { innerRadius: 100, outerRadius: 120 },
  { innerRadius: 130, outerRadius: 150 },
  { innerRadius: 160, outerRadius: 180 },
  { innerRadius: 190, outerRadius: 210 },
  { innerRadius: 220, outerRadius: 240 },
  { innerRadius: 250, outerRadius: 270 },
  { innerRadius: 280, outerRadius: 300 }
];

export function PieChart<T extends string>({ data, isAnimationActive }: PieChartProps<T>) {
  const dataKeys = Object.keys(data[0]).filter((key) => key !== "name") as T[];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RePieChart>
        <Tooltip />
        {dataKeys.map((key, index) => (
          <Pie
            data={data}
            key={key}
            dataKey={key}
            cx="50%"
            cy="50%"
            stroke={getChartColor(index, dataKeys.length)}
            fill={getChartColor(index, dataKeys.length)}
            {...radius[index]}
            className="!stroke-border"
            paddingAngle={1}
            isAnimationActive={isAnimationActive}
          />
        ))}
        <Legend
          stroke="hsl(var(--muted-foreground))"
          payload={dataKeys.map((value, index) => ({
            value,
            type: "circle",
            color: getChartColor(index, dataKeys.length)
          }))}
        />
      </RePieChart>
    </ResponsiveContainer>
  );
}
