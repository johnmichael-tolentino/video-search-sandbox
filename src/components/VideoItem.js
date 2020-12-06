import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onSelect }) => {
	// Destructured values from video object.
	const { title, thumbnails } = video.snippet;

	return (
		<div
			className="video-item item"
			onClick={() => {
				onSelect(video);
			}}>
			<img alt={title} src={thumbnails.medium.url} className="ui image" />
			<div className="content">
				<div className="header">{title}</div>
			</div>
		</div>
	);
};

export default VideoItem;
