// Build a timer that counts down from a specified time.

import React, { useEffect, useState } from "react";

function Seven() {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [time]);

  return <div style={{color: 'white'}}>Time Left: {time} seconds</div>;
}

export default Seven;
