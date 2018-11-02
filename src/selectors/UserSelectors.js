export const key = 'users';

export default {
    getById(state, id) {
        return state[key][id];
    }
};