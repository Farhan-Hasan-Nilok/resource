import cors from 'cors';

export default () =>
	cors({
		origin: '*',
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
		allowedHeaders: [
			'Access-Control-Allow-Headers',
			'Origin, X-Requested-With, Content-Type, Accept',
		],
		credentials: false,
	});
