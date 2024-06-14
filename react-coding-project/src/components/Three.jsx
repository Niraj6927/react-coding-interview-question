// Create a form that takes user input and displays it in real-time

import React, { useState } from "react";

function Three() {
  const [input, setInput] = useState("Niraj");
  return (
    <div>
      <input
        type="text"
        style={{
          color: "red",
          height: "40px",
          width: "200px",
          fontSize: "2.5rem",
        }}
        value={input}
        onChange={(e)=> setInput(e.target.value)}
      />
      <p style={{color: 'blue', fontSize: '2rem'}}>User Input: {input} </p>
    </div>
  );
}

export default Three;
