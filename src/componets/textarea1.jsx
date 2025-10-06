import React from "react";
import "./textarea1.css";

const Textarea1 = ({ background, color, children }) => {
  const style = {
    backgroundColor: background || "#fff",
    color: color || "#000",
  };

  return (
    <div className="textarea-wrapper" style={style}>
      {children}
    </div>
  );
};

export default Textarea1;
