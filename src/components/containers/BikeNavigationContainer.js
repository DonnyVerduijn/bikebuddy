import { compose, withProps, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import AppBar from '../AppBar';

const enhance = compose(
  withProps(props => {
    return {
    ...props,
    id: props.match.params.id,
    title: props.title,
    leftIcon: 'back',
    rightIcon: 'delete',
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
