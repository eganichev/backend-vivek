import { ConnectionOptions } from 'typeorm';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = dotenv.parse(fs.readFileSync(process.env.PWD + '/.env'));

export const ORM_CONFIG = {
  type: 'mysql',
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [`${__dirname}/../**/*.entity.*`],
  synchronize: false,
  logging: true,
} as ConnectionOptions;
