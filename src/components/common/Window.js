import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
// import { fadeIn } from 'react-animations';

const styles = StyleSheet.create({
  Window: {
    position: 'relative',
    width: '100%',
    height: '100%',
    zIndex: 100,
    boxSizing: 'border-box',
    paddingTop: '3.5em',
    transitionProperty: 'opacity',
    transitionDuration: '.25s',
    transitionTimingFunction: 'linear',
    backgroundColor: 'rgba(235, 235, 237, 1)',
    opacity: 1,
  },
  Dimmed: {
    opacity: 0.5,
  },
});

const Window = props => {
  const className = `${css(styles.Window)} ${
    props.isDimmed ? css(styles.Dimmed) : ''
  }`;
  return (
    <div className={className} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

Window.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  isDimmed: PropTypes.bool,
  onClick: PropTypes.func,
};

Window.defaultProps = {
  onClick: () => {},
};

export default Window;
