import React, { useEffect, useState } from "react";

const Shown = () => {
  const [count, setCount] = useState(0);
  // component enters the screen
  useEffect(() => {
    console.log("hi Hayat");
  }, []);

  // component leaves the screen
  useEffect(() => {
    return () => console.log("bye");
  }, []);

  // when component updates

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Shown;
