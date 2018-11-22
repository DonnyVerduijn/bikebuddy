import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';
import BikeListItemContainer from './containers/BikeListItemContainer';

const styles = StyleSheet.create({
  BikeList: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    margin: 0,
  }
});

const BikeList = ({ bikeIds, showBike, navigateBike }) => {
  return (
    <ul className={css(styles.BikeList)}>
      {bikeIds.map(bikeId => (
        <BikeListItemContainer
          key={bikeId}
          bikeId={bikeId}
          onShowBike={showBike}
          onNavigateClick={navigateBike}
        />
      ))}
    </ul>
  );
};

BikeList.propTypes = {
  bikeIds: PropTypes.arrayOf(PropTypes.string),
  showBike: PropTypes.func,
  navigateBike: PropTypes.func,
};

export default BikeList;
