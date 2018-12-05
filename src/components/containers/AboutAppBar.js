import { compose, withProps, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import AppBar from '../AppBar';

const enhance = compose(
  withProps(props => {
    return {
    ...props,
    title: 'About',
    leftIcon: 'back',
    rightIcon: null,
    };
  }),
  withHandlers({
    leftIconHandler: ({ history }) => () => {
      history.goBack();
    },
    rightIconHandler: ({ history }) => () => {
      console.log(history);
    },
  }),
);

export default withRouter(enhance(AppBar));
