import { JsonPlaceholderPostsService } from './api/jsonplaceholder/services/posts.service';
import { JsonPlaceholderUsersService } from './api/jsonplaceholder/services/users.service';
import { hideElement } from './helpers/ui.helper';
import { UsersService } from './services/users.service';
import { AuthService } from './shared/services/auth.service';
import { LocalStorageService } from './shared/services/local-storage.service';


const authService = new AuthService();
const usersService = new UsersService();

(async function () {

    // const posts = await jsonPlaceholderPostsService.getAllPosts();
    // const post = await jsonPlaceholderPostsService.getPostById(1);
    // const user = await jsonPlaceholderUsersService.getUserById(1);
    const user = await usersService.getUser(1);
    console.log(user);

    const UI = {
        btnLogin: document.getElementById('btn-login')
    };

    UI.btnLogin.onclick = async () => {
        const email = prompt('Enter your email: ');
        const success = await authService.login(email);
        if (success) {
            alert('Success login');
            hideElement(UI.btnLogin);
        }
    };

    if (!authService.isLogin()) {
        // TODO: show alert
        UI.btnLogin.click();
        return;
    } else {
        hideElement(UI.btnLogin);
    }

    
}());
