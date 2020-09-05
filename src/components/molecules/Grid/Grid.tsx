import React, { useCallback, useMemo, useEffect } from "react";
import { Cell } from "../../atoms";
import { useGol } from "../../../state";

type Props = {
  play: boolean;
};

export const Grid: React.FC<Props> = ({ play }) => {
  const { cells, nextStep, cols, rows, toggleCell } = useGol();

  const onClick = useCallback(
    (index: number) => {
      toggleCell(index);
    },
    [toggleCell]
  );

  const renderItem = useCallback(
    (alive: boolean, index: number) => {
      return (
        <Cell
          key={index}
          alive={alive}
          cols={cols}
          onClick={() => onClick(index)}
        />
      );
    },
    [cols, onClick]
  );

  const renderedCells = useMemo(() => cells.map(renderItem), [
    cells,
    renderItem,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextStep();
    }, 100);

    if (!play) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [cols, nextStep, play, rows]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>{renderedCells}</div>
  );
};
