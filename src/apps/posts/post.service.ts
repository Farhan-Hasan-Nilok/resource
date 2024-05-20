import { AppDataSource } from '@/database/DataProvider';
import Post from '@/database/entities/post';

export class PostService {
	private static instance: PostService;

	private constructor() {}

	static getInstance() {
		if (!this.instance) {
			this.instance = new PostService();
		}
		return this.instance;
	}

	async createPost(title: string, content: string, url: string, id: number) {
		try {
			const posts = new Post();
			posts.title = title;
			posts.content = content;
			posts.url = url;
			posts.user = id;
			const insertedPost = await AppDataSource.manager.save(posts);
			return insertedPost;
		} catch (error) {}
	}
}

export default PostService.getInstance();
