import { registerAs } from "@nestjs/config";

export default registerAs('database', () => ({
  type: 'postgres' as const,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: process.env.DB_LOGGING,
  poolSize: process.env.DB_POOL_SIZE
}))