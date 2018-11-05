import React from 'react';
import PropTypes from 'prop-types';
import Window from '../common/Window';

const BikeMapWindow = ({ match }) => {
  return (
    <Window>
      <h1>MapWindow</h1>
      <span>{match.params.userId}</span>
    </Window>
  );
};

BikeMapWindow.propTypes = {
  match: PropTypes.object,
};

export default BikeMapWindow;
