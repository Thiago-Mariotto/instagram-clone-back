import { User, userSchema } from "../entities/userEntity";
import { register } from '../repository/userRepository';

const validateUserFields = (user: User): void => {
	const { error } = userSchema.validate(user);
	if (error) {
		throw new Error('bad request');
	};

	return;
}

export const createUser = async (user: User) => {
	validateUserFields(user);

	const userId = await register(user);
	const registeredUser: Pick<User, 'id' | 'username'> = {
		id: userId,
		username: user.username
	}

	return registeredUser;
};
