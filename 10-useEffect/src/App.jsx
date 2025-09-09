import React, { use, useState } from "react";
import Children from "./Children";

// useState, userEffect, useCallback, useMemo, useRef, useContext

import "./index.css";

const App = () => {
  const [state, setState] = useState(false);
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setState((currentState) => !currentState);
  };

  const countHandler = () => {
    setCount((value) => {
      value++;
      return value;
    });
  };

  return (
    <div>
      <button onClick={countHandler}>+</button>
      <button onClick={onClickHandler}>switch</button>
      {state ? <Children count={count} /> : null}
    </div>
  );
};
export default App;
