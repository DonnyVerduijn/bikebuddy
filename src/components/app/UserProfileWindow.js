import React from 'react';
import PropTypes from 'prop-types';
import Window from '../common/Window';

const UserProfileWindow = ({ match }) => {
  return (
    <Window>
      <h1>ProfileWindow</h1>
      <span>{match.params.id}</span>
    </Window>
  );
};

UserProfileWindow.propTypes = {
  match: PropTypes.object,
};

export default UserProfileWindow;
