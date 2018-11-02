import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  Image: {},
});

const Image = props => {
  return (
    <img
      className={`${css(styles.Image)} ${props.className}`}
      src={props.src}
      style={props.style}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Image;
