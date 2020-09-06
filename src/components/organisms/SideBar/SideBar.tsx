import React, { useMemo } from "react";
import { PlayButton, IconButton } from "../../atoms";
import { useGol } from "../../../state";

const sidebarStyle: React.CSSProperties = {
  display: "flex",
  margin: "auto",
  height: "100%",
  textAlign: "center",
  flexDirection: "column",
  justifyContent: "space-evenly",
};

export function SideBar() {
  const { step, play, isLooping, reset, random, setPlay } = useGol();

  const isLoopingIcon = useMemo(() => (isLooping ? `😵` : `👌`), [isLooping]);
  const isLoopingLabel = useMemo(() => (isLooping ? `Loop` : `Ok`), [
    isLooping,
  ]);

  return (
    <div style={sidebarStyle}>
      <IconButton icon={`🔀`} label="Random" onClick={random} />
      <PlayButton play={play} onClick={setPlay} />
      <IconButton icon={`🆑`} label="Clear" onClick={reset} />
      <IconButton icon={`${step}`} label="Step" />
      <IconButton icon={isLoopingIcon} label={isLoopingLabel} />
    </div>
  );
}
