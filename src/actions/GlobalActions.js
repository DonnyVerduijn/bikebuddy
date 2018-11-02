export default {
  populateState(payload) {
    return {
      type: 'GLOBAL_POPULATE_STATE',
      payload,
    };
  },
  setUserId(userId) {
    return {
      type: 'GLOBAL_SET_USER_ID',
      userId,
    };
  },
  setIsApplicationActive(value){
    return {
      type: 'GLOBAL_SET_IS_APPLICATION_ACTIVE',
      value: value,
    };
  },
  setDeviceLocation(deviceLocation) {
    return {
      type: 'GLOBAL_SET_DEVICE_LOCATION',
      deviceLocation,
    };
  },
  setDeviceOrientation(deviceOrientation) {
    return {
      type: 'GLOBAL_SET_DEVICE_ORIENTATION',
      deviceOrientation,
    };
  },
};
