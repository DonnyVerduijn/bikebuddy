import React from 'react';
import PropTypes from 'prop-types';
import Image from './common/Image';
import { StyleSheet, css } from 'aphrodite/no-important';
import arrowIcon from './../assets/icon-arrow.svg';

const styles = StyleSheet.create({
  DirectionArrow: {
    width: '10em',
    height: '10em',
    display: 'inline-block'
  },
  DirectionArrowWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const DirectionArrow = props => {
  return (
    <div className={css(styles.DirectionArrowWrapper)}>
      <Image
        src={arrowIcon}
        style={{ transform: `rotate(${props.rotation}deg)` }}
        className={css(styles.DirectionArrow)}
      />
    </div>
  );
};

DirectionArrow.propTypes = {
  rotation: PropTypes.number,
};

export default DirectionArrow;
