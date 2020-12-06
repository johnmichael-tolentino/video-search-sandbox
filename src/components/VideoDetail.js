import React from 'react';

const VideoDetail = ({ video }) => {
	// Conditional Rendering for VideoDetail until a video is selected.
	if (!video) {
		return <div>Loading...</div>;
	}

	// Destructured video objects.
	const { videoId } = video.id;
	const { title, description } = video.snippet;

	const videoSrc = `https://www.youtube.com/embed/${videoId}`;
	return (
		<div>
			<div className="ui embed">
				<iframe title="Video Player" src={videoSrc} />
			</div>
			<div className="ui segment">
				<h4 className="ui header">{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
