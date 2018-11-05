import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import HorizontalGroup from './wrappers/HorizontalGroup';

const styles = StyleSheet.create({
  NavigationBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: 'rgb(0, 0, 0)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 100,
  },
  Icon: {
    width: '1.25em !important',
    height: '1.25em !important',
    margin: '1.1em 1.5em',
  },
  PageTitle: {
    color: 'rgb(255,255,255)',
    fontSize: '1.25em',
    fontWeight: 'bold',
  },
  HorizontalGroup: {
    alignItems: 'center',
  },
});

const NavigationBar = ({ className, title, leftIcon, rightIcon }) => {
  return (
    <div className={`${css(styles.NavigationBar)} ${className || ''}`}>
      <HorizontalGroup className={css(styles.HorizontalGroup)}>
        {leftIcon && leftIcon({ className: css(styles.Icon) })}
        {title && title({ className: css(styles.PageTitle) })}
      </HorizontalGroup>
      {rightIcon && rightIcon({ className: css(styles.Icon) })}
    </div>
  );
};

NavigationBar.propTypes = {
  className: PropTypes.string,
  title: PropTypes.func,
  leftIcon: PropTypes.func,
  rightIcon: PropTypes.func,
};

export default NavigationBar;