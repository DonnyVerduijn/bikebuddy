export const key = 'storages';

export default {
    getById(state, id) {
        return id && state[key][id] ? state[key][id] : null;
    },
    getAll(state) {
        return state[key] ? Object.values(state[key]) : [];
    }
};