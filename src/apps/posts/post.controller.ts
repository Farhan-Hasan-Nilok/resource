import { Request, Response } from 'express';
import service from './post.service';
export class PostController {
	private static instance: PostController;
	private constructor() {}

	static getInstance() {
		if (!this.instance) {
			this.instance = new PostController();
		}
		return this.instance;
	}

	async createPost(req: Request, res: Response) {
		const { id } = req.params;
		const { title, content, url } = req.body;
		try {
			await service.createPost(title, content, url, parseInt(id));

			return res.status(200).send('Post created Successfully');
		} catch (error) {
			console.log(error);
			return res.status(200).send('Post cannot created');
		}
	}
}

export default PostController.getInstance();
