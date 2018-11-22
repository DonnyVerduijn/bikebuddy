import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  HorizontalGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
});

const HorizontalGroup = ({ children, margin }) => {
  return (
    <div
      className={css(styles.HorizontalGroup)}
      style={{
        ...(margin && { margin })
      }}
    >
      {children}
    </div>
  );
};

HorizontalGroup.propTypes = {
  children: PropTypes.any,
  margin: PropTypes.string,
};

export default HorizontalGroup;
