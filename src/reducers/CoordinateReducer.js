const CoordinateReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GLOBAL_POPULATE_STATE':
      return action.payload.global ? action.payload.global : state;
    case 'SET_COORDINATE':
      return {
        byId: Object.assign({}, state.byId, {
          [action.coordinateId]: {
            id: action.coordinateId,
            createdAt: Date.now(),
            accuracy: action.location.coords.accuracy,
            altitude: action.location.altitude,
            lat: action.location.coords.latitude,
            lng: action.location.coords.longitude,
          },
        }),
        allIds: Array.concat(state.allIds, action.coordinateId),
      };
    default:
      return state;
  }
};

export default CoordinateReducer;
