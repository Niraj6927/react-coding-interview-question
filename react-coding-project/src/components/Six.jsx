// Create a component that fetches data from an API and display it

import React, { useState, useEffect } from "react";

function Six() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h2 style={{color: 'greenyellow'}}>Title: {data.title}</h2>
          <h2 style={{color: 'crimson'}}>Body: {data.body}</h2>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Six;
