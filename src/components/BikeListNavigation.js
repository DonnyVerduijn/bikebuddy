import React from 'react';
import Navigation from './common/Navigation';
import Icon from './common/Icon';
import Text from './common/Text';

const BikeListNavigation = ({ openMenu, showSettings }) => {
  return (
    <Navigation
      title={props => <Text {...props}>BikeBuddy</Text>}
      leftIcon={props => <Icon {...props} type='menu' onClick={openMenu}/>}
      rightIcon={props => <Icon {...props} type="settings" onClick={showSettings} />}
    />
  );
};

export default BikeListNavigation;
