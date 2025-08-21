import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // point to compiled JS for entities & migrations
  entities: [path.join(__dirname, '../**/*.entity.js')],
  migrations: [path.join(__dirname, './migrations/*.js')],
  synchronize: false,
  logging: process.env.DB_LOGGING === 'true',
});