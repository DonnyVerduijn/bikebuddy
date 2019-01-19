import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import NativeGoogleMap from './../util/NativeGoogleMap';
import MagneticSensor from './../util/MagneticSensor';
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

const currentPositionIndicator = position => ({
  position,
  radius: 5,
  strokeColor: '#3344cc',
  fillColor: '#3344cc',
});

class GoogleMap extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      target: { lat: 0, lng: 0 },
      zoom: 15,
      tilt: 0,
      bearing: 0,
    };
  }

  componentDidMount() {
    this.map = NativeGoogleMap({
      element: this.mapCanvas,
      camera: {
        target: this.state.target,
        zoom: this.state.zoom,
        tilt: this.state.tilt,
        bearing: this.state.bearing,
      },
    });

    // this.map.onMapReady(() => this.props.onMapReady(this.map));
    this.map.onMapReady(this.props.onMapReady(this.map));

    this.map.addCircle(currentPositionIndicator(this.state.target));

    // attach listeners to sensor api
    this.magneticSensorEvent = MagneticSensor.listen(orientation => {
      this.setState({
        tilt: orientationToTilt(orientation),
        bearing: orientationToBearing(orientation),
      });
    });
  }

  componentDidUpdate(previousProps) {
    // update tilt and bearing on state change
    this.map.moveCamera({
      target: this.state.target,
      tilt: this.state.tilt,
      bearing: this.state.bearing,
    });

    if (this.props.position !== previousProps.position) {
      this.setState({
        target: {
          lat: this.props.position.lat,
          lng: this.props.position.lng,
        },
      });
    }
  // if (this.props.storages === previousProps.storages) {
  //   this.props.storages.forEach(storage => {
  //     this.map.addMarker({
  //       position: storage.geometry.location,
  //       title: storage.name,
  //       snippet: storage.vicinity,
  //     });
  //   });
  }

  componentWillUnmount() {
    MagneticSensor.unlisten(this.magneticSensorEvent);
    this.map.remove();
  }

  render() {
    return (
      <div
        style={{ width: '100%', height: '100%' }}
        className={css(styles.Map)}
        ref={ref => (this.mapCanvas = ref)}
      />
    );
  }
}

GoogleMap.propTypes = {
  onMapReady: PropTypes.func,
  position: PropTypes.object,
  storages: PropTypes.array,
  fetchStorages: PropTypes.func,
};

export default GoogleMap;
