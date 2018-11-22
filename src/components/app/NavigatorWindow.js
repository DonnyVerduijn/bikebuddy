import React from 'react';
import PropTypes from 'prop-types';
import Window from '../common/Window';
import DistanceToTarget from '../DistanceToTarget';
import DirectionArrow from '../DirectionArrow';
import NavigatorButtonGroupContainer from './../containers/NavigatorButtonGroupContainer';

const NavigatorWindow = ({ bikeId, direction, distance }) => {
  return (
    <Window>
      <DistanceToTarget distance={distance} />
      <DirectionArrow direction={direction} />
      <NavigatorButtonGroupContainer bikeId={bikeId}/>
    </Window>
  );
};

NavigatorWindow.propTypes = {
  bikeId: PropTypes.number,
  direction: PropTypes.number,
  distance: PropTypes.number,
};

export default NavigatorWindow;
