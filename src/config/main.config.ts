import * as fs from 'fs';
import * as dotenv from 'dotenv';

const {
  LOG_LEVEL
} = dotenv.parse(fs.readFileSync(process.env.PWD + '/.env'));

export {
  LOG_LEVEL
};
