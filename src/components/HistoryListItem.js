import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import IconButton from '@material-ui/core/IconButton';
import Icon from './common/Icon';
import Text from './common/Text';
import HorizontalGroup from './common/HorizontalGroup';
import VerticalGroup from './common/VerticalGroup';
import Typography from '@material-ui/core/Typography';

const style = {
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
  VerticalGroup: {
    flexGrow: 1,
  },
};

const styles = StyleSheet.create({
  HistoryListItem: {
    listStyleType: 'none',
    color: 'rgb(35,41,32)',
    borderStyle: 'solid',
    borderWidth: '0 0 1px 0',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    display: 'flex',
    padding: '1em',
    alignItems: 'center',
    backgroundImage:
      'linear-gradient(-180deg, rgb(250, 250, 250), rgb(248, 248, 248) 90%)',
  },
});

const HistoryListItem = ({ bike, showBike, navigateBike }) => {
    return (
      <li className={css(styles.HistoryListItem)}>
        <Icon
          type="bike"
          size={style.BikeIcon.width}
          color={style.BikeIcon.fill}
          margin={style.BikeIcon.margin}
        />
        <VerticalGroup grow={true} onClick={showBike}>
          <HorizontalGroup>
            <Typography variant="h5">{bike.name}</Typography>
            <Typography variant="h5">{' ' + bike.distance}</Typography>
          </HorizontalGroup>
          <Typography>{bike.address}</Typography>
          <Text type="caption">{bike.timeAgo}</Text>
        </VerticalGroup>
        <IconButton color="primary" onClick={navigateBike}>
          <Icon type="navigation" fontSize="large" />
        </IconButton>
      </li>
    );
};

HistoryListItem.propTypes = {
  bike: PropTypes.object,
  showBike: PropTypes.func,
  navigateBike: PropTypes.func,
};

export default HistoryListItem;
