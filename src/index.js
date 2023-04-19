import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/app.css"
import App from "./App";
import ContextProvider from "./context/contextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

