import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [num, setNum] = useState([10, 20, 30, 40]);
  const [userDetails, setUserDetails] = useState({
    userName: "Ameer Hamza",
    age: 32,
  });
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
    </div>
  );
};

export default App;
