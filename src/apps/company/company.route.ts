import { AbstractRouter } from '@/abstracts/abstract.router';
import { Router } from 'express';
import { CompanyController } from './comapany.controller';

export class CompanyRouter extends AbstractRouter {
	private static instance: CompanyRouter;
	public router: Router;
	public controller: CompanyController;

	private constructor() {
		super();
		this.router = Router();
		this.controller = CompanyController.getInstance();
	}

	static getInstance() {
		if (!this.instance) {
			this.instance = new CompanyRouter();
		}
		return this.instance;
	}

	protected initializeRoutes(): void {
		this.router.get('/company-data/:id', this.controller.individualCompanyData);
	}

	public getRoutes() {
		return this.router;
	}
}

export default CompanyRouter.getInstance().getRoutes();
