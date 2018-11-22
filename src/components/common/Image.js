import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  Image: {},
});

const Image = props => {
  return (
    <img
      className={css(styles.Image)}
      src={props.src}
      style={props.style}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  style: PropTypes.object,
};

export default Image;
