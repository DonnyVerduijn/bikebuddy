import geolib from 'geolib';

const parametersAreValid = (a, b) => {
  return (
    a &&
    a.coords &&
    a.coords.latitude &&
    a.coords.longitude &&
    b &&
    b.coords &&
    b.coords.latitude &&
    b.coords.longitude
  );
};

export default {
  getDistance(a, b) {
    return parametersAreValid(a, b)
      ? geolib.getDistance(a.coords, b.coords)
      : null;
  },
  getRhumbLineBearing(a, b) {
    return parametersAreValid(a, b)
      ? geolib.getRhumbLineBearing(a.coords, b.coords)
      : null;
  },
};
