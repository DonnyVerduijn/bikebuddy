import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from './common/Icon';

const styles = StyleSheet.create({
  SideNavigationMenu: {},
  List: {
    marginTop: '.75em',
    width: '17em',
  },
});

const menuItems = [
  { icon: 'map', text: 'Finder', path: '/' },
  { icon: 'history', text: 'History', path: '/history' },
  { icon: 'settings', text: 'Settings', path: '/settings' },
  { icon: 'about', text: 'About', path: '/about' },
];

const SideNavigationMenu = props => {
  const { toTargetWindow, closeMenu } = props;
  let { isMenuOpen } = props;
  return (
    <SwipeableDrawer
      anchor="left"
      className={css(styles.SideNavigationMenu)}
      open={isMenuOpen}
      onClose={closeMenu}
      onOpen={() => {}}
    >
      <List className={css(styles.List)}>
        {menuItems.map((item, index) => {
          return (
            <ListItem key={index} button onClick={toTargetWindow(item.path)}>
              <ListItemIcon>
                <Icon type={item.icon} />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          );
        })}
        <Divider />
      </List>
    </SwipeableDrawer>
  );
};

SideNavigationMenu.propTypes = {
  isMenuOpen: PropTypes.bool,
  toTargetWindow: PropTypes.func,
  closeMenu: PropTypes.func,
};

export default SideNavigationMenu;
