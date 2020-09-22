import * as fs from 'fs';
import * as dotenv from 'dotenv';

const {
  LOG_LEVEL,
  GOOGLE_CLIENT_ID,
  GOOGLE_SECRET,
  JWT_SECRET,
  JWT_EXPIRES,
} = dotenv.parse(fs.readFileSync(process.env.PWD + '/.env'));

export {
  LOG_LEVEL,
  GOOGLE_CLIENT_ID,
  GOOGLE_SECRET,
  JWT_SECRET,
  JWT_EXPIRES,
};
