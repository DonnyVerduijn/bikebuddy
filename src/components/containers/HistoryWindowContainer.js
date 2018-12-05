import HistoryWindow from '../app/HistoryWindow';
import { connect } from 'react-redux';
import bikeActions from '../../actions/BikeActions';

const mapDispatchToProps = dispatch => {
  return {
    storeBike: () => dispatch(bikeActions.storeBike()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(HistoryWindow);
