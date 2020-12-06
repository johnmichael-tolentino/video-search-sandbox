import axios from 'axios';

// Youtube API KEY.
// Capitalized because it is a constant variable and will not be changed.
// It can be accessed by other people if this project is public.
const KEY = 'AIzaSyBeGXPzvwleJ_SfMBz6iAQZ6z-nksne7yo';

//  Creating and exporting a preconfigured Axios client for Youtube API.
export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	// Preconfigured params object.
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY,
	},
});
