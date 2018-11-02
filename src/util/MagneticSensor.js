const MagneticSensor = () => {
  let listener = null;

  class DeviceOrientation {
    constructor(event) {
      this.alpha = event.alpha;
      this.beta = event.beta;
      this.gamma = event.gamma;
      this.timeStamp = event.timeStamp;
    }
  }

  const listen = callback => {
    listener = callback;
    window.addEventListener(
      'deviceorientation',
      event => listener(new DeviceOrientation(event)),
      true,
    );
  };

  const unlisten = () => {
    window.removeEventListener('deviceorientation', listener, true);
  };

  return {
    listen,
    unlisten,
  };
};

export default MagneticSensor;
