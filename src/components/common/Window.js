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
    transition: 'left .25s ease-in-out',
    // animationName: fadeIn,
    // animationDuration: '.5s',
    backgroundColor: 'rgba(235, 235, 237, 1)',
  },
  isMenuVisible: {
    left: '15em',
  },
});

const Window = props => {
  console.log(props);
  return (
    <div
      className={`${css(styles.Window)} ${
        props.isMenuVisible && css(styles.isMenuVisible)
      }`}
    >
      {props.children}
    </div>
  );
};

Window.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  isMenuVisible: PropTypes.bool,
};

export default Window;
