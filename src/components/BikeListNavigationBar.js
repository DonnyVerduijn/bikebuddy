import React from 'react';
import NavigationBar from './common/NavigationBar';
import Icon from './common/Icon';
import Text from './common/Text';

const BikeListNavigationBar = ({ openMenu, showSettings }) => {
  return (
    <NavigationBar
      title={props => <Text {...props}>BikeBuddy</Text>}
      leftIcon={props => <Icon {...props} type='menu' onClick={openMenu}/>}
      rightIcon={props => <Icon {...props} type="settings" onClick={showSettings} />}
    />
  );
};

export default BikeListNavigationBar;
