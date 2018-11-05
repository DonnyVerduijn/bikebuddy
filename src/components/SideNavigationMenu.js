import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import List from './common/List';
import ListItem from './common/ListItem';

const styles = StyleSheet.create({
  SideNavigationMenu: {
    position: 'absolute',
    width: '18.5em',
    left: '-18.5em',
    top: '0',
    bottom: '0',
    background: 'rgb(255,255,255)',
    transition: 'left .25s ease-in-out',
    zIndex: 1000,
  },
  open: {
    left: 0,
  },
  ListItem: {
    display: 'block',
    padding: '.75em 1em',
    fontSize: '1.1em',
    color: 'rgb(34,34,34)',
    borderBotom: '1px solid rgba(0,0,0,0.1)',
  },
  List: {
    marginTop: '.75em',
  },
});

const SideNavigationMenu = ({ isOpen, toTargetWindow }) => {
  return (
    <div
      className={`${css(styles.SideNavigationMenu)} ${isOpen &&
        css(styles.open)}`}
    >
      <List className={css(styles.List)}>
        <ListItem
          className={css(styles.ListItem)}
          onClick={() => toTargetWindow('/')}
        >
          Bikelist
        </ListItem>
        <ListItem
          className={css(styles.ListItem)}
          onClick={() => toTargetWindow('/map')}
        >
          Map
        </ListItem>
        <ListItem
          className={css(styles.ListItem)}
          onClick={() => toTargetWindow('/settings')}
        >
          Settings
        </ListItem>
        <ListItem
          className={css(styles.ListItem)}
          onClick={() => toTargetWindow('/about')}
        >
          About
        </ListItem>
      </List>
    </div>
  );
};

SideNavigationMenu.propTypes = {
  isOpen: PropTypes.bool,
  toTargetWindow: PropTypes.func,
};

export default SideNavigationMenu;
