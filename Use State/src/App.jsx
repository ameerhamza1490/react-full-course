import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [num, setNum] = useState([10, 20, 30, 40]);
  const [userDetails, setUserDetails] = useState({
    userName: "Ameer Hamza",
    age: 32,
  });

  const [a, setA] = useState(10);
  const btnClick = () => {
    const newNum = [...num];
    newNum.push(50);
    setNum(newNum);
  };

  const changeName = () => {
    const newName = { ...userDetails };
    // newName.userName = "Hamza Khan";
    // setUserDetails(newName);

    setUserDetails((prev) => ({ ...prev, userName: "Hamza Khan" }));
  };

  //Batch update in react
  const addA = () => {
    setA((prev) => prev + 1);
    setA((prev) => prev + 1);
    setA((prev) => prev + 1);
  };


  return (
    <div>
      <div>
        <h1>{num}</h1>
        <button onClick={btnClick}>Click to Add 50</button>
      </div>
      <div>
        <h1>
          {userDetails.userName}, {userDetails.age}
        </h1>
        <button onClick={changeName}>Click here to change User Name.</button>
      </div>
      <div>
        <h1>{a}</h1>
        <button onClick={addA}>Click here to add 3</button>
      </div>
    </div>
  );
};

export default App;
