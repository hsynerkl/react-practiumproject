import React from "react";
import "./index.css";
export const InputWithText = (props) => {
  return (
    <>
      {props.type == "textarea" ? (
        <textarea
          className="shared-input"
          style={{
            color: "white",
            borderStyle: "none",
            borderBottom: "1px solid #8E7CFF",
            padding: "5px",
            background: "transparent",
            outline: "none",
            fontSize: "12px",
            maxWidth: "200px",
            maxHeight: "130px",
            minWidth: "200px",
            minHeight: "130px",
          }}
          placeholder={props.placeholder ? props.placeholder : "Name:"}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        ></textarea>
      ) : (
        <input
          className="shared-input"
          style={{
            color: "white",
            borderStyle: "none",
            borderBottom: "1px solid #8E7CFF",
            padding: "5px",
            background: "transparent",
            outline: "none",
            fontSize: "12px",
          }}
          placeholder={props.placeholder ? props.placeholder : "Name:"}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      )}
    </>
  );
};
