import React from 'react';
import PropTypes from 'prop-types';
import Window from './../common/Window';
import SettingsNavigationContainer from '../containers/SettingsAppBarContainer';
import Typography from '@material-ui/core/Typography';

const SettingsWindow = ({ userId }) => {
  return (
    <Window>
      <SettingsNavigationContainer />
      <Typography>{userId}</Typography>
    </Window>
  );
};

SettingsWindow.propTypes = {
  userId: PropTypes.string,
};

export default SettingsWindow;
