import GMapsAPIService from './../util/GMapsAPIService';

export default {
  addStorage(storage, id) {
    return { type: 'STORAGE_ADD', storage, id };
  },
  removeStorage(id) {
    return { type: 'STORAGE_REMOVE', id };
  },
  fetchStorages(coords) {
    return dispatch => {
        
      dispatch({
        type: 'STORAGE_FETCH_REQUEST',
      });

      GMapsAPIService.bicycleStoragesNearby({ coords })
        .then(result => {
          console.log(result);
          dispatch({
            type: 'STORAGE_FETCH_SUCCESS',
            storages: result,
          });
        })
        .catch(message => {
          dispatch({
            type: 'STORAGE_FETCH_FAILED',
            message,
          });
        });
    };
  },
};
