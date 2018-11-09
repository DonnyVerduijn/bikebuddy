import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import checkmarkIcon from './../../assets/icon-checkmark.svg';
import cancelIcon from './../../assets/icon-cancel.svg';
import bikeIcon from './../../assets/icon-bike.svg';
import navigateIcon from './../../assets/icon-navigate.svg';
import addIcon from './../../assets/icon-add.svg';
import deleteIcon from './../../assets/icon-delete.svg';
import menuIcon from './../../assets/icon-menu.svg';
import backIcon from './../../assets/icon-back-arrow.svg';

const styles = StyleSheet.create({
  Icon: {
    display: 'inline-block',
    width: '.85em',
    height: '.85em',
    fill: 'white',
  },
});

const getSVGIcon = type => {
  switch (type) {
    case 'checkmark':
      return checkmarkIcon;
    case 'cancel':
      return cancelIcon;
    case 'bike':
      return bikeIcon;
    case 'navigate':
      return navigateIcon;
    case 'add':
      return addIcon;
    case 'delete':
      return deleteIcon;
    case 'back':
      return backIcon;
    case 'menu':
      return menuIcon;
    default:
      return checkmarkIcon;
  }
};

const Icon = ({ type, style, className, onClick }) => {
  const Svg = getSVGIcon(type);
  return (
    <Svg
      style={style}
      className={`${css(styles.Icon)} ${className}`}
      onClick={onClick}
    />
  );
};

Icon.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
