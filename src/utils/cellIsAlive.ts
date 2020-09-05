import { getNeighbors } from "./getNeighbors";

type CellIsAliveParams = {
  index: number;
  cells: boolean[];
  cols: number;
  rows: number;
};

export function getAliveNeighbors({
  index,
  cells,
  cols,
  rows,
}: CellIsAliveParams): number {
  const neighbors = getNeighbors({ index, cols, rows });
  const conditions = Object.values(neighbors);
  const alives = conditions.filter(([curr, condition]) => {
    return condition ? cells[curr] : false;
  });

  return alives.length;
}

export function cellIsAlive({
  index,
  cells,
  cols,
  rows,
}: CellIsAliveParams): boolean {
  const isAlive = !!cells[index];
  const alives = getAliveNeighbors({ index, cells, cols, rows });

  if (!isAlive) {
    return alives === 3;
  }

  return alives === 2 || alives === 3;
}
