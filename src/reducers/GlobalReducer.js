
const GlobalReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GLOBAL_POPULATE_STATE':
      return action.payload.global ? action.payload.global : state;
    case 'GLOBAL_SET_USER_ID':
      return { ...state, localUserId: action.userId };
    case 'GLOBAL_SET_DEVICE_LOCATION':
      return { ...state, deviceLocation: action.deviceLocation };
    case 'GLOBAL_SET_DEVICE_ORIENTATION':
      return { ...state, deviceOrientation: action.deviceOrientation };
    default:
      return state;
  }
};

export default GlobalReducer;
