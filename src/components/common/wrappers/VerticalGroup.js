import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  VerticalGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const VerticalGroup = props => {
  return (
    <div
      className={`${css(styles.VerticalGroup)} ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

VerticalGroup.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default VerticalGroup;
