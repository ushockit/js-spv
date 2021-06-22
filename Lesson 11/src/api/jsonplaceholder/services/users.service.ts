import axios from 'axios';
import { environment } from '../../../environment/environment';
import { User } from '../interfaces/user.interface';

export class JsonPlaceholderUsersService {
    private async getAllUsers(): Promise<User[]> {
        const response = await axios(`${environment.API_URL}/users`);
        return response.data;
    }
    async getUserById(id: number): Promise<User> {
        const response = await axios([
            environment.API_URL,
            `users/${id}`
        ].join('/'));
        return response.data;
    }

    async getUserByEmail(email: string): Promise<User> {
        const users = await this.getAllUsers();
        return users.find(u => u.email === email);
    }
}