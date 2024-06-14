// Build a list component to display the list of items

import React from "react";

function Four() {
  const items = ["item1", "item2", "item3", "item4", "item5", "item6"];

  return (
    <div>
      <ul>
        {items.map((item, index) => {
          return <li style={{color: "greenyellow"}} key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Four;
