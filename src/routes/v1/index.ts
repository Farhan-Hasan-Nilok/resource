import { AbstractRouter } from '@/abstracts/abstract.router';
import { Router } from 'express';
import ClientRouter from './client.routes';

class VersionOneRouter extends AbstractRouter {
	private static instance: VersionOneRouter;
	public router: Router;

	static getInstance() {
		if (!this.instance) {
			this.instance = new VersionOneRouter();
		}
		return this.instance;
	}

	protected initializeRoutes(): void {
		this.router.use('/client', ClientRouter); // this route will be for all the endpoint of this project
	}

	public getRoutes() {
		return this.router;
	}
}

export default VersionOneRouter.getInstance().getRoutes();
