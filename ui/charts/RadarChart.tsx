import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as ReRadarChart,
  ResponsiveContainer,
  XAxis,
  YAxis
} from "recharts";
import type { AxisDomain } from "recharts/types/util/types";
import { Tooltip } from "./Tooltip";
import { type GroupedData, getChartColor } from "./util";

type RadarChartProps<T extends string> = {
  data: GroupedData<T>[];
  domain: AxisDomain;
};

export function RadarChart<T extends string>({ data, domain }: RadarChartProps<T>) {
  const dataKeys = Object.keys(data[0]).filter((key) => key !== "name") as T[];
  const angle = 360 / dataKeys.length;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" className="!text-sm" stroke="hsl(var(--foreground))" />
        <PolarRadiusAxis angle={angle} domain={domain} className="!text-sm" stroke="hsl(var(--muted-foreground))" />

        <Tooltip />
        {dataKeys.map((key, index) => (
          <Radar
            key={key}
            dataKey={key}
            stroke={getChartColor(index, dataKeys.length)}
            fill={getChartColor(index, dataKeys.length)}
            fillOpacity={0.3}
            strokeWidth={2}
          />
        ))}
        <Legend stroke="hsl(var(--muted-foreground))" />
      </ReRadarChart>
    </ResponsiveContainer>
  );
}
