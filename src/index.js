import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import history from "./history";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App history={history} />
  </React.StrictMode>,
  document.getElementById("root")
);
