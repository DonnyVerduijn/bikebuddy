import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import Icon from './common/Icon';
import Text from './common/Text';

const style = {
  menuItem: {
    display: 'block',
    padding: '.75em 1em',
    fontSize: '1.1em',
    color: 'rgb(34,34,34)',
    borderBotom: '1px solid rgba(0,0,0,0.1)',
  },
  Icon: {
    width: '1em',
    fill: 'rgb(34,34,34)',
  },
};

const styles = StyleSheet.create(style);

const SideNavigationMenuItem = ({ icon, text, onClick }) => {
  return (
    <li className={css(styles.menuItem)} onClick={onClick}>
      <Icon type={icon} size={style.Icon.width} color={style.Icon.fill}/>
      <Text>{text}</Text>
    </li>
  );
};

SideNavigationMenuItem.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default SideNavigationMenuItem;
