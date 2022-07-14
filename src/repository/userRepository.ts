import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from '../config/connectionDb';
import { User } from '../entities/userEntity';

export const register = async (user: User): Promise<number> => {
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

export const getUser = async (id: string): Promise<User> => {
	try {
		const query = 'SELECT * FROM users WHERE id = ?';
		const [result] = await connection.execute<RowDataPacket[]>(query, [id]);

		return result[0] as User;
	} catch (error) {
		throw new Error('service unavailable')
	}
}