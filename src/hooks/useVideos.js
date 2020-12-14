// Custom hook for searching and making use of a list of videos.
import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		onSearch(defaultSearchTerm);
	}, [defaultSearchTerm]);

	const onSearch = async (search) => {
		const response = await youtube.get('/search', {
			params: {
				q: search,
			},
		});

		setVideos(response.data.items);
	};

	return [videos, onSearch];
};

export default useVideos;
