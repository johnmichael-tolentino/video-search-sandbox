import React from 'react';

class SearchBar extends React.Component {
	// Initialize our state that will accept the user's search.
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
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Search a Video</label>
						<input
							type="text"
							value={this.state.search}
							onChange={(e) => {
								this.setState({ search: e.target.value });
							}}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
