export type MainState = {
  cells: boolean[];
  history: boolean[][];
  cols: number;
  rows: number;
  step: number;
  isPlaying: boolean;
};

export type SetCellPayload = {
  index: number;
};

export type SetCellsPayload = {
  cells: boolean[];
};
