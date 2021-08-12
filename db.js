const dotenv = require('dotenv');
const { Pool } = require('pg');
const { USER, HOST, PASSWORD, DB, DB_PORT } = require('./config');
// const { USER, HOST, PASSWORD, DB, DB_PORT } = process.env;

const pool = new Pool({
  user: USER,
  host: HOST,
  database: DB,
  password: PASSWORD,
  port: DB_PORT,
});

module.exports = pool;
