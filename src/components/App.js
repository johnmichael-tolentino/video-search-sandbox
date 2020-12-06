import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoItem from './VideoItem';
import VideoDetail from './VideoDetail';
import youtube from '../api/youtube';

class App extends React.Component {
	// Initialize our state.
	state = { video: [] };

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
		this.setState({ video: response.data.items });
	};

	render() {
		return (
			<div className="ui container">
				{/* Callback passed as prop to SearchBar */}
				<SearchBar onSearch={this.onSearch} />
				<VideoDetail />
				<VideoList>
					<VideoItem />
					<VideoItem />
					<VideoItem />
				</VideoList>
			</div>
		);
	}
}

export default App;
