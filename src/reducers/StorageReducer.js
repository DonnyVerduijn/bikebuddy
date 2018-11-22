import omit from 'lodash.omit';


const StorageReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GLOBAL_POPULATE_STATE':
      return action.payload.bikes ? action.payload.bikes : state;
    case 'STORAGE_ADD':
      return {
        ...state,
        [action.id]: {
          locationIds: [],
          name: action.storage.name,
        },
      };
    case 'STORAGE_REMOVE':
      return omit(state, action.bikeId);
    case 'STORAGE_FETCH_SUCCESS': 
      return {
        ...state,
        ...action.storages.reduce((previous, storage) => {
          return { ...previous, [storage.place_id]: storage };
        }, {})
      };
    default:
      return state;
  }
};

export default StorageReducer;
