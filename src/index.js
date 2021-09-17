import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import { StateProvider } from "./Components/StateProvider";
import { initialState, reducer } from "./Components/reducer";
ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
