import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import Icon from './common/Icon';

const style = {
  DirectionArrow: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icon: {
    width: '10em',
    height: '10em',
    display: 'inline-block',
  },
};

const styles = StyleSheet.create(style);

const DirectionArrow = props => {
  return (
    <div className={css(styles.DirectionArrow)}>
      <Icon type="arrow" size={style.Icon.width} rotate={props.direction} />
    </div>
  );
};

DirectionArrow.propTypes = {
  direction: PropTypes.number,
};

export default DirectionArrow;
