import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import BikeList from './../BikeList';
import bikeSelectors from './../../selectors/BikeSelectors';

const mapStateToProps = (state) => {
  return {
    bikeIds: bikeSelectors.getIds(state),
  };
};

const attachHandlers = compose(
  withHandlers({
    showBike: ({ ignoreHandlers, history }) => bikeId => {
      !ignoreHandlers && history.push(`/bike/${bikeId}`);
    },
    navigateBike: ({ ignoreHandlers, history }) => bikeId => {
      !ignoreHandlers && history.push(`/bike/navigator/${bikeId}`);
    },
  }),
);

export default withRouter(attachHandlers(connect(mapStateToProps)(BikeList)));
