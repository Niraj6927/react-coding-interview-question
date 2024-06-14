// Implement basic toggle switch component.

import React, { useState } from "react";

function Five() {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div>
      <input  style={{color: 'yellowgreen'}}type="checkbox" onChange={handleToggle} />
      <p style={{color: 'blue', backgroundColor: 'white', fontSize: '40px'}}> {isToggle ? "on" : "off"}</p>
    </div>
  );
}

export default Five;
