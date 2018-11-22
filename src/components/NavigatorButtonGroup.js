import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/CloseRounded';
import CheckIcon from '@material-ui/icons/CheckRounded';
// import Icon from './common/Icon';
// import Text from './common/Text';

const styles = StyleSheet.create({
  ButtonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    bottom: '3em',
  },
});

const NavigatorButtonGroup = props => {
  const { hasFound, showBikeList } = props;
  return (
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
        // isRaised
      >
        Done
      </Button>
    </div>
  );
};

NavigatorButtonGroup.propTypes = {
  hasFound: PropTypes.func,
  showBikeList: PropTypes.func,
  cancel: PropTypes.func,
};

export default NavigatorButtonGroup;
