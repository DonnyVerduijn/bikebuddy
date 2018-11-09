import React from 'react';
import PropTypes from 'prop-types';
import Window from './../common/Window';
import SettingsNavigationContainer from './../containers/SettingsNavigationContainer';

const SettingsWindow = ({ userId }) => {
  return (
    <Window>
      <SettingsNavigationContainer />
      <p>{userId}</p>
    </Window>
  );
};

SettingsWindow.propTypes = {
  userId: PropTypes.string,
};

export default SettingsWindow;
