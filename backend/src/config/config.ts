import dotenv from 'dotenv';
dotenv.config();

interface Config {
  PORT: number;
  NODE_ENV: string;
  DATABASE_CONNECTION_STRING: string;
}

const config: Config = {
  PORT: Number(process.env.HYPOTHESIS_SERVICE_PORT!),
  NODE_ENV: process.env.HYPOTHESIS_NODE_ENV!,
  DATABASE_CONNECTION_STRING: process.env.HYPOTHESIS_MONGODB_CONNECTION_STRING!
}

export default config;