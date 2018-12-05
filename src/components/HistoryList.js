import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import HistoryListItemContainer from './containers/HistoryListItemContainer';

const styles = StyleSheet.create({
  HistoryList: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    margin: 0,
  }
});

const HistoryList = ({ bikeIds, showBike, navigateBike }) => {
  return (
    <ul className={css(styles.HistoryList)}>
      {bikeIds.map(bikeId => (
        <HistoryListItemContainer
          key={bikeId}
          bikeId={bikeId}
          onShowBike={showBike}
          onNavigateClick={navigateBike}
        />
      ))}
    </ul>
  );
};

HistoryList.propTypes = {
  bikeIds: PropTypes.arrayOf(PropTypes.string),
  showBike: PropTypes.func,
  navigateBike: PropTypes.func,
};

export default HistoryList;
