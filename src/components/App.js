import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';

const App = () => {
	// Initialize our states.
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	// Callback passed as prop in SearchBar.
	// When invoked, it's passed a search term which will be used with Youtube API.
	// The returned response will be set as the App's state and passed as a prop.
	const onSearch = async (search) => {
		// Axios get method takes two arguments: URL & Options object.
		// Params object is passed with the Youtube API 'q' parameter.
		const response = await youtube.get('/search', {
			params: {
				q: search,
			},
		});

		// The state gets updated with an array of the fetched results.
		// State for VideoDetail is set to render as the first video from VideoList.
		setVideos(response.data.items);
		setSelectedVideo(response.data.items[0]);
	};

	// When a user clicks on a VideoItem, the selectedVideo state property gets updated to that VideoItem, which will be passed to VideoDetail
	const onSelect = (video) => {
		setSelectedVideo(video);
	};

	// Sets a default search for when users open the application.
	useEffect(() => {
		onSearch('how to code');
	}, []);

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
						<VideoList videos={videos} onSelect={onSelect} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
