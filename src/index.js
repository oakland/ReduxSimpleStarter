import React from "react";
import ReactDom from "react-dom";

const App = () => {
	return <div>Hi, React!</div>;
};

ReactDom.render(<App />, document.querySelector(".container"));
