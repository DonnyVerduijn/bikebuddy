import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import BikeListNavigationBar from './../BikeListNavigationBar';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps
});

const attachHandlers = compose(
  withHandlers({
    showSettings: ({ history }) => () => {
      history.push('/settings');
    },
  }),
);

export default withRouter(attachHandlers(connect(mapStateToProps, null)(BikeListNavigationBar)));
