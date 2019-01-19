import React, { Component } from 'react';
import { connect } from 'react-redux';
import geoService from './../../util/GeoService';
import NavigatorWindow from './../app/NavigatorWindow';
import bikeSelectors from './../../selectors/BikeSelectors';
import bikeActions from './../../actions/BikeActions';
import PropTypes from 'prop-types';
import CoordinateSelectors from './../../selectors/CoordinateSelectors';
import MagneticSensor from './../../util/MagneticSensor';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';

const convertOrientation = orientation => {
  return 360 - orientation - 180;
};

const mapStateToProps = (state, ownProps) => {
  const bike = bikeSelectors.getById(state, ownProps.match.params.id);
  const bikeLocation = CoordinateSelectors.getById(state, bike.locationIds[0]);

  return {
    bikeId: ownProps.match.params.id,
    bikeLocation,
    position: CoordinateSelectors.getMostRecent(state),
  };
};

const mapDispatchToProps = (dispatch, { bikeId }) => ({
  storeBike: () => dispatch(bikeActions.storeBike()),
  hasFound: () => {
    dispatch({ type: 'BIKE_FOUND', bikeId });
  },
});

const attachHandlers = compose(
  withHandlers({
    goBack: ({ history }) => () => {
      history.goBack();
    },
  }),
);

class NavigatorWindowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { rotation: 0, distance: 0 };
  }

  componentDidMount() {
    this.magneticSensorEvent = MagneticSensor.listen(orientation => {
      const { position, bikeLocation } = this.props;
      const direction = convertOrientation(
        geoService.getRhumbLineBearing(position, bikeLocation) -
          orientation.alpha -
          window.orientation,
      );
      this.setState({ direction });
    });
  }

  componentDidUpdate(previousProps) {
    if (this.props.position !== previousProps.position) {
      const { position, bikeLocation } = this.props;
      const distance = geoService.getDistance(position, bikeLocation);
      this.setState({ distance });
    }
  }

  componentWillUnmount() {
    MagneticSensor.unlisten(this.magneticSensorEvent);
  }

  render() {
    return (
      <NavigatorWindow
        goBack={this.props.goBack}
        hasFound={this.props.hasFound}
        bikeId={this.props.bikeId}
        distance={this.state.distance}
        direction={this.state.direction}
      />
    );
  }
}

NavigatorWindowContainer.propTypes = {
  position: PropTypes.object,
  bikeId: PropTypes.string,
  bikeLocation: PropTypes.object,
  goBack: PropTypes.func,
  hasFound: PropTypes.func,
};

export default withRouter(
  attachHandlers(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    )(NavigatorWindowContainer),
  ),
);
