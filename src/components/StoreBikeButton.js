import React from 'react';
import PropTypes from 'prop-types';
import Button from './common/Button';
import Icon from './common/Icon';
import Text from './common/Text';

const StoreBikeButton = ({ storeBike }) => {
  return (
    <Button
      onClick={() => storeBike()}
      icon={props => <Icon type="add" style={props.style} {...props} />}
      text={props => <Text {...props}>store</Text>}
      isRaised
    />
  );
};

StoreBikeButton.propTypes = {
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default StoreBikeButton;
