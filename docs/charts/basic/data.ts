import type { GroupedData } from "@/ui/charts/util";

export const chartDataMedium: GroupedData<"uv" | "pv" | "av">[] = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E"
].map((name) => ({
  name,
  uv: getRandomInt(900, 3000),
  pv: getRandomInt(900, 3000),
  av: getRandomInt(900, 3000)
}));

export const chartDataLarge: GroupedData<"uv" | "pv" | "av" | "rv" | "tv" | "sv">[] = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E"
].map((name) => ({
  name,
  uv: getRandomInt(900, 3000),
  pv: getRandomInt(900, 3000),
  av: getRandomInt(900, 3000),
  rv: getRandomInt(900, 3000),
  tv: getRandomInt(900, 3000),
  sv: getRandomInt(900, 3000)
}));

export const chartDataMaximum: GroupedData<
  | "GDP Growth"
  | "Inflation Rate"
  | "Unemployment Rate"
  | "Interest Rates"
  | "Consumer Spending"
  | "Export Volume"
  | "Import Volume"
  | "Government Debt"
  | "Foreign Exchange Reserves"
>[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"].map(
  (name) => ({
    name,
    "GDP Growth": getRandomInt(300, 3000),
    "Inflation Rate": getRandomInt(300, 3000),
    "Unemployment Rate": getRandomInt(300, 3000),
    "Interest Rates": getRandomInt(300, 3000),
    "Consumer Spending": getRandomInt(300, 3000),
    "Export Volume": getRandomInt(300, 3000),
    "Import Volume": getRandomInt(300, 3000),
    "Government Debt": getRandomInt(300, 3000),
    "Foreign Exchange Reserves": getRandomInt(300, 3000)
  })
);

export const radarDataMedium: GroupedData<"Mike" | "Lily" | "Taylor">[] = [
  "Math",
  "Chinese",
  "English",
  "Geography",
  "Physics",
  "History"
].map((name) => ({
  name,
  Mike: getRandomInt(0, 150),
  Lily: getRandomInt(0, 150),
  Taylor: getRandomInt(0, 150)
}));

/**
 * Data for the radar chart. Using the category names "Math", "Chinese", "English", "Geography", "Physics", and "History".
 * The data is grouped by the categories and the students' names are the keys to the scores.
 * The scores are between 0 and 150. The data should be random and contain both high and low scores.
 */
export const radarDataLarge: GroupedData<"Mike" | "Lily" | "Taylor" | "Morgan" | "Casey" | "Jamie">[] = [
  "Math",
  "Chinese",
  "English",
  "Geography",
  "Physics",
  "History"
].map((name) => ({
  name,
  Mike: getRandomInt(0, 150),
  Lily: getRandomInt(0, 150),
  Taylor: getRandomInt(0, 150),
  Morgan: getRandomInt(0, 150),
  Casey: getRandomInt(0, 150),
  Jamie: getRandomInt(0, 150)
}));

export const radarDataBig: GroupedData<
  "Mike" | "Lily" | "Taylor" | "Morgan" | "Casey" | "Jamie" | "Avery" | "Riley" | "Quinn"
>[] = ["Math", "Chinese", "English", "Geography", "Physics", "History"].map((name) => ({
  name,
  Mike: getRandomInt(0, 150),
  Lily: getRandomInt(0, 150),
  Taylor: getRandomInt(0, 150),
  Morgan: getRandomInt(0, 150),
  Casey: getRandomInt(0, 150),
  Jamie: getRandomInt(0, 150),
  Avery: getRandomInt(0, 150),
  Riley: getRandomInt(0, 150),
  Quinn: getRandomInt(0, 150)
}));

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
