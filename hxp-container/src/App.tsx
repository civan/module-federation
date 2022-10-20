import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "ui_app/Counter";

import "./index.css";

const App = () => (
  <div className="container">
    <Counter></Counter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
