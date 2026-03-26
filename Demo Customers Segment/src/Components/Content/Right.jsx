import React from "react";
import RightContent from "./RightContent";

const Right = (props) => {
  console.log(props.user[0])
  return <div className="w-2/3">
    <RightContent user = {props.user}/>
  </div>;
};

export default Right;
