import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoItem from './VideoItem';
import VideoDetail from './VideoDetail';

class App extends React.Component {
	// Initialize our state.
	state = { video: '' };

	// Callback passed as prop in SearchBar and, when invoked, passes user's search back to App component.
	onSearch = (search) => {
		this.setState({ video: search });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onSearch={this.onSearch} />
			</div>
		);
	}
}

export default App;
