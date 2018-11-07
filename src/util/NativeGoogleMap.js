
const NativeGoogleMap = (element) => {
  
  // eslint-disable-next-line
  const map = plugin.google.maps.Map.getMap(element);

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
