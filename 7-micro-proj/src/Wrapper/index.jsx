import React from "react";
import "./index.css";

const BoxShadowWrapper = (props) => {
  return <div className="shadow">{props.children}</div>;
};

export default BoxShadowWrapper;
