import { JsonPlaceholderPostsService } from '../api/jsonplaceholder/services/posts.service';
import { JsonPlaceholderUsersService } from '../api/jsonplaceholder/services/users.service';
import { UserModel } from '../models/user.model';

export class UsersService {
    private jsonPlaceholderPostsService: JsonPlaceholderPostsService;
    private jsonPlaceholderUsersService: JsonPlaceholderUsersService;

    constructor() {
        this.jsonPlaceholderPostsService = new JsonPlaceholderPostsService();
        this.jsonPlaceholderUsersService = new JsonPlaceholderUsersService();
    }

    async getUser(id: number): Promise<UserModel> {
        const user = await this.jsonPlaceholderUsersService.getUserById(id);
        const posts = await this.jsonPlaceholderPostsService.getPostsByUserId(id);
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            posts: posts
        };
    }
}