import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoItem from './VideoItem';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';

class App extends React.Component {
	// Initialize our states.

	state = { videos: [], selectedVideo: null };

	// Callback passed as prop in SearchBar.
	// When invoked, it's passed a search term which will be used with Youtube API.
	// The returned response will be set as the App's state and passed as a prop.
	onSearch = async (search) => {
		// Axios get method takes two arguments: URL & Options object.
		// Params object is passed with the Youtube API 'q' parameter.
		const response = await youtube.get('/search', {
			params: {
				q: search,
			},
		});

		// The state gets updated with an array of the fetched results.
		this.setState({ videos: response.data.items });
	};

	// When a user clicks on a VideoItem, the selectedVideo state property gets updated to that VideoItem, which will be passed to VideoDetail
	onSelect = (video) => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="ui container">
				{/* Callback passed as prop to SearchBar */}
				<SearchBar onSearch={this.onSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList videos={this.state.videos} onSelect={this.onSelect}>
					<VideoItem />
				</VideoList>
			</div>
		);
	}
}

export default App;
