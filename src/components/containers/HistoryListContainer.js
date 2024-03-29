import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import HistoryList from '../HistoryList';
import bikeSelectors from '../../selectors/BikeSelectors';

const mapStateToProps = (state) => {
  return {
    bikeIds: bikeSelectors.getIds(state),
  };
};

const attachHandlers = compose(
  withHandlers({
    navigateBike: ({ history }) => bikeId => {
      history.push(`/navigator/${bikeId}`);
    },
  }),
);

export default withRouter(attachHandlers(connect(mapStateToProps)(HistoryList)));
