import mysql from 'mysql2/promise';

const NODE_ENV = process.env.NODE_ENV || 'development';

export default mysql.createPool({
	host: process.env.DB_HOST || 'localhost',
	user: process.env.DB_USER || 'root',
	password: process.env.DB_PASSWORD || 'password',
	database: process.env.DB_NAME || `${NODE_ENV}_instagram`,
	supportBigNumbers: true,
	bigNumberStrings: true,
	dateStrings: true,
});