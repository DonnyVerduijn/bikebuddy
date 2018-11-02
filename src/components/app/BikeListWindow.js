import React from 'react';
import Window from '../common/Window';
import BikeListContainer from './../containers/BikeListContainer';
import StoreBikeButtonContainer from '../containers/StoreBikeButtonContainer';
// import BikeListNavigationContainer from '../containers/BikeListNavigationContainer';
// import BottomMenuContainer from './../containers/BottomMenuContainer';
// import Icon from './../common/Icon';

// const createIcon = (parentProps) => childProps => {
//     const props = Object.assign({}, parentProps, childProps);
//     return <Icon {...props}></Icon>;
// };

const BikeListWindow = () => {
  return (
    <Window>
      {/* <BikeListNavigationContainer
        title="Bikelocator"
        leftIcon={createIcon({ type: 'menu', onClick: toggleMenu })}
      /> */}
      <BikeListContainer />
      <StoreBikeButtonContainer />
      {/* <BottomMenuContainer /> */}
    </Window>
  );
};

export default BikeListWindow;
