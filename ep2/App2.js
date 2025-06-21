import React from "react";
import ReactDOM from "react-dom/client"

// JSX - HTML like syntax (not html in javascript)

// const jsxHeading = <h1 style={{color: "green"}}>✅ This is EP 2 JSX Output!</h1>; (React Element)

const JSXHeading = () => {
    return (
        <h1 style={{ color: "green" }}>✅ This is EP 2 JSX Output!</h1>
    )
};

const title = "King Kushagra"

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

// React Components

const HeadingComponent = () => {
    return <h2> First Way: This is made using React Functional Component </h2>
};

const Heading = () => <h2> Second Way: This is another made using React Functional Component </h2>;

const HeadingComponent2 = () => (
    <div id="container">
        <JSXHeading />
        <h2 className="Heading2"> Third Another Way: This is one more another made using React Functional Component </h2>
        <h2> {title} </h2>
    </div>
);



root.render(<HeadingComponent2 />);
