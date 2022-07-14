import { ResultSetHeader } from 'mysql2';
import connection from '../config/connectionDb';
import { User } from '../entities/userEntity';

export const createUser = async (user: User): Promise<number> => {
	try {
		const { id, name, username, email, password, updatedAt, createdAt } = user;
		const query = 'INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)';
		const [result] = await connection
			.execute<ResultSetHeader>(query, [id, name, username, email, password, updatedAt, createdAt]);

		return result.insertId;
	} catch (error) {
		throw new Error('service unavailable')
	}
};