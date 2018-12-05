import { compose, withState, withHandlers } from 'recompose';
import FinderWindow from '../app/FinderWindow';
import { connect } from 'react-redux';
import bikeActions from '../../actions/BikeActions';

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

const mapDispatchToProps = dispatch => {
  return {
    storeBike: () => dispatch(bikeActions.storeBike()),
  };
};

export default attachHandlers(
  connect(
    null,
    mapDispatchToProps,
  )(FinderWindow),
);
