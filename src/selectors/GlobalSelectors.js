export const key = 'global';

export const getLocalUserId = (state) => {
  return state[key].localUserId ? state[key].localUserId : null;
};
export const getDeviceLocation = (state) => {
  return state[key].deviceLocation ? state[key].deviceLocation : null;
};
export const getDeviceOrientation = (state) => {
  return state[key].deviceOrientation ? state[key].deviceOrientation : null;
};

export default {
  getDeviceLocation,
  getDeviceOrientation,
  getLocalUserId
};
