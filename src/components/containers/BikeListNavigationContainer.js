import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import BikeListNavigation from './../BikeListNavigation';

const attachHandlers = compose(
  withHandlers({
    openMenu: ({ onMenuIconClick }) => () => {
      onMenuIconClick();
    },
    showSettings: ({ history }) => () => {
      history.push('/settings');
    },
  }),
);

export default withRouter(attachHandlers(BikeListNavigation));
