import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Window from './../common/Window';
import BikeListContainer from './../containers/BikeListContainer';
import StoreBikeButtonContainer from './../containers/StoreBikeButtonContainer';
import SideNavigationMenuContainer from './../containers/SideNavigationMenuContainer';
import BikeListNavigationBarContainer from './../containers/BikeListNavigationBarContainer';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  isMenuVisible: {
    transition: 'left .25s ease-in-out',
    left: '0',
  }
});

const BikeListWindow = props => {
  console.log(props);
  return (
    <Fragment>
      <SideNavigationMenuContainer {...props} />
      <Window className={props.isMenuVisible ? css(styles.isMenuVisible) : ''} {...props}>
        <BikeListNavigationBarContainer {...props} />
        <BikeListContainer />
        <StoreBikeButtonContainer />
      </Window>
    </Fragment>
  );
};

BikeListWindow.propTypes = {
  isMenuVisible: PropTypes.bool,
  setIsMenuVisible: PropTypes.func,
};

export default BikeListWindow;
