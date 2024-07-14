import { CartesianGrid as ReCartesianGrid } from "recharts";
import type { Props } from "recharts/types/cartesian/CartesianGrid";

export function CartesianGrid({ className = "!stroke-border", strokeDasharray = "3 3", ...props }: Props) {
  return <ReCartesianGrid {...props} strokeDasharray={strokeDasharray} className={className} />;
}
