import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import "./Assignment.css";
// import logo from "./logo.png";
// import userIcon from "./user icon.png";

// Coding Assignment:

// ● Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

const header1 = React.createElement(
    "div",
    { className: "title" },
    [
        React.createElement("h1", { key: "1" }, "This is H1 tag."),
        React.createElement("h2", { key: "2" }, "This is H2 tag."),
        React.createElement("h3", { key: "3" }, "This is H3 tag.")
    ]
);

// Create the same element using JSX

const header2 = (
    <div className="title">
        <h1 key="h1"> This is H1 Tag</h1>
        <h2 key="h2"> This is H2 Tag</h2>
        <h3 key="h3"> This is H3 Tag</h3>
    </div>
)


const Headercomponent = () => {
    return <div className="title">
        <h1 key="h1"> This is H1 Tag</h1>
        <h2 key="h2"> This is H2 Tag</h2>
        <h3 key="h3"> This is H3 Tag</h3>
    </div>
};


// Create a Header Component from scratch using Functional Components with JSX

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="left">
          {/* <img src={logo} alt="Logo" /> */}
        </div>
        <div className="center">
          <input
            className="input"
            type="text"
            placeholder="Search anything you want..."
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="right">
          {/* <img src={userIcon} alt="User Icon" /> */}
        </div>
      </header>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);