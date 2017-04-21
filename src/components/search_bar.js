import React from "react";

const SearchBar = () => {
	return <input onChange={e => console.log(e.target.value)}/>;
};

export default SearchBar;