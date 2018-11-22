import googleMapsClient from '@google/maps';

const GMapsAPIService = () => {
  const api = googleMapsClient.createClient({
    // eslint-disable-next-line
    key: process.env.GOOGLE_MAPS_API_KEY,
  });

  const coordsAreValid = coords => {
    return coords && coords.lat && coords.lng;
  };

  const bicycleStoragesNearby = ({ coords }) => {
    return new Promise((resolve, reject) => {
      if (coordsAreValid(coords)) {
        api.placesNearby(
          {
            location: coords,
            // radius: 2500,
            keyword: 'fietsenstalling',
            rankby: 'distance',
            language: 'nl',
          },
          (status, result) => {
            if (result.status === 200) {
              resolve(result.json.results);
            } else {
              reject(result);
            }
          },
        );
      } else {
        reject(new Error('No position data available.'));
      }
    });
  };

  const reverseGeocode = ({ coords }) => {
    return new Promise((resolve, reject) => {
      if (coordsAreValid(coords)) {
        api.reverseGeocode({ latlng: coords }, (status, result) => {
          if (result.status === 200) {
            resolve(result.json.results[4].formatted_address);
          } else {
            reject(result);
          }
        });
      } else {
        reject(new Error('No position data available.'));
      }
    });
  };

  return {
    reverseGeocode,
    bicycleStoragesNearby,
  };
};

const singleton = GMapsAPIService();
export default singleton;
