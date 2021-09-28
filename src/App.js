import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";

function App() {
  const [state, setState] = useState("Thomas");
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
