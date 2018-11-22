import { compose, withProps, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppBar from '../AppBar';

const enhance = compose(
  withProps(props => ({
    ...props,
    title: 'Storages',
    leftIcon: 'back',
    rightIcon: 'addLocation',
  })),
  withHandlers({
    leftIconHandler: ({ history }) => () => {
      history.goBack();
    },
  }),
);

const mapDispatchToProps = (dispatch) => ({
    rightIconHandler: () => dispatch({ type: 'STORAGE_ADD' })
});

export default withRouter(
  enhance(
    connect(
      null,
      mapDispatchToProps,
    )(AppBar),
  ),
);
