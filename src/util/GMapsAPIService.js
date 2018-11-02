import googleMapsClient from '@google/maps';

const GMapsAPIService = () => {
  const api = googleMapsClient.createClient({
    // eslint-disable-next-line
    key: process.env.GOOGLE_MAPS_API_KEY,
  });

  const reverseGeocode = ({ coords }) => {
    return new Promise((resolve, reject) => {
      if (coords && coords.latitude && coords.longitude) {
        const latlng = {
          lat: parseFloat(coords.latitude),
          lng: parseFloat(coords.longitude),
        };
        api.reverseGeocode({ latlng }, (status, result) => {
          if (result.json.status === 'OK') {
            resolve(result.json.results[4].formatted_address);
          } else {
            reject(result);
          }
        });
      } else {
        reject(
          new Error(
            'No position data available. Please check your GPS signal.',
          ),
        );
      }
    });
  };

  return {
    reverseGeocode,
  };
};

const singleton = GMapsAPIService();
export default singleton;
