import mapStyle from './../assets/mapStyle.json';

const NativeGoogleMap = element => {
  // eslint-disable-next-line
  const map = plugin.google.maps.Map.getMap(element, { styles: mapStyle });
  // eslint-disable-next-line
  plugin.google.maps.environment.setBackgroundColor('rgb(0,0,0');

  const onMapReady = callback => {
    // eslint-disable-next-line
    map.one(plugin.google.maps.event.MAP_READY, () => callback(map));
  };

  return {
    map,
    onMapReady,
  };
};

export default NativeGoogleMap;
