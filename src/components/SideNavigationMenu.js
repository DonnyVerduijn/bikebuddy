import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import List from './common/List';
import ListItem from './common/ListItem';

const styles = StyleSheet.create({
  SideNavigationMenu: {
    position: 'absolute',
    width: '15em',
    left: '-15em',
    top: '0',
    bottom: '0',
    background: 'rgb(34,34,34)',
    transition: 'left .25s ease-in-out',
    zIndex: 1000,
  },
  isMenuVisible: {
    left: 0,
  },
  ListItem: {
      display: 'block',
      padding: '1em',
      fontSize: '1.25em',
      color: 'rgb(255,255,255)',

  },
  List: {
      background: 'rgb(34,34,34)',
  }
});

const SideNavigationMenu = ({ isMenuVisible, toTargetWindow }) => {
    console.log('SideNavigationMenu', isMenuVisible);
    return (
    <div
      className={`${css(styles.SideNavigationMenu)} ${isMenuVisible &&
        css(styles.isMenuVisible)}`}
    >
    <List className={css(styles.List)}>
        <ListItem className={css(styles.ListItem)} onClick={() => toTargetWindow('/')}>Bikelist</ListItem>
        <ListItem className={css(styles.ListItem)} onClick={() => toTargetWindow('/map')}>Map</ListItem>
        <ListItem className={css(styles.ListItem)} onClick={() => toTargetWindow('/settings')}>Settings</ListItem>
        <ListItem className={css(styles.ListItem)} onClick={() => toTargetWindow('/about')}>About</ListItem>
    </List>
    </div>
  );
};

SideNavigationMenu.propTypes = {
    isMenuVisible: PropTypes.bool,
    toTargetWindow: PropTypes.func,
};

export default SideNavigationMenu;
