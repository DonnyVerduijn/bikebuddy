import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxStore from './util/ReduxStore';
import LocalStorage from './util/LocalStorage';
// import PositionSensor from './util/PositionSensor';
// import MagneticSensor from './util/MagneticSensor';

import userActions from './actions/UserActions';
import globalSelectors from './selectors/GlobalSelectors';
import globalActions from './actions/GlobalActions';
import uuid from 'uuidv4';
import App from './components/app/App';
import './index.css';
import 'typeface-roboto';

const CordovaApp = () => {
  let store = null;

  const onDeviceReady = () => {
    store = ReduxStore.create();
    const root = document.getElementById('App');
    const localStorage = LocalStorage({ identifier: 'bikebuddy' });

    // fetch from localStorage
    store.dispatch(
      globalActions.populateState({
        payload: localStorage.fetch() || {},
      }),
    );

    // create user if none exists
    const localUserId = globalSelectors.getLocalUserId(store.getState());
    if (!localUserId) {
      const id = uuid();
      store.dispatch(userActions.addUser(id));
      store.dispatch(globalActions.setUserId(id));
    }

    // bootstrap react
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      root,
    );
  };

  // declare public api methods
  const onPause = () => {
    if (store) store.dispatch(globalActions.setIsApplicationActive(false));
  };

  const onResume = () => {
    if (store) store.dispatch(globalActions.setIsApplicationActive(true));
  };

  return {
    onDeviceReady,
    onPause,
    onResume,
  };
};

// instantiate module
const cordovaApp = CordovaApp();

// listen to DOM events
document.addEventListener('deviceready', cordovaApp.onDeviceReady, false);
document.addEventListener('pause', cordovaApp.onPause, false);
document.addEventListener('resume', cordovaApp.onResume, false);
