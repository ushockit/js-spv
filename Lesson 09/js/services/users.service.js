import { environment } from '../config/environment.js';
import { User } from '../models/user.js';

export class UsersService {
    async getUsers() {
        const response = await fetch(`${environment.API_URL}/users`);
        return (await response.json()).map(u => {
            return new User(u.id, u.email, u.name, u.username);
        });
    }
    async getUserById(id) {
        const response = await fetch(`${environment.API_URL}/users/${id}`);
        const user = await response.json();
        return new User(user.id, user.email, user.name, user.username);
    }
}


export const usersService = new UsersService();