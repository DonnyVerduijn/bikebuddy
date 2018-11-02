import React from 'react';
import PropTypes from 'prop-types';
import Text from './common/Text';

const DistanceToTarget = ({ distanceToTarget }) => {
  return distanceToTarget ? <Text>{`${distanceToTarget}M`}</Text> : null;
};

DistanceToTarget.propTypes = {
  distanceToTarget: PropTypes.string,
};

export default DistanceToTarget;