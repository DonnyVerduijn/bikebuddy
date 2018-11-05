import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Window from './../common/Window';
import BikeListContainer from './../containers/BikeListContainer';
import StoreBikeButtonContainer from './../containers/StoreBikeButtonContainer';
import SideNavigationMenuContainer from './../containers/SideNavigationMenuContainer';
import BikeListNavigationBarContainer from './../containers/BikeListNavigationBarContainer';

const BikeListWindow = ({ isMenuOpen, openMenu, closeMenu }) => {
  return (
    <Fragment>
      <SideNavigationMenuContainer isOpen={isMenuOpen} />
      <Window onClick={closeMenu} isDimmed={isMenuOpen}>
        <BikeListNavigationBarContainer onMenuIconClick={openMenu} />
        <BikeListContainer />
        <StoreBikeButtonContainer />
      </Window>
    </Fragment>
  );
};

BikeListWindow.propTypes = {
  isMenuOpen: PropTypes.bool,
  openMenu: PropTypes.func,
  closeMenu: PropTypes.func,
};

export default BikeListWindow;
