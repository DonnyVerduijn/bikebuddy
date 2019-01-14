const initialState = {
  byId: {},
  allIds: [],
};

const CoordinateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GLOBAL_POPULATE_STATE':
      return action.payload.global ? action.payload.global : state;
    case 'COORDINATE_SET':
      return {
        byId: Object.assign({}, state.byId, {
          [action.coordinateId]: {
            id: action.coordinateId,
            createdAt: action.location.timestamp,
            accuracy: action.location.coords.accuracy,
            // altitude: action.location.coords.altitude,
            // speed: action.location.coords.speed,
            // heading: action.location.coords.heading,
            lat: action.location.coords.latitude,
            lng: action.location.coords.longitude,
          },
        }),
        allIds: state.allIds.concat(action.coordinateId),
      };
    case 'COORDINATE_SET_ADDRESS':
      return {
        ...state,
        byId: Object.assign({}, state.byId, {
          [action.coordinateId]: Object.assign(
            {},
            state.byId[action.coordinateId],
            { address: action.address },
          ),
        }),
      };
    default:
      return state;
  }
};

export default CoordinateReducer;
