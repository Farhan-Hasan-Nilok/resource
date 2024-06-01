import { DataSourceOptions } from 'typeorm';
import 'reflect-metadata';
import dotenv from 'dotenv';
import { Company } from '../entities/company';
import { Product } from '../entities/products';
// import { Question } from '../entities/Question';
import { Category } from '../entities/category';

dotenv.config();

const dataSourceConfig: DataSourceOptions = {
	type: 'postgres',
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT || '5432'),
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	synchronize: true,
	logging: false,
	entities: [Company, Product, Category],
	subscribers: [],
	migrations: [],
};

export default dataSourceConfig;
