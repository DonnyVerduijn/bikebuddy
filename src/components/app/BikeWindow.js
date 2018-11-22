import React from 'react';
import PropTypes from 'prop-types';
import Window from '../common/Window';
import BikeNavigationContainer from './../containers/BikeNavigationContainer';

const BikeWindow = ({ match }) => {
  return (
    <Window>
      <BikeNavigationContainer/>
      <h1>BikeWindow</h1>
      <p>{match.params.id}</p>
    </Window>
  );
};

BikeWindow.propTypes = {
  match: PropTypes.object,
};

export default BikeWindow;
