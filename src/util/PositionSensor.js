const defaults = {
  maximumAge: 1000,
  timeout: 5000,
  enableHighAccuracy: true,
  priority: 0,
  interval: 250,
  fastInterval: 100
};

const PositionSensor = (config = {}) => {
  let watchId = null;
  const options = Object.assign({}, defaults, config);

  // store listener into listener dictionary
  const listen = callback => {
    // eslint-disable-next-line
    watchId = cordova.plugins.locationServices.geolocation.watchPosition(
      callback,
      onError,
      options
    );
  };

  // omit listener by id
  const unlisten = () => {
    if (watchId !== null)
    // eslint-disable-next-line
      cordova.plugins.locationServices.geolocation.clearWatch(watchId);
  };

  const onError = () => {
    // alert("code: " + error.code + "\n" + "message: " + error.message + "\n");
  };

  return {
    listen,
    unlisten,
  };
};

export default PositionSensor;
