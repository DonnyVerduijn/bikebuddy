import CordovaEvents from './CordovaEvents';

const BackgroundLocationProvider = () => {
  let api;

  //   listeners
  //   api.onLocation();
  //   api.onMotionChange();
  //   api.onProviderChange();
  //   api.onActivityChange();
  //   api.onGeofence();
  //   api.onHttp();
  //   api.onHeartbeat();
  //   api.onGeofencesChange();
  //   api.onSchedule();
  //   api.onConnectivityChange();
  //   api.onPowerSaveChange();
  //   api.onEnabledChange();

  //   methods
  //   api.stop();
  //   api.addGeofence();
  //   api.addGeofences();
  //   api.changePace();
  //   api.destroyLocations();
  //   api.destroyLog();
  //   api.emailLog();
  //   api.finish();
  //   api.getCount();
  //   api.getCurrentPosition();
  //   api.getGeofences();
  //   api.getLocations();
  //   api.getLog();
  //   api.getOdometer();
  //   api.getSensors();
  //   api.getState();
  //   api.insertLocation();
  //   api.isPowerSaveMode();
  //   api.playSound();
  //   api.ready();
  //   api.registerHeadlessTask();
  //   api.removeAllListeners();
  //   api.removeGeofence();
  //   api.removeGeofences();
  //   api.removeListener();
  //   api.removeListeners();
  //   api.reset();
  //   api.resetOdometer();
  //   api.setConfig();
  //   api.setLogLevel();
  //   api.setOdometer();
  //   api.start();
  //   api.startBackgroundTask();
  //   api.startGeofences();
  //   api.startSchedule();
  //   api.stop();
  //   api.stopSchedule();
  //   api.stopWatchPosition();
  //   api.sync();
  //   api.transistorTrackerParams();
  //   api.watchPosition();

  const init = () => {
    api = window.BackgroundGeolocation;
    api.ready({
        reset: true,
        debug: true,
        logLevel: api.LOG_LEVEL_VERBOSE,
        desiredAccuracy: api.DESIRED_ACCURACY_HIGH,
        distanceFilter: 10,
        stopOnTerminate: false,
        startOnBoot: true,
      });
  };

  return {
    onLocation: cb => api.onLocation(cb),
    onMotionChange: cb => api.onMotionChange(cb),
    onProviderChange: cb => api.onProviderChange(cb),
    onActivityChange: cb => api.onActivityChange(cb),
    onGeofence: cb => api.onGeofence(cb),
    init,
  };
};

const singleton = BackgroundLocationProvider();
CordovaEvents.onDeviceReady(singleton.init);
export default singleton;
