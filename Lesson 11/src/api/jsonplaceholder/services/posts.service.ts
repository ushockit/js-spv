import { environment } from '../../../environment/environment';
import { Post } from '../interfaces/posts.interface';
import axios from 'axios';

export class JsonPlaceholderPostsService {
    async getAllPosts(): Promise<Post[]> {
        const response = await axios(`${environment.API_URL}/posts`);
        return response.data;
    }
    async getPostById(postId: number): Promise<Post> {
        const response = await axios(`${environment.API_URL}/posts/${postId}`);
        return response.data;
    }
    async getPostsByUserId(userId: number): Promise<Post[]> {
        const response = await axios([
            environment.API_URL,
            `posts?userId=${userId}`
        ].join('/'));
        return response.data;
    }
}