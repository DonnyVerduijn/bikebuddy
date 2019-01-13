import { connect } from 'react-redux';
import GoogleMap from '../GoogleMap';
import storages from '../../selectors/StorageSelectors';
import storageActions from './../../actions/StorageActions';
import CoordinateSelectors from '../../selectors/CoordinateSelectors';

const mapStateToProps = state => ({
    storages: storages.getAll(state),
    position: CoordinateSelectors.getMostRecent(state)
});

const mapDispatchToProps = dispatch => ({
  fetchStorages: coords => dispatch(storageActions.fetchStorages(coords)),
  // setPosition: () => dispatch(GlobalActions.set)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GoogleMap);
