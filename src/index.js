import React from "react";
import ReactDom from "react-dom";
import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyAF5rZweLYfpB4rDeXyX2wXTgmDnv7Y5e0";

const App = () => {
	return <SearchBar />;
};

ReactDom.render(<App />, document.querySelector(".container"));
