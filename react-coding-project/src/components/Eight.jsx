// Create a component that changes its background color when clicked.

import React, { useState } from "react";

function Eight() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleClick = () => {
    const newColor = backgroundColor === "white" ? "Blue" : "white";
    setBackgroundColor(newColor);
  };

  const changeBgColor = () => {
    document.body.style.backgroundColor = "Red";
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor,
        width: "200px",
        height: "200px",
        cursor: "pointer",
      }}
    >
      <button onClick={changeBgColor}>Change Web Page Color</button>
      Click to change the Background Color
    </div>
  );
}

export default Eight;
