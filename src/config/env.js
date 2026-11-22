const path = require('path');
const dotenv = require('dotenv');

const envName = process.env.APP_ENV || 'develop';

dotenv.config({
  path: path.resolve(__dirname, '../../', `.env.${envName}`),
});