import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './../reducers';

const ReduxStore = {
  create() {
    // eslint-disable-next-line
    const developmentMode = process.env.NODE_ENV === 'development';
    const ignoredActions = [
      'GLOBAL_SET_DEVICE_ORIENTATION',
      'GLOBAL_SET_DEVICE_LOCATION',
    ];
    const logger = createLogger({
      predicate: (getState, action) =>
        ignoredActions.every(type => action.type !== type),
    });
    const middleware = developmentMode ? [thunk, logger] : [thunk];
    return createStore(reducer, applyMiddleware(...middleware));
  },
};

export default ReduxStore;
