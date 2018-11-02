const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GLOBAL_POPULATE_STATE':
      return action.payload.users ? action.payload.users : state;
    case 'USER_ADD':
      return { ...state, [action.id]: { bikeIds: [] } };
    case 'BIKE_ADD':
      return {
        ...state,
        [action.userId]: Object.assign({}, state[action.userId], {
          bikeIds: [action.userId, ...state[action.userId].bikeIds],
        }),
      };
    default:
      return state;
  }
};

export default UserReducer;
