import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import BikeListItem from './../BikeListItem';
import bikeSelectors from './../../selectors/BikeSelectors';
import locationSelectors from './../../selectors/LocationSelectors';
import globalSelectors from './../../selectors/GlobalSelectors';
import geoService from './../../util/GeoService';
import distanceFormatter from './../../util/DistanceFormatter';
import moment from 'moment';

const isNearbyTreshold = 10;
const addressPlaceholder = 'resolving address...';

const mapStateToProps = (state, ownProps) => {
  const userLocation = globalSelectors.getDeviceLocation(state);
  const bike = bikeSelectors.getById(state, ownProps.bikeId);
  const bikeLocation = locationSelectors.getById(state, bike.locationIds[0]);
  const bikeAddress = 
    bikeLocation && bikeLocation.address
      ? bikeLocation.address
      : addressPlaceholder;
  const distance = distanceFormatter.format(
    geoService.getDistance(userLocation, bikeLocation),
  );
  const isNearby = distance && distance < isNearbyTreshold ? true : false;
  const timeAgo = bikeLocation ? moment(bikeLocation.timestamp).fromNow() : '';

  return {
    bike: {
      name: bike.name,
      timeAgo,
      address: bikeAddress,
      distance,
      isNearby,
    },
  };
};

const enhance = compose(
  withHandlers({
    showBike: ({ onShowBike, bikeId }) => () => {
      onShowBike(bikeId);
    },
    navigateBike: ({ onNavigateClick, bikeId }) => () => {
      onNavigateClick(bikeId);
    },
  }),
);

export default enhance(
  connect(
    mapStateToProps,
    null,
  )(BikeListItem),
);
