import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import NavigatorWindow from './NavigatorWindow';
import BikeListWindowContainer from './../containers/BikeListWindowContainer';
import BikeDetailWindow from './BikeDetailWindow';
import NoMatchWindow from './NoMatchWindow';
import UserProfileWindow from './UserProfileWindow';
import BikeMapWindow from './BikeMapWindow';
import SettingsWindow from './SettingsWindow';

const App = () => {
  return <HashRouter>
    <Switch>
      <Route path="/" exact component={BikeListWindowContainer} />
      <Route path="/bike/map/:userId" component={BikeMapWindow} />
      <Route path="/bike/navigator/:id" component={NavigatorWindow} />
      <Route path="/bike/:id" component={BikeDetailWindow} />
      <Route path="/user/:id" component={UserProfileWindow} />
      <Route path="/settings" component={SettingsWindow}/>
      <Route component={NoMatchWindow} />
    </Switch>
  </HashRouter>;
};

export default App;
