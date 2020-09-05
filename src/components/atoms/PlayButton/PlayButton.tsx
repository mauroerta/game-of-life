import React, { useMemo } from "react";
import { IconButton } from "../IconButton";

type Props = {
  play: boolean;
  onClick: () => void;
};

export const PlayButton: React.FC<Props> = ({ play, onClick }) => {
  const emoji = useMemo(() => (play ? `⏸️` : `▶️`), [play]);
  const label = useMemo(() => (play ? `Pause` : `Play`), [play]);
  return <IconButton icon={emoji} label={label} onClick={onClick} />;
};
