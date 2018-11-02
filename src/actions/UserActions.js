export default {
    addUser(id){
        return { type: 'USER_ADD', id };
    },
    removeUser(id){
        return { type: 'USER_REMOVE', id }; 
    },
};