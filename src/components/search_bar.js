import React, {Component} from "react";

class SearchBar extends Component {
	render() {
		// return <input onChange={this.onInputChange} />;
		return <input onChange={e => console.log(e.target.value)} />;
	}

	// onInputChange(e) {
	// 	console.log(e.target.value);
	// }
}

export default SearchBar;