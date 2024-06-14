import React, { useState } from "react";

function Two() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ display:'flex', justifyContent: 'space-between', textAlign:'center'}}>
      <button  onClick={() => setCount(count + 1)}>+</button>
      <span style={{color: 'red'}}>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Two;
