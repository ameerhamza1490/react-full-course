import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [num, setNum] = useState(0);

  const incrementFunc = () => {
    setNum(num+1);
  };
  const decrementFunc = () => {
    setNum(num-1);
  };
  const increaseBy5 = () => {
    setNum(num+5);
  };

  return (
    <>
      <h1>{num}</h1>
      <button onClick={incrementFunc}>Increment</button>
      <button onClick={decrementFunc}>Decrement</button>
      <div>
        <button onClick={increaseBy5}>Increase by 5</button>
      </div>
    </>
  );
};

export default App;
