import { compose, withState, withHandlers } from 'recompose';
import BikeListWindow from './../app/BikeListWindow';

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

export default attachHandlers(BikeListWindow);
