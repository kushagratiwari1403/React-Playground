import React from "react";
import ReactDOM from "react-dom/client"


const heading = React.createElement("h1", { id: "heading" }, "Hello From React!");

// <div id="parent"> 
//   <div id="child">
//     <h1> I am an H1 Tag </h1>
//     <h2> I am an H2 Tag </h2>
// </div>
// </div>

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I'm an H1 Tag"),
        React.createElement("h2", {}, "I'm an H2 Tag")
    ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);