import React from 'react';
import PropTypes from 'prop-types';
import Window from '../common/Window';
import DistanceToTargetContainer from '../containers/DistanceToTargetContainer';
import DirectionArrowContainer from '../containers/DirectionArrowContainer';
import NavigatorButtonGroupContainer from './../containers/NavigatorButtonGroupContainer';

const NavigatorWindow = ({ match }) => {
  console.log(match.params.id);
  return (
    <Window>
      <DistanceToTargetContainer bikeId={match.params.id} />
      <DirectionArrowContainer bikeId={match.params.id} />
      <NavigatorButtonGroupContainer bikeId={match.params.id} />
    </Window>
  );
};

NavigatorWindow.propTypes = {
  match: PropTypes.object,
};

export default NavigatorWindow;
