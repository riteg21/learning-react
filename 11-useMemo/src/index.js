import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = {
  1: { id: 1, name: "Vladilen", age: 26 },
  2: { id: 2, name: "Elena", age: 21 },
  3: { id: 3, name: "Alex", age: 22 },
};

root.render(
  <React.StrictMode>
    <App users={users} />
  </React.StrictMode>
);
