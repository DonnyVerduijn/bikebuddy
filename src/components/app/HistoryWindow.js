import React from 'react';
import PropTypes from 'prop-types';
import Window from '../common/Window';
import HistoryListContainer from '../containers/HistoryListContainer';

import HistoryAppBarContainer from '../containers/HistoryAppBarContainer';


const HistoryWindow = () => {
  return (
      <Window>
        <HistoryAppBarContainer />
        <HistoryListContainer />

      </Window>

  );
};

HistoryWindow.propTypes = {
  isMenuOpen: PropTypes.bool,
  openMenu: PropTypes.func,
  closeMenu: PropTypes.func,
  storeBike: PropTypes.func,
};

export default HistoryWindow;
