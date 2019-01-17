import mapStyle from './../assets/mapStyle.json';

const defaults = {
  element: document.body,
  camera: {
    target: { lat: 51, lng: 4 },
    zoom: 15,
    tilt: 0,
    bearing: 0,
  },
  gestures: {
    scroll: false,
    tilt: false,
    rotate: false,
    zoom: false,
  },
  style: mapStyle,
  background: 'rgb(0,0,0)',
};

const NativeGoogleMap = options => {
  const config = Object.assign({}, defaults, options);
  // eslint-disable-next-line
  const api = plugin.google.maps;

  const map = api.Map.getMap(config.element, {
    styles: config.style,
    camera: config.camera,
  });

  map.setAllGesturesEnabled(false);

  api.environment.setBackgroundColor(config.background);

  const onMapReady = callback => {
    map.one(api.event.MAP_READY, () => callback(map));
  };

  const addMarker = options => {
    map.addMarker(options, marker =>
      marker.on(api.event.MARKER_CLICK, () => options.onClick(marker)),
    );
  };

  const addCircle = options => {
    map.addCircle(options, (circle) => {
      circle.on(api.event.CIRCLE_CLICK, () => options.onClick(circle));
    });
  };

  const getCameraTarget = () => {
    return map.getCameraTarget();
  };

  const getCameraPosition = () => map.getCameraPosition();

  const moveCamera = options => {
    map.moveCamera(options);
  };

  const animateCamera = options => {
    map.animateCamera(options);
  };

  const onCameraMoveEnd = callback => {
    map.on(api.event.CAMERA_MOVE_END, callback);
  };

  const onCameraMove = callback => {
    map.on(api.event.CAMERA_MOVE, callback);
  };

  const remove = () => {
    map.remove();
  };

  return {
    moveCamera,
    animateCamera,
    addMarker,
    addCircle,
    onMapReady,
    onCameraMoveEnd,
    onCameraMove,
    getCameraTarget,
    getCameraPosition,
    remove,
  };
};

export default NativeGoogleMap;
