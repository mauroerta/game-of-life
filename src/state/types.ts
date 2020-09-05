export type MainState = {
  cells: boolean[];
  history: boolean[][];
  cols: number;
  rows: number;
  step: number;
};

export type SetCellPayload = {
  index: number;
};

export type SetCellsPayload = {
  cells: boolean[];
};
