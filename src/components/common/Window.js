import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
// import { fadeIn } from 'react-animations';

const styles = StyleSheet.create({
  Window: {
    position: 'relative',
    zIndex: 100,
    boxSizing: 'border-box',
    paddingTop: '56px',
    transitionProperty: 'opacity',
    transitionDuration: '.25s',
    transitionTimingFunction: 'linear',
    backgroundColor: 'rgba(235, 235, 237, 1)',
  },
});

const Window = props => {
  return (
    <div
      className={css(styles.Window)}
      style={{ width: '100%', height: '100%' }}
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
};

export default Window;
