import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <button className="bg-black text-white text-xs font-medium uppercase px-6 py-2 rounded-4xl">
        Target Audience
      </button>
      <button className="bg-gray-200 text-black text-xs font-medium uppercase px-6 py-2 rounded-4xl">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Header;
