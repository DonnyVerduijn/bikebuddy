import React from 'react';
import PropTypes from 'prop-types';
import Window from '../common/Window';

const BikeDetailWindow = ({ match }) => {
  console.log(match);
  return (
    <Window>
      <h1>BikeDetailWindow</h1>
      <p>{match.params.id}</p>
    </Window>
  );
};

BikeDetailWindow.propTypes = {
  match: PropTypes.object,
};

export default BikeDetailWindow;
