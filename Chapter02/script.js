import React from "react";
import ReactDOM from "react-dom/client";

const para = React.createElement("h2",{id:"para"},"I am learning react from Akshay");
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(para);

