import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import BikeListNavigation from '../BikeListNavigation';

const attachHandlers = compose(
  withHandlers({
    goBack: ({ history }) => () => {

        console.log(history);
    //   history.
    },
  }),
);

export default withRouter(attachHandlers(BikeListNavigation));
