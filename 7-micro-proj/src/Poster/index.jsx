import React from "react";
import Author from "../Author";
import "./index.css";

const Poster = (props) => {
  return (
    <div className="poster">
      <img src={props.img} alt={props.name} />
      <h2>{props.name}</h2>

      {typeof props.description === "string" && <h4>{props.description}</h4>}

      {props.author && <Author name={props.author.name} />}
    </div>
  );
};

export default Poster;
