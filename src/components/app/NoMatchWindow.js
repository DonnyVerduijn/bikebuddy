import React from 'react';
import PropTypes from 'prop-types';
import Window from './../common/Window';

const NoMatchWindow = ({ match, location, history }) => {
  console.log(match, location, history);
  return (
    <Window>
      <h1>No match!</h1>
    </Window>
  );
};

NoMatchWindow.propTypes = {
  match: PropTypes.any,
  location: PropTypes.any,
  history: PropTypes.any,
};

export default NoMatchWindow;
