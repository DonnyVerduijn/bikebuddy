import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import NavigatorWindow from './NavigatorWindow';
import BikeListWindow from './BikeListWindow';
import BikeDetailWindow from './BikeDetailWindow';
import NoMatchWindow from './NoMatchWindow';
import UserProfileWindow from './UserProfileWindow';
import BikeMapWindow from './BikeMapWindow';

const App = () => {
  return <HashRouter>
    <Switch>
      <Route path="/" exact component={BikeListWindow} />
      <Route path="/bike/map/:userId" component={BikeMapWindow} />
      <Route path="/bike/navigator/:id" component={NavigatorWindow} />
      <Route path="/bike/:id" component={BikeDetailWindow} />
      <Route path="/user/:id" component={UserProfileWindow} />
      <Route component={NoMatchWindow} />
    </Switch>
  </HashRouter>;
};

export default App;
