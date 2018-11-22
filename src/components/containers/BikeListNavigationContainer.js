import { compose, withProps, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import AppBar from '../AppBar';

const enhance = compose(
  withProps(props => ({
    ...props,
    title: 'bikelist',
    leftIcon: 'menu',
    rightIcon: 'settings',
  })),
  withHandlers({
    leftIconHandler: ({ onMenuIconClick }) => () => {
      onMenuIconClick();
    },
    rightIconHandler: ({ history }) => () => {
      history.push('/settings');
    },
  }),
);

export default withRouter(enhance(AppBar));
