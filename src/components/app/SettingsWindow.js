import React from 'react';
import PropTypes from 'prop-types';
import Window from './../common/Window';

const SettingsWindow = ({ userId }) => {
  return (
    <Window>
      <h1>SettingsWindow</h1>
      <p>{userId}</p>
    </Window>
  );
};

SettingsWindow.propTypes = {
  userId: PropTypes.string,
};

export default SettingsWindow;
