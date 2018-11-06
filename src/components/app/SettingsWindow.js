import React from 'react';
import PropTypes from 'prop-types';
import Window from './../common/Window';
import SettingsNavigationBarContainer from './../containers/SettingsNavigationBarContainer';

const SettingsWindow = ({ userId }) => {
  return (
    <Window>
      <SettingsNavigationBarContainer />
      <p>{userId}</p>
    </Window>
  );
};

SettingsWindow.propTypes = {
  userId: PropTypes.string,
};

export default SettingsWindow;
