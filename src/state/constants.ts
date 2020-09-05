export const DEFAULT_COLS = 100;
export const DEFAULT_ROWS = 40;

export const INITIAL_STATE = {
  cells: Array.from<boolean>({ length: DEFAULT_ROWS * DEFAULT_COLS }).map(
    () => false
  ),
  history: [],
  rows: DEFAULT_ROWS,
  cols: DEFAULT_COLS,
  step: 0,
};
