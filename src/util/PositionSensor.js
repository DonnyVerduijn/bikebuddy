const defaults = {
  maximumAge: 1000,
  timeout: 5000,
  enableHighAccuracy: true,
  priority: 0,
  interval: 1000,
  fastInterval: 100,
};

const PositionSensor = () => {
  // eslint-disable-next-line
  const api = cordova.plugins.locationServices.geolocation;
  const listeners = {};

  // store listener into listener dictionary
  const listen = (callback, options, onError) => {
    const id = api.watchPosition(
      callback,
      onError,
      Object.assign({}, defaults, options),
    );
    listeners[id] = callback;
    return id;
  };

  const unlisten = id => {
    api.clearWatch(id);
  };

  const getPosition = options => {
    return new Promise((resolve, reject) => {
      api.getCurrentPosition(
        resolve,
        reject,
        Object.assign({}, defaults, options),
      );
    });
  };

  return {
    listen,
    unlisten,
    getPosition,
  };
};

const singleton = PositionSensor();
export default singleton;
