import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {counter}</p>
      <div className="btns">
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
