export const key = 'bikes';

export default {
    getById(state, id) {
        return id && state[key][id] ? state[key][id] : null;
    },
    getIds(state) {
        return Object.keys(state[key]);
    }
};