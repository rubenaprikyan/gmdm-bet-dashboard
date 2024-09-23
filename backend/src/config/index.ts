import dotenv from 'dotenv';
import path from 'path';
import * as process from 'node:process';

dotenv.config({
  path: path.join(__dirname, '../../', '.env'),
});

const intConf = (value: string | number): number =>
  typeof value === 'string' ? parseInt(value, 10) : value;

/**
 * DATABASE config variables
 */
export const dbConfig = {
  host: process.env.DB_HOST || '',
  database: process.env.DB_NAME || '',
  username: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || '',
  port: intConf(process.env.DB_PORT || 5432),
  logLevel: process.env.DB_LOG_LEVEL || 'info',
  type: process.env.DB_DIALECT || 'postgres',
};

/**
 * SERVER config variables
 */
export const serverConfig = {
  host: process.env.HOST,
  port: parseInt(process.env.PORT || '', 10),
};

/**
 * AUTH config variables
 */
export const authConfig = {
  accessTokenSecret: process.env.AUTH_TOKEN_SECRET || '',
  accessTokenLifetime: intConf(process.env.AUTH_TOKEN_LIFETIME || 300),
};

/**
 * CORS whitelist variables
 */
export const whiteList = process.env.CORS_WHITE_LIST || '';
