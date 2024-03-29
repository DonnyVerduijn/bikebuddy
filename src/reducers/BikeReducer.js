import omit from 'lodash.omit';

const BikeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GLOBAL_POPULATE_STATE':
      return action.payload.bikes ? action.payload.bikes : state;
    case 'BIKE_ADD':
      return {
        ...state,
        [action.bikeId]: {
          locationIds: action.locationIds,
          name: action.name,
          bikeFound: false,
        },
      };
    case 'BIKE_FOUND':
      return {
        ...state,
        [action.bikeId]: Object.assign({}, state[action.bikeId], {
          bikeFound: true,
        }),
      };
    case 'BIKE_REMOVE':
      return omit(state, action.bikeId);
    case 'LOCATION_ADD':
      return {
        ...state,
        [action.bikeId]: Object.assign({}, state[action.bikeId], {
          locationIds: [action.locationId, ...state[action.bikeId].locationIds],
        }),
      };
    default:
      return state;
  }
};

export default BikeReducer;
