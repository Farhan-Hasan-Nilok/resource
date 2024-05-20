import { DataSourceOptions } from 'typeorm';
import 'reflect-metadata';
import dotenv from 'dotenv';
import Resource from '@/database/entities/resources';
import Post from '@/database/entities/post';
import User from '@/database/entities/user';

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
	entities: [Resource, Post, User],
	subscribers: [],
	migrations: [],
};

export default dataSourceConfig;
