import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  Text: {
    display: 'inherit',
    position: 'relative',
  },
});

const Text = props => {
  return (
    <span
      className={`${css(styles.Text)} ${props.className}`}
      style={props.style}
    >
      {props.children}
    </span>
  );
};

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Text;
