import { createSelector } from "@reduxjs/toolkit";
import { MainState } from "./types";
import { isLooping } from "../utils";

function getState(state: MainState) {
  return state;
}

export const selectCells = createSelector(
  getState,
  (state: MainState): boolean[] => state.cells
);

export const selectCols = createSelector(
  getState,
  (state: MainState): number => state.cols
);

export const selectRows = createSelector(
  getState,
  (state: MainState): number => state.cols
);

export const selectStep = createSelector(
  getState,
  (state: MainState): number => state.step
);

export const selectIsPlaying = createSelector(
  getState,
  (state: MainState): boolean => state.isPlaying
);

export const getIsLopping = createSelector(
  getState,
  (state: MainState): boolean => {
    const { history } = state;
    return isLooping(history);
  }
);
