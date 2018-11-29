import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import NativeGoogleMap from './../util/NativeGoogleMap';
import MagneticSensor from './../util/MagneticSensor';
import PositionSensor from './../util/PositionSensor';
import clamp from 'lodash.clamp';

const styles = StyleSheet.create({
  Map: {
    width: '100%',
    height: '100%',
  },
});

const orientationToTilt = ({ gamma, beta }) => {
  const { orientation } = window;
  const isLandscape = orientation === 90 || orientation === -90;
  const shouldBeNegative = orientation === 90;
  const range = { min: 0, max: 89 };
  return clamp(
    isLandscape ? (shouldBeNegative ? 0 - gamma : gamma) : beta,
    range.min,
    range.max,
  );
};

const orientationToBearing = orientation => {
  return 360 - (orientation.alpha - window.orientation) - 180;
};

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: { lat: 0, lng: 0 },
      zoom: 15,
      tilt: 0,
      bearing: 0,
    };

    // update the tilt and bearing from the orientation
    const updateOrientation = orientation => {
      this.setState({
        tilt: orientationToTilt(orientation),
        bearing: orientationToBearing(orientation),
      });
    };

    // update the postiion from the device location
    const updatePosition = position => {
      this.setState({
        target: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    };

    // attach listeners to sensor api
    this.magneticSensor = MagneticSensor.listen(updateOrientation);
    this.positionSensor = PositionSensor.getPosition()
      .then(updatePosition)
      .catch(() => {
        console.log('no position available');
      });
  }

  componentDidMount() {
    this.map = NativeGoogleMap({
      element: this.mapElement,
      camera: this.state,
    });

    // this.map.onCameraMove(() => {
    //   console.log('camera moved', this.map.getCameraPosition());
    //   this.setState({ target: this.map.getCameraPosition().target });
    // });

    // this.map.onCameraMoveEnd(() => {
    //   console.log('cameraMoveEnd', this.map.getCameraPosition());
    // });
  }

  // when the state or props have changed
  componentDidUpdate(previousProps) {
    // update tilt and bearing
    this.map.moveCamera({
      target: this.state.target,
      tilt: this.state.tilt,
      bearing: this.state.bearing,
    });

    if (this.props.storages === previousProps.storages) {
      this.props.storages.forEach(storage => {
        this.map.addMarker({
          position: storage.geometry.location,
          title: storage.name,
          snippet: storage.vicinity,
        });
      });
    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div
        style={{ width: '100%', height: '100%' }}
        className={css(styles.Map)}
        ref={ref => (this.mapElement = ref)}
      />
    );
  }
}

GoogleMap.propTypes = {
  mapPosition: PropTypes.object,
  storages: PropTypes.array,
  fetchStorages: PropTypes.func,
};

export default GoogleMap;
