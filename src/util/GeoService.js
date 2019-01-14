import geolib from 'geolib';

const parametersAreValid = (a, b) => {
  return a && a.lat && a.lng && b && b.lat && b.lng;
};

export default {
  getDistance(a, b) {
    return parametersAreValid(a, b)
      ? geolib.getDistance(
          { lat: a.lat, lng: a.lng },
          { lat: b.lat, lng: b.lng },
        )
      : null;
  },
  getRhumbLineBearing(a, b) {
    return parametersAreValid(a, b)
      ? geolib.getRhumbLineBearing(
          { lat: a.lat, lng: a.lng },
          { lat: b.lat, lng: b.lng },
        )
      : null;
  },
};
