import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import Window from '../common/Window';
import MapContainer from '../containers/MapContainer';
import FinderAppBarContainer from '../containers/FinderAppBarContainer';
import DrawerMenuContainer from '../containers/DrawerMenuContainer';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/AddRounded';

const styles = StyleSheet.create({
  Map: {
    width: '100%',
    height: '100%',
  },
  Window: {
    background: 'none',
  },
  Fab: {
    position: 'absolute',
    right: '2em',
    bottom: '2em',
  }
});

const FinderWindow = props => {
  return (
    <>
      <DrawerMenuContainer
        isMenuOpen={props.isMenuOpen}
        closeMenu={props.closeMenu}
      />
      <Window className={css(styles.Window)}>
        <FinderAppBarContainer onLeftIconClick={props.openMenu} />
        <MapContainer />
        <Fab color="primary" className={css(styles.Fab)} size="large" aria-label="Add" onClick={props.storeBike}>
          <AddIcon />
        </Fab>
      </Window>
    </>
  );
};

FinderWindow.propTypes = {
  match: PropTypes.object,
  isMenuOpen: PropTypes.bool,
  closeMenu: PropTypes.func,
};

export default FinderWindow;
