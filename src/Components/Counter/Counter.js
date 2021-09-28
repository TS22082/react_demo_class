import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>This is from the counter component</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add One</button>
      <button onClick={() => setCount(count - 1)}>Sub One</button>
    </div>
  );
};

export default Counter;
