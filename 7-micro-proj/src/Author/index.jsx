import React from "react";
import "./index.css";
const Author = (props) => {
  return (
    <div>
      <p className="name">Автор: {props.name}</p>
    </div>
  );
};

export default Author;
