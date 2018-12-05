import SideNavigationMenu from '../SideNavigationMenu';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router';

const attachHandlers = compose(
  withHandlers({
    toTargetWindow: ({ history }) => path => () => {
      history.push(path);
    },
  }),
);

export default withRouter(attachHandlers(SideNavigationMenu));
