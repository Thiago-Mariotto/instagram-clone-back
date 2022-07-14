export type User = {
	id: string;
	name: string;
	username: string;
	email: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
};

export type CreateUser = Omit<User, 'id'>;
export type UpdateUser = Partial<User>;