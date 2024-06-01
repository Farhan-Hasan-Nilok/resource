import { Router, Request, Response } from 'express';
// import { AppDataSource } from '@/database/DataProvider';
// import { Company } from '@/database/entities/company';
// import { Product } from '@/database/entities/products';
// import { Category } from '@/database/entities/category';
import { UIConfig, swaggerSpec } from '@/lib/swagger';
import swaggerUi from 'swagger-ui-express';
// import { Question } from '@/database/entities/Question';
const router = Router();

import { AbstractRouter } from '@/abstracts/abstract.router';
import { CompanyController } from '@/apps/company/comapany.controller';
// import VersionOneRouter from './v1/index';
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, UIConfig));

router.get('/docs.json', (_req: Request, res: Response) => {
	res.setHeader('Content-Type', 'application/json');
	res.send(swaggerSpec);
});

/**
 * @openapi
 * /api/v1/client/archive-silo:
 *   post:
 *     summary: Register as user
 *     tags: [Archive Silo]
 *     requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               projectId:
 *                 type: string
 *                 description: Project id for archive silo
 *               url:
 *                 type: string
 *                 format: url
 *                 example: www.@example.com
 *                 description: Must be unique
 *               title:
 *                 type: string
 *               posts:
 *                 type: array
 *                 example: ["string1", "string2"]
 *                 items:
 *                  type: string
 *           encoding:
 *             color:
 *               style: form
 *               explode: false
 *     responses:
 *       200:
 *        description: Archive Silo created!
 *       400:
 *        description: Archive Silo not created!
 */

/**
 * @openapi
 * '/api/v1/client/verify':
 *    post:
 *      tags: [Auth]
 *      security:
 *       - bearerAuth: []
 *      summery: Verify (User, Admin)
 *      requestBody:
 *        content:
 *          application/x-www-form-urlencoded:
 *            schema:
 *              type: object
 *      responses:
 *         200:
 *          description: User verified successfully
 */

/**
 * Spec for the route /auth.
 *
 * @openapi
 * '/api/v1/client/auth':
 *    post:
 *      summary: User login
 *      tags: [Auth]
 *      requestBody:
 *        content:
 *          application/x-www-form-urlencoded:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  format: email
 *                password:
 *                  type: string
 *                  format: password
 *            encoding:
 *              color:
 *                style: form
 *                explode: false
 *      responses:
 *         200:
 *          description: Login successful!
 */

//  router.get('/', async (req: Request, res: Response) => {
//  	const { name, description } = req.body;
//  	const products: Product[] = [];
// const iphone = new Product();
// iphone.name = 'iphone';
// iphone.price = 999;
// iphone.description = 'Smart phone';

// const mac = new Product();
// mac.name = 'Macbook pro';
// mac.price = 1999;
// mac.description = 'Laptop';

// const ipad = new Product();
// ipad.name = 'ipad pro';
// ipad.price = 1199;
// ipad.description = 'Tablet';

// const calender = new Product();
// calender.name = 'Google Calender';
// calender.price = 0;
// calender.description = 'Calender App';

// const browser = new Product();
// browser.name = 'Chrome';
// browser.price = 0;
// browser.description = 'Browser App';

// const videStreaming = new Product();
// videStreaming.name = 'Youtube';
// videStreaming.price = 0;
// videStreaming.description = 'Video Streaming App';

// products.push(calender, browser, videStreaming);

// 	const company: Company = new Company();
// 	company.name = name;
// 	company.description = description;
// 	company.product = products;

// 	const insertCompanyData =
// 		await AppDataSource.getRepository(Company).save(company);
// 	return res.json(insertCompanyData);
// });

// router.get('/company-data/:id', async (req: Request, res: Response) => {
// 	const { id }: number = req.params;
// 	const singleCompanyData = await AppDataSource.getRepository(Company).findOne({
// 		where: { id: id },
// 	});
// 	return res.json(singleCompanyData);
// });

// router.get('/question', async (_req: Request, res: Response) => {
// 	const questions = await AppDataSource.getRepository(Question).find();
// 	res.json(questions);
// });
// router.patch('/edit-product/:id' async (req: Request, res: Response) => {
// 	const {name, price, description} = req.body;
// 	const {id}: number = req.params;

// 	const updateProduct = await AppDataSource.getRepository(Company).save()
// })

// Many to Many Relation test

// router.post('/add-question', async (_req: Request, res: Response) => {
// 	const category1 = new Category();
// 	category1.name = 'Animal';

// 	const category2 = new Category();
// 	category2.name = 'Zoo';

// 	const question = new Question();
// 	question.text = 'Dogs';
// 	question.title = 'Dog barks';
// 	question.categories = [category1, category2];

// 	const insertQuestion =
// 		await AppDataSource.getRepository(Question).save(question);
// 	return res.send(insertQuestion);
// });

// for deleting many to many relation
// router.delete('/delete', async (_req: Request, _res: Response) => {
// 	const question = await AppDataSource.getRepository(Question).findOne({
// 		relations: {
// 			categories: true,
// 		},
// 		where: {
// 			id: 2,
// 		},
// 	});
// 	question.categories = question?.categories.filter(
// 		(category) => category.id !== 2,
// 	);
// 	await AppDataSource.manager.save(question);
// });

export default router;

// export class MainRouter extends AbstractRouter {
// 	private static instance: MainRouter;
// 	public router: Router;
// 	public controller: CompanyController;

// 	public constructor() {
// 		super();
// 		this.router = Router();
// 		this.initializeRoutes();
// 		this.controller = CompanyController.getInstance();
// 	}

// 	static getInstance() {
// 		if (!this.instance) {
// 			this.instance = new MainRouter();
// 		}
// 		return this.instance;
// 	}

// 	protected initializeRoutes(): void {
// 		this.router.use(
// 			'/v1/company-data/:id',
// 			this.controller.individualCompanyData,
// 		);
// 	}

// 	public getRoutes() {
// 		return this.router;
// 	}
// }

// export default MainRouter.getInstance().getRoutes();
