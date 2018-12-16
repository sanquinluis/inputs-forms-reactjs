import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 
			'Client-ID bb20e74d5cc4a862374014f8e6c5b4108ee4097db5c853574a26aaefcc3913f6'
	}
});