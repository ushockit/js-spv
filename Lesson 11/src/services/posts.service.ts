import { JsonPlaceholderPostsService } from '../api/jsonplaceholder/services/posts.service';
import { PostModel } from '../models/post.model';

export class PostsService {
    private jsonPlaceholderPostsService: JsonPlaceholderPostsService;

    constructor() {
        this.jsonPlaceholderPostsService = new JsonPlaceholderPostsService();
    }

    async getPostsForUserById(userId: number): Promise<PostModel[]> {
        const posts = await this.jsonPlaceholderPostsService.getPostsByUserId(userId);
        return posts;
    }
}