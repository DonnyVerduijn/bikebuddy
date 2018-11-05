import { compose, withState, withHandlers } from 'recompose';
import BikeListWindow from './../app/BikeListWindow';

const attachHandlers = compose(
    withState('isMenuOpen', 'setIsMenuOpen', false),
    withHandlers({
        openMenu: ({ setIsMenuOpen }) => () => {
            console.log('openMenu');
            setIsMenuOpen(true);
        },
        closeMenu: ({ setIsMenuOpen }) => () => {
            console.log('closeMenu');
            setIsMenuOpen(false);
        }
    })
);

export default attachHandlers(BikeListWindow);