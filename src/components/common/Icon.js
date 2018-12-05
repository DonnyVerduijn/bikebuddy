import React from 'react';
import PropTypes from 'prop-types';
import checkmarkIcon from '@material-ui/icons/CheckRounded';
import closeIcon from '@material-ui/icons/CloseRounded';
import bikeIcon from './../../assets/icon-bike.svg';
import navigationIcon from '@material-ui/icons/NavigationRounded';
import addIcon from '@material-ui/icons/AddRounded';
import addLocationIcon from '@material-ui/icons/AddLocationRounded';
import deleteIcon from '@material-ui/icons/DeleteRounded';
import menuIcon from '@material-ui/icons/MenuRounded';
import backIcon from '@material-ui/icons/ArrowBackRounded';
import settingsIcon from '@material-ui/icons/SettingsRounded';
import storageIcon from '@material-ui/icons/LocalParkingRounded';
import aboutIcon from '@material-ui/icons/InfoRounded';
import historyIcon from '@material-ui/icons/HistoryRounded';
import mapIcon from '@material-ui/icons/MapRounded';

const getIcon = type => {
  switch (type) {
    case 'checkmark':
      return checkmarkIcon;
    case 'close':
      return closeIcon;
    case 'bike':
      return bikeIcon;
    case 'navigate':
      return navigationIcon;
    case 'add':
      return addIcon;
    case 'addLocation':
      return addLocationIcon;
    case 'delete':
      return deleteIcon;
    case 'back':
      return backIcon;
    case 'menu':
      return menuIcon;
    case 'settings':
      return settingsIcon;
    case 'storage':
      return storageIcon;
    case 'about':
      return aboutIcon;
    case 'history':
      return historyIcon;
    case 'map':
      return mapIcon;
    default:
      return checkmarkIcon;
  }
};

const Icon = ({ type, color, size, margin, rotate, onClick, ...props }) => {
  const MaterialIcon = getIcon(type);
  return (
    <MaterialIcon
      style={{
        ...(color && { fill: color }),
        ...(size && { width: size, height: size }),
        ...(rotate && { transform: `rotate(${rotate}deg)` }),
        ...(margin && { margin: margin }),
      }}
      onClick={onClick}
      {...props}
    />
  );
};

Icon.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  margin: PropTypes.string,
  rotate: PropTypes.number,
  onClick: PropTypes.func,
};

Icon.defaultProps = {
  type: '',
  color: null,
  size: null,
  margin: '',
  rotate: 0,
  onClick: () => {},
};

export default Icon;
