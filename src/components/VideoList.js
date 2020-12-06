import React from 'react';
import VideoItem from './VideoItem';

// 'video' object property is destructured from 'props' object
const VideoList = ({ videos, onSelect }) => {
	// Map through videos array and return a VideoItem component that will be passed video data as props for each video.
	const renderedList = videos.map((video) => {
		return <VideoItem key={video.id.videoId} video={video} onSelect={onSelect} />;
	});
	return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
