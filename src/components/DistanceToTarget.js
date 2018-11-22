import React from 'react';
import PropTypes from 'prop-types';
import Text from './common/Text';

const DistanceToTarget = ({ distance }) => {
  return distance ? <Text>{`${distance}M`}</Text> : null;
};

DistanceToTarget.propTypes = {
  distance: PropTypes.string,
};

export default DistanceToTarget;