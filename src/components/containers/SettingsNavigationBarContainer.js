import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import BikeListNavigationBar from './../BikeListNavigationBar';

const attachHandlers = compose(
  withHandlers({
    goBack: ({ history }) => () => {

        console.log(history);
    //   history.
    },
  }),
);

export default withRouter(attachHandlers(BikeListNavigationBar));
