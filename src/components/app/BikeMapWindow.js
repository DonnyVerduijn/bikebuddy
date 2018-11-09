import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import Window from '../common/Window';
import Navigation from '../common/Navigation';
import Text from './../common/Text';
import Icon from './../common/Icon';
import NativeGoogleMap from './../../util/NativeGoogleMap';

const styles = StyleSheet.create({
  Map: {
    width: '100%',
    height: '100%',
  },
  Window: {
    background: 'none',
  },
});

class BikeMapWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    NativeGoogleMap(this.mapElement).onMapReady((map) => {
      this.googleMap = map;
      map.setMyLocationEnabled();
      map.setMyLocationButtonEnabled();
      console.log(map);
      map.on('map_drag', () => {
        console.log('map dragged');
      });
      map.animateCamera({
        target: {lat: 37.422359, lng: -122.084344},
        zoom: 17,
        tilt: 60,
        bearing: 140,
        duration: 5000
      }, function() {
        //alert("Camera target has been changed");
      });
    });
  }

  componentWillUnmount() {
    this.googleMap.remove();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { goBack, showSettings } = this.props;
    return (
      <Window className={css(styles.Window)}>
        <Navigation
          text={props => <Text {...props}>Recent</Text>}
          leftIcon={props => <Icon {...props} type="back" onClick={goBack} />}
          rightIcon={props => (
            <Icon {...props} type="settings" onClick={showSettings} />
          )}
        />
        <div
          style={{ width: '100%', height: '100%' }}
          className={css(styles.Map)}
          ref={ref => (this.mapElement = ref)}
        />
        {/* <span>{this.props.match.params.userId}</span> */}
        {/* <button onClick={() => this.handleClick()}>Click me</button> */}
      </Window>
    );
  }
}

BikeMapWindow.propTypes = {
  match: PropTypes.object,
};

export default BikeMapWindow;
