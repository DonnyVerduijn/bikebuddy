import { compose, withProps, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import AppBar from '../AppBar';

const enhance = compose(
  withProps(props => ({
    ...props,
    title: 'History',
    leftIcon: 'back',
    rightIcon: null,
  })),
  withHandlers({
    leftIconHandler: ({ history }) => () => {
      history.goBack();
    },
    // rightIconHandler: ({ history }) => () => {
    //   history.push('/settings');
    // },
  }),
);

export default withRouter(enhance(AppBar));
