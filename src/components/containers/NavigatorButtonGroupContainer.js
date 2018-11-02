import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import NavigatorButtonGroup from './../NavigatorButtonGroup';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = (dispatch, { bikeId }) => {
  return {
    hasFound: () => {
      dispatch({ type: 'BIKE_FOUND', bikeId });
    },
  };
};

const attachHandlers = compose(
  withHandlers({
    showBikeList: ({ history }) => () => {
      history.push('/');
    },
  }),
);

export default withRouter(
  attachHandlers(
    connect(
      null,
      mapDispatchToProps,
    )(NavigatorButtonGroup),
  ),
);
