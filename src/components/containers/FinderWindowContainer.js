import { connect } from 'react-redux';
import storages from '../../selectors/StorageSelectors';
import storageActions from './../../actions/StorageActions';
import CoordinateSelectors from '../../selectors/CoordinateSelectors';
import { compose, withState, withHandlers } from 'recompose';
import FinderWindow from '../app/FinderWindow';
import bikeActions from '../../actions/BikeActions';

const mapStateToProps = state => ({
  storages: storages.getAll(state),
  position: CoordinateSelectors.getMostRecent(state),
});

const mapDispatchToProps = dispatch => ({
  fetchStorages: coords => dispatch(storageActions.fetchStorages(coords)),
  // setPosition: () => dispatch(GlobalActions.set)
  storeBike: () => dispatch(bikeActions.storeBike()),
});

const attachHandlers = compose(
  withState('isMenuOpen', 'setIsMenuOpen', false),
  withHandlers({
    openMenu: ({ isMenuOpen, setIsMenuOpen }) => () => {
      !isMenuOpen && setIsMenuOpen(true);
    },
    closeMenu: ({ isMenuOpen, setIsMenuOpen }) => () => {
      isMenuOpen && setIsMenuOpen(false);
    },
  }),
);

export default attachHandlers(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(FinderWindow),
);
