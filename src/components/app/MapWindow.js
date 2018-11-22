import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import Window from '../common/Window';
import MapContainer from '../containers/MapContainer';
import MapNavigationContainer from '../containers/MapNavigationContainer';

const styles = StyleSheet.create({
  Map: {
    width: '100%',
    height: '100%',
  },
  Window: {
    background: 'none',
  },
});

class MapWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Window className={css(styles.Window)}>
        <MapNavigationContainer/>
        <MapContainer />
      </Window>
    );
  }
}

MapWindow.propTypes = {
  match: PropTypes.object,
};

export default MapWindow;
