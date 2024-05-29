import { AppDataSource } from '@/database/DataProvider';
import { Company } from '@/database/entities/company';
import { Request, Response } from 'express';
export class CompanyController {
	private static instance: CompanyController;

	static getInstance() {
		if (!this.instance) {
			this.instance = new CompanyController();
		}
		return this.instance;
	}

	async individualCompanyData(req: Request, res: Response) {
    console.log('$$$$$$$$$$$$$$$$$$$$$$')
		const { id }: string = req.params;
		const singleCompanyData = await AppDataSource.getRepository(
			Company,
		).findOne({
			where: { id: id },
		});
		return res.json(singleCompanyData);
	}
}

export default CompanyController.getInstance();
