import uuid from 'uuidv4';

const MagneticSensor = () => {
  const listeners = {};

  class DeviceOrientation {
    constructor(event) {
      this.alpha = event.alpha;
      this.beta = event.beta;
      this.gamma = event.gamma;
      this.timeStamp = event.timeStamp;
    }
  }

  const listen = callback => {
    const id = uuid();
    listeners[id] = callback;
    window.addEventListener(
      'deviceorientation',
      event => listeners[id](new DeviceOrientation(event)),
      true,
    );
    return id;
  };

  const unlisten = id => {
    window.removeEventListener('deviceorientation', listeners[id]);
  };

  return {
    listen,
    unlisten,
  };
};

const singleton = MagneticSensor();
export default singleton;
