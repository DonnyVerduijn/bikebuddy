import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  HorizontalGroup: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const HorizontalGroup = props => {
  return (
    <div
      className={`${css(styles.HorizontalGroup)} ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

HorizontalGroup.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default HorizontalGroup;
