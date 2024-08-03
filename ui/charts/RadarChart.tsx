import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as ReRadarChart,
  ResponsiveContainer
} from "recharts";
import type { AxisDomain } from "recharts/types/util/types";
import { Tooltip } from "./Tooltip";
import { type GroupedData, getChartColor } from "./util";

type RadarChartProps<T extends string> = {
  data: GroupedData<T>[];
  domain: AxisDomain;
  isAnimationActive?: boolean;
  fillOpacity?: number;
  className?: string;
};

export function RadarChart<T extends string>({
  data,
  domain,
  isAnimationActive,
  fillOpacity = 0.3,
  className
}: RadarChartProps<T>) {
  const dataKeys = Object.keys(data[0]).filter((key) => key !== "name") as T[];
  return (
    <ResponsiveContainer width="100%" height="100%" className={className}>
      <ReRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" className="!text-sm" stroke="hsl(var(--foreground))" />
        <PolarRadiusAxis
          angle={360 / data.length}
          domain={domain}
          className="!text-sm"
          stroke="hsl(var(--muted-foreground))"
        />

        <Tooltip />
        {dataKeys.map((key, index) => (
          <Radar
            key={key}
            dataKey={key}
            stroke={getChartColor(index, dataKeys.length)}
            fill={getChartColor(index, dataKeys.length)}
            fillOpacity={fillOpacity}
            strokeWidth={2}
            isAnimationActive={isAnimationActive}
          />
        ))}
        <Legend stroke="hsl(var(--muted-foreground))" />
      </ReRadarChart>
    </ResponsiveContainer>
  );
}
