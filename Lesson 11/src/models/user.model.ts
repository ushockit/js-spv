import { PostModel } from './post.model';

export class UserModel {
    id: number;
    name: string;
    email: string;
    posts: PostModel[];
}