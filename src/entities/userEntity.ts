import JOI from 'joi';

export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
};

export type CreateUser = Omit<User, 'id'>;
export type UpdateUser = Partial<User>;

export const userSchema = JOI.object({
	name: JOI.string().required().min(4).max(20),
	username: JOI.string().required().min(4).max(20),
	email: JOI.string().required().email(),
	password: JOI.string().required().min(4).max(20),
	createdAt: JOI.date().required(),
	updatedAt: JOI.date().required()
});
