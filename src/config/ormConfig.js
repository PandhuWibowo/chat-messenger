import config from './config';

const TYPEORM_CONFIG = {
  type: 'mysql',
  host: config.mysql.host,
  port: config.mysql.port,
  username: config.mysql.username,
  password: config.mysql.password,
  database: config.mysql.database,
  // entities: ['./src/entity/**/*.ts'],
  entities: ['./dist/entity/**/*.js'],
  // migrations: ['./src/migration/**/*.ts'],
  migrations: ['./dist/migration/**/*.js'],
  synchronize: true,
  logging: false,
};

module.exports = TYPEORM_CONFIG;
