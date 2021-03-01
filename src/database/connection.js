import mysql2 from 'mysql2'
import config from '../config/config';
// Connection MySQL
const NAMESPACE = 'Database';
const pool = mysql2.createPool(config.mysql)
module.exports = pool.promise()