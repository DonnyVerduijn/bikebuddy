import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import List from './common/List';
import ListItem from './common/ListItem';
// import Icon from './common/Icon';
import Text from './common/Text';

const styles = StyleSheet.create({
  BottomMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgb(0,0,0)',
    color: 'rgb(255,255,255)',
  },
  BottomMenuItem: {
    padding: '0.5em',
  },
});

const BottomMenu = ({ showBikeList, showMap, showUserProfile }) => {
  return (
    <List className={css(styles.BottomMenu)}>
      <ListItem
        className={css(styles.BottomMenuItem)}
        onClick={showBikeList}
      >
        {/* <Icon /> */}
        <Text>BikeList</Text>
      </ListItem>
      <ListItem
        className={css(styles.BottomMenuItem)}
        onClick={showMap}
      >
        {/* <Icon /> */}
        <Text>Map</Text>
      </ListItem>
      <ListItem
        className={css(styles.BottomMenuItem)}
        onClick={showUserProfile}
      >
        {/* <Icon /> */}
        <Text>Profile</Text>
      </ListItem>
    </List>
  );
};

BottomMenu.propTypes = {
  history: PropTypes.object,
  showBikeList: PropTypes.func,
  showMap: PropTypes.func,
  showUserProfile: PropTypes.func,
};

export default BottomMenu;
