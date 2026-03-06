import React from "react";
import { Bookmark } from "lucide-react";

const Cards = (props) => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={props.logo} alt="" />
        </div>

        <button className="save-btn">
          Save <Bookmark size={15} strokeWidth={1} />
        </button>
      </div>
      <div className="content">
        <h4>
          {props.company} <span className="span">{props.datePosted}</span>
        </h4>
        <h2>{props.post}</h2>
        <span className="tags">{props.tag1}</span>
        <span className="tags">{props.tag2}</span>
      </div>
      <div className="footer">
        <div className="bottom">
          <h3>{props.pay}</h3>
          <span className="span">{props.location}</span>
        </div>
        <button className="btn">Apply Now</button>
      </div>
    </div>
  );
};

export default Cards;
