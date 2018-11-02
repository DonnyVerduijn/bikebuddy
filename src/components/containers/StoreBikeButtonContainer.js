import { connect } from 'react-redux';
import StoreBikeButton from '../StoreBikeButton';
import bikeActions from '../../actions/BikeActions';

const mapDispatchToProps = dispatch => {
  return {
    storeBike: () => dispatch(bikeActions.storeBike())
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(StoreBikeButton);
