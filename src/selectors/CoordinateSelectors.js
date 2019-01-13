export const key = 'coordinates';

export default {
  getById(state, id) {
    return id && state[key][id] ? state[key][id] : null;
  },
  getMostRecent(state) {
    const mostRecentIdIndex = state[key].allIds.length - 1;
    return state[key].byId[state[key].allIds[mostRecentIdIndex]];
  },
};
