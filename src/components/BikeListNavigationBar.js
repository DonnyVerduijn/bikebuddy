import React from 'react';
import NavigationBar from './common/NavigationBar';
import Icon from './common/Icon';
import Text from './common/Text';
import { StyleSheet, css } from 'aphrodite/no-important'; 

const styles = StyleSheet.create({
  isMenuVisible: {
    transition: 'left .25s ease-in-out',
    left: '15em',
  }
});

const BikeListNavigationBar = ({ isMenuVisible, setIsMenuVisible, showSettings }) => {
  console.log(isMenuVisible);
  return (
    <NavigationBar
      className={isMenuVisible && css(styles.isMenuVisible)}
      title={props => <Text {...props}>BikeBuddy</Text>}
      leftIcon={props => <Icon {...props} type={isMenuVisible ? 'close' : 'menu'} onClick={setIsMenuVisible}/>}
      rightIcon={props => <Icon {...props} type="settings" onClick={showSettings} />}
    />
  );
};

export default BikeListNavigationBar;
