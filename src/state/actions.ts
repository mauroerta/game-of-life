import { createAction } from "@reduxjs/toolkit";
import { SetCellPayload, SetCellsPayload } from "./types";

export const nextStep = createAction("gol/NEXT_STEP");
export const resetAction = createAction("gol/RESET");
export const randomAction = createAction("gol/RANDOM");
export const playAction = createAction("gol/TOGGLE_PLAY");
export const setCellAction = createAction<SetCellPayload>("gol/SET_CELL");
export const setCellsAction = createAction<SetCellsPayload>("gol/SET_CELLS");
