import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import BikeList from './../BikeList';
import bikeSelectors from './../../selectors/BikeSelectors';

const mapStateToProps = state => {
  const bikeIds = bikeSelectors.getIds(state);
  return {
    bikeIds,
  };
};

const attachHandlers = compose(
  withHandlers({
    showBike: ({ history }) => bikeId => {
      history.push(`/bike/${bikeId}`);
    },
    navigateBike: ({ history }) => bikeId => {
      history.push(`/bike/navigator/${bikeId}`);
    },
  }),
);

export default withRouter(attachHandlers(connect(mapStateToProps)(BikeList)));