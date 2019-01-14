
const MagneticSensor = () => {

  class DeviceOrientation {
    constructor(event) {
      this.alpha = event.alpha;
      this.beta = event.beta;
      this.gamma = event.gamma;
      this.timeStamp = event.timeStamp;
    }
  }

  const listen = callback => {
    return window.addEventListener(
      'deviceorientation',
      event => callback(new DeviceOrientation(event)),
      true,
    );
  };

  const unlisten = event => {
    window.removeEventListener('deviceorientation', event);
  };

  return {
    listen,
    unlisten,
  };
};

const singleton = MagneticSensor();
export default singleton;
