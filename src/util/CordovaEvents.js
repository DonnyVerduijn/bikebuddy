const CordovaEvents = () => {

  const attachListener = (type, callback) =>
    document.addEventListener(type, callback, false);

  return {
    onDeviceReady: cb => attachListener('deviceready', cb),
    onPause: cb => attachListener('pause', cb),
    onResume: cb => attachListener('resume', cb),
  };
};

const instance = CordovaEvents();
// listen to DOM events

export default instance;
