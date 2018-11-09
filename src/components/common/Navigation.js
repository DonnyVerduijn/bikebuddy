import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import HorizontalGroup from './wrappers/HorizontalGroup';

const styles = StyleSheet.create({
  Navigation: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: 'rgb(0, 0, 0)',
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 100,
  },
  Icon: {
    width: '1.25em !important',
    height: '1.25em !important',
    margin: '1.1em 1.25em',
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

const Navigation = ({ className, title, leftIcon, rightIcon }) => {
  return (
    <div className={`${css(styles.Navigation)} ${className || ''}`}>
      <HorizontalGroup className={css(styles.HorizontalGroup)}>
        {leftIcon && leftIcon({ className: css(styles.Icon) })}
        {title && title({ className: css(styles.PageTitle) })}
      </HorizontalGroup>
      {rightIcon && rightIcon({ className: css(styles.Icon) })}
    </div>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  title: PropTypes.func,
  leftIcon: PropTypes.func,
  rightIcon: PropTypes.func,
};

export default Navigation;
