type ColorIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

function getColorIndex(index: number, length: number) {
  if (index >= length) {
    throw new Error(`Index ${index} is out of bounds for length ${length}`);
  }
  return (length === 1 ? 1 : Math.ceil((index * 8) / (length - 1)) + 1) as ColorIndex;
}

const getChartColorHSL = (colorIndex: ColorIndex) => `hsl(var(--chart-${colorIndex}))`;

export function getChartColor(index: number, length: number) {
  return getChartColorHSL(getColorIndex(index, length));
}
