import { connect } from 'react-redux';
import StoreBikeButton from '../StoreBikeButton';
import bikeActions from '../../actions/BikeActions';

const mapStateToProps = (state, { isMenuVisible }) => ({
  isMenuVisible,
});

const mapDispatchToProps = dispatch => {
  return {
    storeBike: () => dispatch(bikeActions.storeBike())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoreBikeButton);
