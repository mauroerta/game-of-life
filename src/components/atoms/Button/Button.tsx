import React from "react";

type Props = {
  style?: React.CSSProperties;
  onClick?: () => void;
};

const DEFAULT_STYLE: React.CSSProperties = {
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  textAlign: "center",
};

export const Button: React.FC<Props> = ({ children, style = {}, onClick }) => {
  return (
    <button onClick={onClick} style={{ ...DEFAULT_STYLE, ...style }}>
      {children}
    </button>
  );
};
