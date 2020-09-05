import { createReducer } from "@reduxjs/toolkit";
import {
  nextStep,
  resetAction,
  randomAction,
  setCellAction,
  setCellsAction,
} from "./actions";
import { MainState, SetCellPayload, SetCellsPayload } from "./types";
import { INITIAL_STATE } from "./constants";
import { cellIsAlive } from "../utils";

const nextStepCase = (state: MainState): MainState => {
  const { cells, cols, rows, step } = state;
  const nextState = cells.map((_, index) => {
    return cellIsAlive({ index, cells, cols, rows });
  });
  return {
    ...state,
    cells: nextState,
    history: [nextState, ...state.history].slice(0, 3),
    step: step + 1,
  };
};

const randomCase = (state: MainState): MainState => {
  const { cols, rows } = state;
  const cells = Array.from<boolean>({ length: cols * rows }).map(
    () => Math.random() < 0.3
  );

  return {
    cells,
    history: [],
    rows,
    cols,
    step: 0,
  };
};

const resetCase = (state: MainState): MainState => {
  const { cols, rows } = state;
  const cells = Array.from<boolean>({ length: cols * rows }).fill(false);

  return {
    cells,
    history: [],
    rows,
    cols,
    step: 0,
  };
};

const setCellCase = (
  state: MainState,
  { payload }: { payload: SetCellPayload }
): MainState => {
  const { index } = payload;
  const { cells } = state;
  const newCells = cells.map((cell, currentIndex) => {
    return currentIndex === index ? !cell : cell;
  });

  return {
    ...state,
    cells: newCells,
  };
};

const setCellsCase = (
  state: MainState,
  { payload }: { payload: SetCellsPayload }
): MainState => {
  const { cells } = payload;
  const { cols, rows } = state;
  return {
    ...state,
    cells: cells.slice(0, cols * rows),
    step: 0,
  };
};

export const gofReducer = createReducer<MainState>(INITIAL_STATE, {
  [nextStep.type]: nextStepCase,
  [resetAction.type]: resetCase,
  [randomAction.type]: randomCase,
  [setCellAction.type]: setCellCase,
  [setCellsAction.type]: setCellsCase,
});
