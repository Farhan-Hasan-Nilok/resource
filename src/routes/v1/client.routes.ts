import { AbstractRouter } from '@/abstracts/abstract.router';
import CompanyRouter from '@/apps/company/company.route';
import { Router } from 'express';

export class ClientRouter extends AbstractRouter {
	private static instance: ClientRouter;
	public router: Router;

	static getInstance() {
		if (!this.instance) {
			this.instance = new ClientRouter();
		}
		return this.instance;
	}

	protected initializeRoutes(): void {
		this.router.use('/company', CompanyRouter);
	}

	public getRoutes() {
		return this.router;
	}
}

export default ClientRouter.getInstance().getRoutes();
