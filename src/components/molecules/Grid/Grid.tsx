import React, { useCallback, useMemo, useEffect } from "react";
import { Cell } from "../../atoms";

type Props = {
  play: boolean;
  cols: number;
  rows: number;
  cells: boolean[];
  nextStep: () => void;
  toggleCell: (index: number) => void;
};

export const Grid: React.FC<Props> = ({
  play,
  cells,
  cols,
  rows,
  nextStep,
  toggleCell,
}) => {
  const cellWidth = useMemo(() => `${100 / cols}%`, [cols]);

  const renderItem = useCallback(
    (alive: boolean, index: number) => {
      return (
        <Cell
          key={index}
          alive={alive}
          width={cellWidth}
          onClick={() => toggleCell(index)}
        />
      );
    },
    [cellWidth, toggleCell]
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
