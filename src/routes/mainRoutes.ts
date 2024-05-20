import { Router, Request, Response } from 'express';
import { AppDataSource } from '@/database/DataProvider';
import Resource from '@/database/entities/resources';
import postController from '@/apps/posts/post.controller';
const router = Router();

router.get('/resources', async (req: Request, res: Response) => {
	const allResources = await AppDataSource.getRepository(Resource).find();
	res.send(allResources);
});

router.post('/create-post/:id', postController.createPost);

router.get('/resources/category', async (req: Request, res: Response) => {
	const category = req.query.category;
	const allData = await AppDataSource.getRepository(Resource).find({
		where: { topic: category as string },
	});
	res.send(allData);
});

router.post('/create-resources', async (req: Request, res: Response) => {
	const { topic, link, description } = req.body;
	const createResources = new Resource();
	createResources.description = description;
	createResources.topic = topic;
	createResources.link = link;
	await AppDataSource.manager.save(createResources);
	res.send(true);
});

router.patch('/edit-resources/:id', async (req: Request, res: Response) => {
	const { id } = req.params;
	const { topic, link, description } = req.body;
	await AppDataSource.createQueryBuilder()
		.update(Resource)
		.set({ topic: topic, link: link, description: description })
		.where({ id: id })
		.execute();
	res.status(200).send(true);
});

router.delete('/delete-resources/:id', async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		console.log(id);
		await AppDataSource.createQueryBuilder()
			.delete()
			.from(Resource)
			.where({ id: id })
			.execute();
		res.status(200).send(true);
	} catch (error) {
		res.send(error);
	}
});

export default router;
