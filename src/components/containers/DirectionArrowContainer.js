import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import geoService from './../../util/GeoService';
import DirectionArrow from './../DirectionArrow';
import bikeSelectors from './../../selectors/BikeSelectors';
import locationSelectors from './../../selectors/LocationSelectors';
import {
  getDeviceLocation,
  getDeviceOrientation,
} from './../../selectors/GlobalSelectors';

const convertOrientation = orientation => {
  return 360 - orientation - 180;
};

const mapStateToProps = (state, { bikeId }) => {
  // console.log(state);
  // console.log(bikeId);
  const deviceOrientation = getDeviceOrientation(state);
  const bike = bikeSelectors.getById(state, bikeId);
  const rhumbLineBearing = createSelector(
    [getDeviceLocation, locationSelectors.getById],
    (deviceLocation, bikeLocation) => {
      return geoService.getRhumbLineBearing(deviceLocation, bikeLocation);
    },
  );

  return {
    rotation: convertOrientation(
      rhumbLineBearing(state, bike.locationIds[0]) -
        deviceOrientation.alpha -
        window.orientation,
    ),
  };
};

export default connect(mapStateToProps)(DirectionArrow);
