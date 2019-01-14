import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import HistoryListItem from '../HistoryListItem';
import bikes from '../../selectors/BikeSelectors';
import geoService from '../../util/GeoService';
import distanceFormatter from '../../util/DistanceFormatter';
import moment from 'moment';
import coordinateSelectors from './../../selectors/CoordinateSelectors';

const isNearbyTreshold = 10;
const addressPlaceholder = 'resolving address...';

const mapStateToProps = (state, ownProps) => {
  const userLocation = coordinateSelectors.getMostRecent(state);
  const bike = bikes.getById(state, ownProps.bikeId);
  const bikeLocation = coordinateSelectors.getById(state, bike.locationIds[0]);
  const bikeAddress = 
    bikeLocation && bikeLocation.address
      ? bikeLocation.address
      : addressPlaceholder;
  const distance = distanceFormatter.format(
    geoService.getDistance(userLocation, bikeLocation),
  );
  const isNearby = distance && distance < isNearbyTreshold ? true : false;
  const timeAgo = moment(bikeLocation.createdAt).fromNow();

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
  )(HistoryListItem),
);
