const DistanceFormatter = {
  format(distance) {
    if (distance === null) return null;
    if (distance > 1000) {
      return `${Math.round(distance / 10) / 100} km`;
    } else {
      return `${distance} m`;
    }
  },
};

export default DistanceFormatter;
