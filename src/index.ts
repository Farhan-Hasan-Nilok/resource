import { AppDataSource } from '@/database/DataProvider';
import express, { Request, Response } from 'express';
import Resource from '@/database/entities/resources';
import cors from './lib/cors';
import mainRoutes from './routes/mainRoutes';
const port = process.env.PORT || 3000;
// const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

AppDataSource.initialize()
	.then(() => console.log('Postgres connected successfully'))
	.catch((err: Error) => console.error('Error postgres initialization', err));

app.get('/', (req: Request, res: Response) => {
	res.send('Hello, TypeScript Express!');
});

app.use('/api/v1', mainRoutes);

app.get('/resources/:id', async (req: Request, res: Response) => {
	const { id } = req.params;
	const _id = parseInt(id);
	// const allResources = await AppDataSource.getRepository(Resource).findOneBy({id: _id})
	const allResources = await AppDataSource.manager.findOneBy(Resource, {
		id: _id,
	});
	res.status(200).send(allResources);
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
