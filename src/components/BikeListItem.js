import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import ListItem from './common/ListItem';
import Icon from './common/Icon';
import Text from './common/Text';
import HorizontalGroup from './common/HorizontalGroup';
import VerticalGroup from './common/VerticalGroup';
// import { bounce } from 'react-animations';

const style = {
  BikeListItem: {
    color: 'rgb(35,41,32)',
    borderStyle: 'solid',
    borderWidth: '0 0 1px 0',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    display: 'flex',
    padding: '1em',
    alignItems: 'center',
    backgroundImage:
      'linear-gradient(-180deg, rgb(250, 250, 250), rgb(248, 248, 248) 90%)',
    // animationName: bounce,
    // animationDuration: '.25s',
  },
  Title: {
    fontWeight: 'bold',
    paddingRight: '.5em',
    borderRight: '2px solid rgb(35,41,32)',
    fontSize: '1.5em',
    lineHeight: '1em',
  },
  Distance: {
    paddingLeft: '.5em',
    fontSize: '1.25em',
    lineHeight: '1em',
  },
  Address: {
    fontSize: '0.9em',
  },
  TimeAgo: {
    fontSize: '0.75em',
    fontVariant: 'small-caps'
  },
  BikeIcon: {
    width: '2.5em',
    height: '2.5em',
    fill: 'rgb(35,41,32)',
    margin: '0 1em 0 0',
  },
  NavigateIcon: {
    width: '2em',
    height: '2em',
    fill: 'rgb(35,170,25)',
    margin: '0 0 0 .5em',
  },
  NavigateIconWrapper: {
    margin: '0.5em',
  },
  HorizontalGroup: {
    marginBottom: '.25em',
    alignItems: 'baseline',
  },
  VerticalGroup: {
    flexGrow: 1,
  },
};

const styles = StyleSheet.create(style);

const BikeListItem = ({ bike, showBike, navigateBike }) => {
  return (
    <ListItem className={css(styles.BikeListItem)} onClick={showBike}>
      <Icon type="bike" style={style.BikeIcon} />
      <VerticalGroup className={css(styles.VerticalGroup)}>
        <HorizontalGroup className={css(styles.HorizontalGroup)}>
          <Text className={css(styles.Title)}>{bike.name}</Text>
          <Text className={css(styles.Distance)}>{bike.distance}</Text>
        </HorizontalGroup>
        <Text className={css(styles.Address)}>{bike.address}</Text>
        <Text className={css(styles.TimeAgo)}>{bike.timeAgo}</Text>
      </VerticalGroup>
      <Icon

        wrapperClassName={css(styles.NavigateIconWrapper)}
        style={style.NavigateIcon}
        type="navigate"
        onClick={e => {
          e.stopPropagation();
          navigateBike();
        }}
      />
    </ListItem>
  );
};

BikeListItem.propTypes = {
  bike: PropTypes.object,
  showBike: PropTypes.func,
  navigateBike: PropTypes.func,
};

export default BikeListItem;
