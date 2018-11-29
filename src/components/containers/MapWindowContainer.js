import { compose, withState, withHandlers } from 'recompose';
// import { connect } from 'react-redux';
import MapWindow from '../app/MapWindow';

// const mapStateToProps = () => {
//   return {
    
//   };
// };

// const mapDispatchToProps = () => {
//   return {};
// };

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

export default attachHandlers(MapWindow);
