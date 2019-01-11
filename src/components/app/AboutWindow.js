import React from 'react';
import PropTypes from 'prop-types';
import Window from '../common/Window';
import AboutNavigationContainer from '../containers/AboutAppBar';
import Typography from '@material-ui/core/Typography'

const AboutWindow = () => {
  return (
    <Window>
      <AboutNavigationContainer />
      <Typography variant="h1">About</Typography>
      <Typography>
        This application is developed by Donny Verduijn as a school assignment.
        It provides a way to find back your bike in large bicycle storages.
      </Typography>
    </Window>
  );
};

AboutWindow.propTypes = {
  match: PropTypes.object,
};

export default AboutWindow;
