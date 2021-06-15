import { UI } from '../ui/ui.js'
import { usersService } from '../services/users.service.js';
import { User } from '../models/user.js';



export async function loadUsersToList() {
    const users = await usersService.getUsers();
    
    users.forEach(u => {
        UI.$usersList.append(`<a href="#" class="list-group-item list-group-item-action" data-user-id="${u.id}">[${u.name}] ${u.email}</a>`);
    });
    
    // подписка на клик
    $('#users-list > a').click(async (ev) => {
        $('#users-list > a').removeClass('active');
        $(ev.target).addClass('active');

        // получение id пользователя из атрибута data
        const userId = $(ev.target).data('user-id');
        const user = await usersService.getUserById(userId);
        
        showUserInfo(user);
    });
}
/**
 * 
 * @param {User} user
 */
export function showUserInfo(user) {
    UI.$userInfo.text(user.username);
}