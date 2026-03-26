import React from "react";
import "remixicon/fonts/remixicon.css";
import LeftContent from "./LeftContent";

const Left = () => {
  return (
    <div className=" w-1/3 flex justify-between flex-col">
      <LeftContent />
      <i className="ri-arrow-right-up-line text-8xl"></i>
    </div>
  );
};

export default Left;
