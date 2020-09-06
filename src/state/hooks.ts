import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  nextStep as nextStepAction,
  playAction,
  resetAction,
  randomAction,
  setCellAction,
  setCellsAction,
} from "./actions";
import {
  selectCells,
  selectCols,
  selectRows,
  selectStep,
  getIsLopping,
  selectIsPlaying,
} from "./selectors";

export function useGol() {
  const dispatch = useDispatch();
  const cells = useSelector(selectCells);
  const cols = useSelector(selectCols);
  const rows = useSelector(selectRows);
  const step = useSelector(selectStep);
  const play = useSelector(selectIsPlaying);
  const isLooping = useSelector(getIsLopping);

  const nextStep = useCallback(() => {
    dispatch(nextStepAction());
  }, [dispatch]);

  const random = useCallback(() => {
    dispatch(randomAction());
  }, [dispatch]);

  const reset = useCallback(() => {
    dispatch(resetAction());
  }, [dispatch]);

  const setPlay = useCallback(() => {
    dispatch(playAction());
  }, [dispatch]);

  const toggleCell = useCallback(
    (index: number) => {
      dispatch(setCellAction({ index }));
    },
    [dispatch]
  );

  const setCells = useCallback(
    (cells: boolean[]) => {
      dispatch(setCellsAction({ cells }));
    },
    [dispatch]
  );

  return {
    cells,
    play,
    cols,
    rows,
    step,
    isLooping,
    reset,
    random,
    setPlay,
    setCells,
    nextStep,
    toggleCell,
  };
}
