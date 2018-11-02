import { connect } from 'react-redux';
import DistanceToTarget from './../DistanceToTarget';
import geoService from './../../util/GeoService';
import globalSelectors from './../../selectors/GlobalSelectors';
import bikeSelectors from './../../selectors/BikeSelectors';

const mapStateToProps = (state, { bikeId }) => {
  const deviceLocation = globalSelectors.getDeviceLocation(state);
  const bikeLocation = bikeSelectors.getById(bikeId);

  return {
    distanceToTarget: geoService.getDistance(deviceLocation, bikeLocation),
  };
};

export default connect(mapStateToProps)(DistanceToTarget);
