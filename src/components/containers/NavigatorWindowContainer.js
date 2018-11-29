import React, { Component } from 'react';
import { connect } from 'react-redux';
import geoService from './../../util/GeoService';
import NavigatorWindow from './../app/NavigatorWindow';
import bikeSelectors from './../../selectors/BikeSelectors';
import bikeActions from './../../actions/BikeActions';
import PropTypes from 'prop-types';
import locationSelectors from './../../selectors/LocationSelectors';
import MagneticSensor from './../../util/MagneticSensor';
import PositionSensor from './../../util/PositionSensor';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';

const convertOrientation = orientation => {
  return 360 - orientation - 180;
};

const mapStateToProps = (state, ownProps) => {
  const bike = bikeSelectors.getById(state, ownProps.match.params.id);

  return {
    bikeId: ownProps.match.params.id,
    bikeLocation: locationSelectors.getById(bike.locationIds[0]),
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
    showBikeList: ({ history }) => () => {
      history.push('/');
    },
  }),
);

class NavigatorWindowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { rotation: 0, distance: 0 };
  }

  componentDidMount() {
    let position = null;

    const setDirection = orientation => {
      const direction = position
        ? convertOrientation(
            geoService.getRhumbLineBearing(position, this.props.bikeLocation) -
              orientation.alpha -
              window.orientation,
          )
        : 0;
      this.setState({ direction });
    };

    const setDistance = position => {
      const distance = geoService.getDistance(
        position,
        this.props.bikeLocation,
      );
      this.setState({ distance });
    };

    this.positionSensor = PositionSensor.listen(setDistance);
    this.magneticSensor = MagneticSensor.listen(setDirection);
  }

  componentWillUnmount() {
    PositionSensor.unlisten(this.positionSensor);
    MagneticSensor.unlisten(this.magneticSensor);
  }

  render() {
    return (
      <NavigatorWindow
        bikeId={this.props.bikeId}
        distance={this.state.distance}
        direction={this.state.direction}
      />
    );
  }
}

NavigatorWindowContainer.propTypes = {
  bikeId: PropTypes.string,
  bikeLocation: PropTypes.string,
};

export default withRouter(attachHandlers(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(NavigatorWindowContainer),
));
