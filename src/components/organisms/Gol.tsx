import React, { useState, useCallback } from "react";
import { PlayButton, IconButton } from "../atoms";
import { Grid } from "../molecules";
import { useGol } from "../../state";

function getGrid(cols: number, rows: number) {
  return Array.from({ length: cols * rows })
    .fill(true)
    .map((_, index) => {
      return Math.floor(index / cols) % 2 === 0;
    });
}

export function Gol() {
  const { step, isLooping, cols, rows, setCells, random, reset } = useGol();
  const [play, setPlay] = useState(false);

  const toggle = useCallback(() => {
    setPlay((prev) => !prev);
  }, []);

  const makeGrid = useCallback(() => {
    const gridPattern = getGrid(cols, rows);
    setCells(gridPattern);
  }, [setCells, cols, rows]);

  return (
    <div className="App">
      <Grid play={play} />
      <div
        style={{
          display: "flex",
          margin: "auto",
          textAlign: "center",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <IconButton icon={`🔀`} label="Random" onClick={random} />
        <PlayButton play={play} onClick={toggle} />
        <IconButton icon={`🆑`} label="Clear" onClick={reset} />
        <IconButton icon={`${step}`} label="Step" onClick={makeGrid} />
        <IconButton
          icon={isLooping ? `😵` : `👌`}
          label={`${isLooping ? `Loop` : `Ok`}`}
        />
      </div>
    </div>
  );
}
