import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  VerticalGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexGrow: {
    flexGrow: 1,
  },
});

const VerticalGroup = props => {
  return (
    <div
      className={css(styles.VerticalGroup, props.grow && styles.flexGrow)}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

VerticalGroup.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  grow: PropTypes.bool,
};

export default VerticalGroup;
