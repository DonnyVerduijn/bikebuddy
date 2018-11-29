import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import Window from '../common/Window';
import MapContainer from '../containers/MapContainer';
import MapNavigationContainer from '../containers/MapNavigationContainer';
import SideNavigationMenuContainer from './../containers/SideNavigationMenuContainer';

const styles = StyleSheet.create({
  Map: {
    width: '100%',
    height: '100%',
  },
  Window: {
    background: 'none',
  },
});

const MapWindow = props => {
  return (
    <>
      <SideNavigationMenuContainer
        isMenuOpen={props.isMenuOpen}
        closeMenu={props.closeMenu}
      />
      <Window className={css(styles.Window)}>
        <MapNavigationContainer onLeftIconClick={props.openMenu}/>
        <MapContainer />
      </Window>
    </>
  );
};

MapWindow.propTypes = {
  match: PropTypes.object,
  isMenuOpen: PropTypes.bool,
  closeMenu: PropTypes.func,
};

export default MapWindow;
