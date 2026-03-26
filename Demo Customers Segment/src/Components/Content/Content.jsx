import React from "react";
import Left from "./Left";
import Right from "./Right";

const Content = (props) => {
  console.log(props.user[0])
  return (
    <div className=" flex h-9/10 pt-20"> 
      <Left />
      <Right user={props.user}/>
    </div>
  );
};

export default Content;
