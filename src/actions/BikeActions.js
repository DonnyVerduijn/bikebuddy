import uuid from 'uuidv4';
import GMapsAPIService from './../util/GMapsAPIService';
import globalSelectors from './../selectors/GlobalSelectors';
import coordinateSelectors from './../selectors/CoordinateSelectors';

export default {
  storeBike() {
    return (dispatch, getState) => {
      const bikeId = uuid();
      const state = getState();
      const createdAt = Date.now();
      const userId = globalSelectors.getLocalUserId(state);
      const mostRecentCoordinateId = coordinateSelectors.getMostRecentId(state);
      const deviceLocation = coordinateSelectors.getById(state, mostRecentCoordinateId);

      dispatch({
        type: 'BIKE_ADD',
        userId,
        bikeId,
        locationIds: [mostRecentCoordinateId],
        name: 'bike',
        createdAt,
      });

      GMapsAPIService.reverseGeocode({
        coords: { lat: deviceLocation.lat, lng: deviceLocation.lng },
      })
        .then(address => {
          dispatch({
            type: 'COORDINATE_SET_ADDRESS',
            coordinateId: mostRecentCoordinateId,
            address,
          });
        })
        .catch(result => {
          dispatch({
            type: 'COORDINATE_SET_ADDRESS_FAILED',
            result,
          });
        });
    };
  },
  removeBike() {},
  editBike() {},
};
