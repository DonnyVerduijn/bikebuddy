import React from 'react';
import PropTypes from 'prop-types';
// import { StyleSheet, css } from 'aphrodite/no-important';
import List from './common/List';
import BikeListItemContainer from './containers/BikeListItemContainer';

// const styles = StyleSheet.create({
//     List: {

//     }
// });

const BikeList = ({ bikeIds, showBike, navigateBike }) => {
  return (
    <List>
      {bikeIds.map(bikeId => (
        <BikeListItemContainer
          key={bikeId}
          bikeId={bikeId}
          onShowBike={showBike}
          onNavigateClick={navigateBike}
        />
      ))}
    </List>
  );
};

BikeList.propTypes = {
  // isMenuVisible: PropTypes.bool,
  bikeIds: PropTypes.arrayOf(PropTypes.string),
  showBike: PropTypes.func,
  navigateBike: PropTypes.func,
};

export default BikeList;
