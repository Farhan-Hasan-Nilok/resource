import 'reflect-metadata';
import { DataSource } from 'typeorm';
import postgresConfig from '../database/configs/postgres.config';

export const AppDataSource = new DataSource(postgresConfig);
