import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import Button from './../components/common/Button';
import Icon from './common/Icon';
import Text from './common/Text';

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
        onClick={ () => showBikeList()}
        text={(props) => <Text {...props}>Cancel</Text>}
        icon={(props) => <Icon {...props} type="cancel" />}
      />
      <Button
        onClick={() => showBikeList() && hasFound()}
        text={(props) => <Text {...props}>Done</Text>}
        icon={(props) => <Icon {...props} type="checkmark" />}
        isRaised
      />
    </div>
  );
};

NavigatorButtonGroup.propTypes = {
  hasFound: PropTypes.func,
  cancel: PropTypes.func,
};

export default NavigatorButtonGroup;
