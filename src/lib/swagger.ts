import swaggerJSDoc from 'swagger-jsdoc';

import { version } from '../../package.json';

export const options: swaggerJSDoc.Options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Linkboss API Documentation',
			version: version || '0.0.0',
			description: 'Linkboss API Documentation',
		},
		components: {
			securitySchemes: {
				bearerAuth: {
					type: 'http',
					scheme: 'bearer',
					bearerFormat: 'JWT',
				},
			},
		},
		security: [
			{
				bearerAuth: [],
			},
		],
	},
	apis: [
		'./src/routes/mainRoutes.ts',
		// './src/routes/v1/index.ts',
		// './src/routes/v2/index.ts',
		// './src/apps/**/*.route.ts',
	],
};

export const swaggerSpec = swaggerJSDoc(options);

export const UIConfig = {
	customSiteTitle: 'Linkboss API Documentation',
	customCss: '.swagger-ui .topbar { display: none }',
	customfavIcon: '/assets/LinkBoss.png',
};
