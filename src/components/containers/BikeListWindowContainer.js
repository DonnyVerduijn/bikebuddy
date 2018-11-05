import { compose, withState, withHandlers } from 'recompose';
import BikeListWindow from './../app/BikeListWindow';

const attachHandlers = compose(
    withState('isMenuVisible', 'setIsMenuVisible', false),
    withHandlers({
        setIsMenuVisible: ({ isMenuVisible, setIsMenuVisible }) => () => {
            setIsMenuVisible(n => !n);
            console.log('menu toggled', isMenuVisible);
        }
    })
);

export default attachHandlers(BikeListWindow);