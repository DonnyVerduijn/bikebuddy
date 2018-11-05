import { connect } from 'react-redux';
import SideNavigationMenu from './../SideNavigationMenu';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router';

const mapStateToProps = (state, { isOpen }) => ({
    isOpen
});

const attachHandlers = compose(
  withHandlers({
    toTargetWindow: ({ history }) => (path) => {
        history.push(path);
    },
  }),
);

export default withRouter(
  attachHandlers(
    connect(
      mapStateToProps,
      null,
    )(SideNavigationMenu),
  ),
);
