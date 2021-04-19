import users from '../data/users';

export function checkRole(type: String, id: String){
    console.log("type:", type);
    console.log("id:", id);
    for (let i = 0; i < users.length; i++) {
        if(users[i].authType === type && users[i].auth === id){
            return users[i].role;
        }
      } 
}