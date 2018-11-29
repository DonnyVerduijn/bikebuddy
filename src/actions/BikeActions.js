import uuid from 'uuidv4';
import GMapsAPIService from './../util/GMapsAPIService';
import PositionSensor from './../util/PositionSensor';
import globalSelectors from './../selectors/GlobalSelectors';

export default {
  storeBike() {
    return (dispatch, getState) => {
      const locationId = uuid();
      const bikeId = uuid();
      const state = getState();
      const createdAt = Date.now();
      const userId = globalSelectors.getLocalUserId(state);
      const deviceLocation = PositionSensor.getPosition();
      
      dispatch({
        type: 'BIKE_ADD',
        userId,
        bikeId,
        name: 'bike',
        createdAt,
      });

      dispatch({ 
        type: 'LOCATION_ADD',
        bikeId,
        locationId,
        coords: deviceLocation.coords,
        createdAt,
      });

      GMapsAPIService.reverseGeocode(deviceLocation)
        .then(address => {
          dispatch({ 
            type: 'LOCATION_UPDATE_ADDRESS',
            locationId,
            address,
          });
        })
        .catch(result => {
          dispatch({
            type: 'LOCATION_ADD_FAILED',
            result,
          });
        });
    };
  },
  removeBike() {},
  editBike() {},
};
