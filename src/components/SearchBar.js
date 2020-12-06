import React from 'react';

class SearchBar extends React.Component {
	// Initialize our state.
	state = { search: '' };

	// Callback method for form.
	// Arrow Function to avoid 'this' error.
	onFormSubmit = (e) => {
		e.preventDefault();

		// Callback to send parent component information
		this.props.onSearch(this.state.search);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
					<label>Search a video!</label>
					<input
						type="text"
						value={this.state.search}
						onChange={(e) => {
							this.setState({ search: e.target.value });
						}}></input>
					<input type="submit"></input>
				</form>
			</div>
		);
	}
}

export default SearchBar;
