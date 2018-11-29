import React from 'react';
import PropTypes from 'prop-types';
import Window from '../common/Window';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/CloseRounded';
import CheckIcon from '@material-ui/icons/CheckRounded';
import { StyleSheet, css } from 'aphrodite/no-important';
import Typography from '@material-ui/core/Typography';
import Icon from './../common/Icon';

const style = {
  ButtonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    bottom: '3em',
  },
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

const NavigatorWindow = ({ direction, distance, showBikeList, hasFound }) => {
  return (
    <Window>
      <Typography variant="h1">{`${distance}M`}</Typography>
      <div className={css(styles.DirectionArrow)}>
        <Icon type="arrow" size={style.Icon.width} rotate={direction} />
      </div>
      <div className={css(styles.ButtonGroup)}>
        <Button
          variant="contained"
          size="large"
          onClick={() => showBikeList()}
          icon={<CloseIcon />}
        >
          cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => showBikeList() || hasFound()}
          icon={<CheckIcon />}
        >
          Done
        </Button>
      </div>
    </Window>
  );
};

NavigatorWindow.propTypes = {
  bikeId: PropTypes.number,
  direction: PropTypes.number,
  distance: PropTypes.number,
  showBikeList: PropTypes.func,
  hasFound: PropTypes.func,
};

export default NavigatorWindow;
