import React from 'react';
import PropTypes from 'prop-types';
import Window from './../common/Window';
import BikeListContainer from './../containers/BikeListContainer';

import BikeListNavigationContainer from '../containers/BikeListNavigationContainer';
import HorizontalGroup from './../common/HorizontalGroup';
import AddIcon from '@material-ui/icons/AddRounded';
import Button from '@material-ui/core/Button';

const BikeListWindow = ({ storeBike }) => {
  return (
      <Window>
        <BikeListNavigationContainer />
        <BikeListContainer />
        <HorizontalGroup>
          <Button variant="contained" color="secondary" onClick={storeBike}>
            store
            <AddIcon />
          </Button>
        </HorizontalGroup>
      </Window>

  );
};

BikeListWindow.propTypes = {
  isMenuOpen: PropTypes.bool,
  openMenu: PropTypes.func,
  closeMenu: PropTypes.func,
  storeBike: PropTypes.func,
};

export default BikeListWindow;
