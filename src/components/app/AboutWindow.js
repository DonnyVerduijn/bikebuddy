import React from 'react';
import PropTypes from 'prop-types';
import Window from '../common/Window';
import AboutNavigationContainer from '../containers/AboutAppBar';

const AboutWindow = () => {
  return (
    <Window>
      <AboutNavigationContainer />
      <h1>About</h1>
    </Window>
  );
};

AboutWindow.propTypes = {
  match: PropTypes.object,
};

export default AboutWindow;
