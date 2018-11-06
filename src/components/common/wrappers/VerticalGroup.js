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
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

VerticalGroup.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default VerticalGroup;
