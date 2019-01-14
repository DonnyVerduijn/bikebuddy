import uuid from 'uuidv4';

export default {
    setCoordinate(location) {
      return {
        type: 'COORDINATE_SET',
        location,
        coordinateId: uuid(),
      };
    },
  };
  