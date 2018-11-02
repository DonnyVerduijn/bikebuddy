import omit from 'lodash.omit';

const LocationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GLOBAL_POPULATE_STATE':
      return action.payload.locations ? action.payload.locations : state;
    case 'LOCATION_ADD':
      return {
        ...state,
        [action.locationId]: {
          coords: action.coords,
          address: action.address,
          createdAt: action.createdAt,
        },
      };
    case 'LOCATION_CLEAR_HISTORY':
      return omit(state, action.currentBikeLocationIds);
    case 'LOCATION_UPDATE_ADDRESS':
      return {
        ...state,
        [action.locationId]: Object.assign({}, state[action.locationId], {
          address: action.address,
        }),
      };
    default:
      return state;
  }
};

export default LocationReducer;
