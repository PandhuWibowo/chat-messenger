import dotenv from 'dotenv';

dotenv.config();

// Server config
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 3000;

// JWT config
const JWT_TOKEN_EXPIRETIME = process.env.JWT_TOKEN_EXPIRETIME || 60;
const JWT_TOKEN_FORGOT_PASSWORD_EXPIRETIME =
  process.env.JWT_TOKEN_FORGOT_PASSWORD_EXPIRETIME || 3600;
const JWT_TOKEN_ISSUER = process.env.JWT_TOKEN_ISSUER || 'coolIssuer';
const JWT_TOKEN_SECRET =
  process.env.JWT_TOKEN_SECRET || 'superDuperEncryptSecret';

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,

  token: {
    expireTime: JWT_TOKEN_EXPIRETIME,
    issuer: JWT_TOKEN_ISSUER,
    secret: JWT_TOKEN_SECRET,
    forgotPasswordExpireTime: JWT_TOKEN_FORGOT_PASSWORD_EXPIRETIME,
  },
};

const CURRENT_ENVIRONMENT = process.env.NODE_ENV || 'development';

// MySQL config
const MYSQL_USERNAME = process.env.MYSQL_USERNAME || 'root';
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || '';
const MYSQL_HOST = process.env.MYSQL_HOST || "localhost";
const MYSQL_PORT = process.env.MYSQL_PORT || 3306;
const MYSQL_DATABASE = process.env.MYSQL_DB
const MYSQL = {
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  // port: MYSQL_PORT,
  host: MYSQL_HOST,
  database: MYSQL_DATABASE,
  // multipleStatements: true
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

const config = {
  server: SERVER,
  mysql: MYSQL,
};

export default config;
