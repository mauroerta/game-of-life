import React from "react";
import { Button } from "../Button";

type Props = {
  icon: string;
  label: string;
  onClick?: () => void;
};

const buttonStyle: React.CSSProperties = {
  width: "100px",
  fontSize: "40px",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  textAlign: "center",
};

export const IconButton: React.FC<Props> = ({ icon, label, onClick }) => {
  return (
    <Button onClick={onClick} style={buttonStyle}>
      {icon}
      <span style={labelStyle}>{label}</span>
    </Button>
  );
};
