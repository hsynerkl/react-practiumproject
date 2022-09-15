import React from "react";

export const Button = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#8e7cff",
        color: "white",
        padding: "12px",
        fontSize: "12px",
        borderRadius: "10px",
        cursor: "pointer",
      }}
      onClick={props.onClick}
    >
      <div style={{ textAlign: "center" }}>{props.text}</div>
    </div>
  );
};
