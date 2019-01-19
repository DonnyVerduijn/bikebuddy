import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import Window from '../common/Window';
import GoogleMap from '../GoogleMap';
import FinderAppBarContainer from '../containers/FinderAppBarContainer';
import DrawerMenuContainer from '../containers/DrawerMenuContainer';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/AddRounded';
// import GeoService from './../../util/GeoService';

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
  },
});

class FinderWindow extends Component {
  constructor(props) {
    super(props);
    this.state = { mapIsReady: false };
  }

  // componentDidUpdate(prevProps) {
  //   if (GeoService.getDistance(prevProps.position, this.props.position) > 5) {
  //     this.props.fetchStorages(this.props.position);
  //   }
  //   if (this.state.mapIsReady) {
  //     this.props.storages.map(storage => {
  //       this.map.addMarker({ position: storage.position });
  //     });
  //     // if(!prevState.mapIsReady)
  //     // this.map.addMarker({ position: this.props.position });
  //   }
  // }

  setMapIsReady() {
    this.setState({ mapIsReady: true });
  }

  attachMap(map) {
    this.map = map;
  }

  render() {
    const { isMenuOpen, closeMenu, openMenu, position, storeBike } = this.props;
    return (
      <>
        <DrawerMenuContainer isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        <Window className={css(styles.Window)}>
          <FinderAppBarContainer onLeftIconClick={openMenu} />
          <GoogleMap
            position={position}
            onMapReady={map => {
              this.setMapIsReady();
              this.attachMap(map);
            }}
          />
          <StoreBikeButton onClick={storeBike} />
        </Window>
      </>
    );
  }
}

const StoreBikeButton = ({ onClick }) => {
  return (
    <Fab
      color="primary"
      className={css(styles.Fab)}
      size="large"
      aria-label="Add"
      onClick={onClick}
    >
      <AddIcon />
    </Fab>
  );
};

StoreBikeButton.propTypes = {
  onClick: PropTypes.func,
};

FinderWindow.propTypes = {
  position: PropTypes.object,
  match: PropTypes.object,
  isMenuOpen: PropTypes.bool,
  openMenu: PropTypes.func,
  closeMenu: PropTypes.func,
  storeBike: PropTypes.func,
  storages: PropTypes.array,
  fetchStorages: PropTypes.func,
};

export default FinderWindow;
