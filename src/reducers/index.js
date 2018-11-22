import { combineReducers } from 'redux';
import bikeReducer from './BikeReducer';
import locationReducer from './LocationReducer';
import userReducer from './UserReducer';
import globalReducer from './GlobalReducer';
import storageReducer from './StorageReducer';

import { key as userKey } from './../selectors/UserSelectors';
import { key as locationKey } from './../selectors/LocationSelectors';
import { key as bikeKey } from './../selectors/BikeSelectors';
import { key as globalKey } from './../selectors/GlobalSelectors';
import { key as storageKey } from './../selectors/StorageSelectors';

const rootReducer = combineReducers({
  [bikeKey]: bikeReducer,
  [locationKey]: locationReducer,
  [userKey]: userReducer,
  [globalKey]: globalReducer,
  [storageKey]: storageReducer,
});

export default rootReducer;
