import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// import Icon from './common/Icon';
// import Text from './common/Text';
import HorizontalGroup from './common/HorizontalGroup';
import AddIcon from '@material-ui/icons/AddRounded';

const StoreBikeButton = ({ storeBike }) => {
  return (
    <HorizontalGroup>
      <Button
        variant="contained"
        color="secondary"
        onClick={storeBike}
      >
        store
        <AddIcon />
      </Button>
    </HorizontalGroup>
  );
};

StoreBikeButton.propTypes = {
  storeBike: PropTypes.func,
};

export default StoreBikeButton;
