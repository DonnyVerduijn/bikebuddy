import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
// import { fadeIn } from 'react-animations';

const styles = StyleSheet.create({
  Window: {
    position: 'absolute',
    left: 0,
    top: 0,
    // top: '3.5em',
    right: 0,
    bottom: 0,
    zIndex: 100,
    transition: 'opacity .25s ease-in-out',
    mozTransition: 'opacity .25s ease-in-out',
    webkitTransition: 'opacity .25s ease-in-out',
    // animationName: fadeIn,
    // animationDuration: '.5s',
    backgroundColor: 'rgba(235, 235, 237, 1)',
  },
});

const Window = props => {
  return <div className={css(styles.Window)}>{props.children}</div>;
};

Window.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Window;
