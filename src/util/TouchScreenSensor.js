import Hammer from 'hammerjs';

const TouchScreenSensor = domItem => {
  // Create a manager to manager the element
  var manager = new Hammer.Manager(domItem);

  // Create a recognizer
  var Pan = new Hammer.Pan();

  // Add the recognizer to the manager
  manager.add(Pan);
  // manager.set({ domEvents: true });

  return manager;
};

export default TouchScreenSensor;
