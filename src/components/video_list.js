import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = ({videos}) => {
	const videoItems = videos.map(video => {
		return <VideoListItem />
	});
	return (
		<ul>
			{videoItems}
		</ul>
	);
};

export default VideoList;