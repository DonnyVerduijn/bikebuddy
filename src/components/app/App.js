import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import NavigatorWindowContainer from './../containers/NavigatorWindowContainer';
import BikeListWindowContainer from './../containers/BikeListWindowContainer';
import BikeWindow from './BikeWindow';
import NoMatchWindow from './NoMatchWindow';
import UserProfileWindow from './UserProfileWindow';
import MapWindow from './MapWindow';
import SettingsWindow from './SettingsWindow';
import AboutWindow from './AboutWindow';

const App = () => {
  return <HashRouter>
    <Switch>
      <Route path="/" exact component={BikeListWindowContainer} />
      <Route path="/map" component={MapWindow} />
      <Route path="/bike/navigator/:id" component={NavigatorWindowContainer} />
      <Route path="/bike/:id" component={BikeWindow} />
      <Route path="/user/:id" component={UserProfileWindow} />
      <Route path="/settings" component={SettingsWindow}/>
      <Route path="/about" component={AboutWindow}/>
      <Route component={NoMatchWindow} />
    </Switch>
  </HashRouter>;
};

export default App;
