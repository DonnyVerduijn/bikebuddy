import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import BottomMenu from './../BottomMenu';
import globalSelectors from './../../selectors/GlobalSelectors';

const mapStateToProps = (state) => {
    return { userId: globalSelectors.getLocalUserId(state) };
};

const attachHandlers = compose(
  withHandlers({
    showBikes: ({ history }) => () => {
      history.push('/');
    },
    showMap: ({ history, userId }) => () => {
      history.push(`/bike/map/${userId}`);
    },
    showUserProfile: ({ history, userId }) => () => {
      history.push(`/user/${userId}`);
    },
  }),
);

export default withRouter(
  connect(mapStateToProps)(attachHandlers(BottomMenu)),
);
