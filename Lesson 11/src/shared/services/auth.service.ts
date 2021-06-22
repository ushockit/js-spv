import { JsonPlaceholderUsersService } from '../../api/jsonplaceholder/services/users.service';
import { LocalStorageService } from './local-storage.service';


const AUTH_KEY: string = 'user';
export class AuthService {
    private localStorageService: LocalStorageService;
    private usersService: JsonPlaceholderUsersService;

    constructor() {
        this.localStorageService = new LocalStorageService();
        this.usersService = new JsonPlaceholderUsersService();
    }

    async login(email: string) {
        const user = await this.usersService.getUserByEmail(email);
        if (!user) {
            return false;
        }
        this.localStorageService.set(AUTH_KEY, JSON.stringify(user));
        return true;
    }
    signup() {
        this.localStorageService.remove(AUTH_KEY);
    }
    isLogin() {
        return Boolean(this.localStorageService.get(AUTH_KEY));
    }
}