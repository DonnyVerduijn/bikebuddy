export const key = 'coordinates';

export default {
  getById(state, id) {
    return id && state[key].byId[id] ? state[key].byId[id] : null;
  },
  getMostRecent(state) {
    const mostRecentIdIndex = state[key].allIds.length - 1;
    return state[key].byId[state[key].allIds[mostRecentIdIndex]];
  },
  getMostRecentId(state) {
    const mostRecentIdIndex = state[key].allIds.length - 1;
    return state[key].allIds[mostRecentIdIndex];
  }
};
