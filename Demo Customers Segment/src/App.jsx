import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
const App = () => {
  const user = [
    
    {
      userImg: "https://i.pinimg.com/1200x/57/be/84/57be849433fc4628a2b82122fd2284d8.jpg",
      tag: "Underserved",
      color: "lightseagreen",
    },
    {
      userImg: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Underbanked",
      color: "orange",
    },
    {
      userImg: "https://i.pinimg.com/1200x/be/b2/b9/beb2b9667934b504724d4c5b989d9e76.jpg",
      tag: "Satisfied",
      color: "pink",
    },
    {
      userImg: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Satisfied",
      color: "royalblue",
    },
    {
      userImg: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Average",
      color: "black",
    },
  ];
  console.log(user[0].color)
  return (
    <div className="px-20 pt-5 h-screen">
      <Header />
      <Content user={user} />
    </div>
  );
};
export default App;
