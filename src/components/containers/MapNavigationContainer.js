import { compose, withProps, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppBar from '../AppBar';

const enhance = compose(
  withProps(props => ({
    ...props,
    title: 'BikeBuddy',
    leftIcon: 'menu',
    // rightIcon: 'addLocation',
  })),
  withHandlers({
    leftIconHandler: ({ onLeftIconClick }) => () => {
      onLeftIconClick();
    },
  }),
);

// const mapDispatchToProps = (dispatch) => ({
//     rightIconHandler: () => dispatch({ type: 'STORAGE_ADD' })
// });

export default withRouter(
  enhance(
    connect(
      null,
      null,// mapDispatchToProps,
    )(AppBar),
  ),
);
