// import modules/packages
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// import app to be rendered
import App from "./components/App";

// get app entry point
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

// app rendering
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
