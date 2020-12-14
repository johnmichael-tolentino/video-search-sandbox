import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
	const [selectedVideo, setSelectedVideo] = useState(null);

	// Destructuring 'videos' state and 'onSearch' function from custom hook.
	// We are providing the custom hook a default search term, similar to useState.
	// We may now utilize the 'videos' state to update and pass search results.
	// We may now utilize 'onSearch' function to fetch API and update 'videos' state.
	const [videos, onSearch] = useVideos('how to code');

	// Whenever we receive a new set of 'videos,' we will select the first video.
	// This is to render the default video for VideoDetail component.
	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	return (
		<div className="ui container">
			{/* Callback passed as prop to SearchBar */}
			<SearchBar onSearch={onSearch} />
			<div className="ui grid">
				<div className="ui row">
					<div className="eleven wide column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="five wide column">
						<VideoList videos={videos} onSelect={setSelectedVideo} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
