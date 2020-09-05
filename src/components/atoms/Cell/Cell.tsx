import React, { useMemo } from "react";

type Props = {
  cols: number;
  alive?: boolean;
  onClick: () => void;
};

export const Cell: React.FC<Props> = ({
  alive = false,
  cols,
  children,
  onClick,
}) => {
  const width = useMemo(() => `${100 / cols}%`, [cols]);
  const backgroundColor = useMemo(() => (alive ? "#34495e" : "#ecf0f1"), [
    alive,
  ]);
  const color = useMemo(() => (alive ? "#ecf0f1" : "#34495e"), [alive]);

  return (
    <div
      style={{
        width,
        height: "16.625px",
        backgroundColor,
        color,
        borderWidth: 1,
        borderColor: "red",
      }}
      role="button"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
