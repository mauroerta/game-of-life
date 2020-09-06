import React from "react";
import { useGol } from "../../../state";
import { Grid } from "../../molecules";
import { SideBar } from "../SideBar";

const sidebarStyle: React.CSSProperties = {
  flex: 0.05,
};
const gridStyle: React.CSSProperties = {
  flex: 0.95,
};

export function Gol() {
  const { play, cells, cols, rows, nextStep, toggleCell } = useGol();

  return (
    <div style={{ display: "flex" }}>
      <div style={sidebarStyle}>
        <SideBar />
      </div>
      <div style={gridStyle}>
        <Grid
          play={play}
          cells={cells}
          cols={cols}
          rows={rows}
          nextStep={nextStep}
          toggleCell={toggleCell}
        />
      </div>
    </div>
  );
}
