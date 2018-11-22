const GlobalReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GLOBAL_POPULATE_STATE':
      return action.payload.global ? action.payload.global : state;
    case 'GLOBAL_SET_USER_ID':
      return { ...state, localUserId: action.userId };
    // case 'GLOBAL_SET_DEVICE_LOCATION':
    //   return {
    //     ...state,
    //     deviceLocation: Object.assign({}, action.deviceLocation, {
    //       coords: {
    //         accuracy: action.deviceLocation.coords.accuracy,
    //         altitude: action.deviceLocation.altitude,
    //         lat: action.deviceLocation.coords.latitude,
    //         lng: action.deviceLocation.coords.longitude,
    //       },
    //     }),
    //   };
    // case 'GLOBAL_SET_DEVICE_ORIENTATION':
    //   return { ...state, deviceOrientation: action.deviceOrientation };
    default:
      return state;
  }
};

export default GlobalReducer;
