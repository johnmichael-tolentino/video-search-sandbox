import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
	// Initialize our state that will accept the user's search.
	const [search, setSearch] = useState('');

	// Callback method for form.
	// Arrow Function to avoid 'this' error.
	const onFormSubmit = (e) => {
		e.preventDefault();

		// Callback to send parent component information
		onSearch(search);
	};

	return (
		<div className="search-bar ui segment">
			<form className="ui form" onSubmit={(e) => onFormSubmit(e)}>
				<div className="field">
					<label>Search a Video</label>
					<input
						type="text"
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
