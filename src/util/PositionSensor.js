import CordovaEvents from './CordovaEvents';

const defaults = {
  maximumAge: 1000,
  timeout: 5000,
  enableHighAccuracy: true,
  priority: 0,
  interval: 1000,
  fastInterval: 100,
};

const PositionSensor = () => {
  let api,
    isReady = false;

  const init = () => {
    isReady = true;
    // eslint-disable-next-line
    api = cordova.plugins.locationServices.geolocation;
  };
  const listeners = {};

  // store listener into listener dictionary
  const listen = (callback, options, onError) => {
    const id =
      isReady ?
      api.watchPosition(
        callback,
        onError && new Error('position data not available'),
        Object.assign({}, defaults, options),
      ) : null;
    listeners[id] = callback;
    return id;
  };

  const unlisten = id => {
    isReady && api.clearWatch(id);
  };

  const getPosition = options => {
    return new Promise((resolve, reject) => {
      isReady && api.getCurrentPosition(
        resolve,
        reject,
        Object.assign({}, defaults, options),
      );
    });
  };

  return {
    init,
    listen,
    unlisten,
    getPosition,
  };
};

const singleton = PositionSensor();
CordovaEvents.onDeviceReady(singleton.init);
export default singleton;
