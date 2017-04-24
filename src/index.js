import React, {Component} from "react";
import ReactDom from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoDetails from "./components/video_details";
import VideoList from "./components/video_list";
const API_KEY = "AIzaSyAF5rZweLYfpB4rDeXyX2wXTgmDnv7Y5e0";

class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch("skateboard");
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetails video={this.state.selectedVideo}/>
				<VideoList videos={this.state.videos} onVideoSelect={(video) => {this.setState({selectedVideo:video})}} />
			</div>
		);
	}
};

ReactDom.render(<App />, document.querySelector(".container"));
