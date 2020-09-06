import React, { useMemo } from "react";

type Props = {
  width: string;
  alive?: boolean;
  onClick: () => void;
};

export const Cell: React.FC<Props> = ({
  alive = false,
  width,
  children,
  onClick,
}) => {
  const backgroundColor = useMemo(() => (alive ? "#34495e" : "#ecf0f1"), [
    alive,
  ]);
  const color = useMemo(() => (alive ? "#ecf0f1" : "#34495e"), [alive]);

  return (
    <div
      style={{
        width,
        minHeight: "16px",
        padding: 0,
        backgroundColor,
        color,
      }}
      role="button"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
