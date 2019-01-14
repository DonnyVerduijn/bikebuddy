import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxStore from './util/ReduxStore';
import LocalStorage from './util/LocalStorage';
import userActions from './actions/UserActions';
import globalSelectors from './selectors/GlobalSelectors';
import globalActions from './actions/GlobalActions';
import coordinateActions from './actions/CoordinateActions';
import BackgroundLocationProvider from './util/BackgroundLocationProvider';
import CordovaEvents from './util/CordovaEvents';
import PositionSensor from './util/PositionSensor';
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

    // attach callbacks to sensors
    PositionSensor.listen(location => {
      store.dispatch(coordinateActions.setCoordinate(location));
    });

    // create user if none exists
    const localUserId = globalSelectors.getLocalUserId(store.getState());
    if (!localUserId) {
      const id = uuid();
      store.dispatch(userActions.addUser(id));
      store.dispatch(globalActions.setUserId(id));
    }

    const log = e => console.log(e);

    BackgroundLocationProvider.onLocation(log);
    BackgroundLocationProvider.onActivityChange(log);
    BackgroundLocationProvider.onProviderChange(log);
    BackgroundLocationProvider.onMotionChange(log);
    BackgroundLocationProvider.onGeofence(log);

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
CordovaEvents.onDeviceReady(cordovaApp.onDeviceReady);
CordovaEvents.onPause(cordovaApp.onPause);
CordovaEvents.onResume(cordovaApp.onResume);
