export const key = 'locations';

export default {
    getById(state, id) {
        return id && state[key][id] ? state[key][id] : null;
    },
};