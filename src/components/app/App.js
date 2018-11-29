import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import NavigatorWindowContainer from './../containers/NavigatorWindowContainer';
import BikeListWindowContainer from './../containers/BikeListWindowContainer';
import NoMatchWindow from './NoMatchWindow';
import MapWindowContainer from './../containers/MapWindowContainer';
import SettingsWindow from './SettingsWindow';
import AboutWindow from './AboutWindow';

const App = () => {
  return <HashRouter>
    <Switch>
      <Route path="/" exact component={MapWindowContainer} />
      <Route path="/bikes" component={BikeListWindowContainer} />
      <Route path="/bike/navigator/:id" component={NavigatorWindowContainer} />
      <Route path="/settings" component={SettingsWindow}/>
      <Route path="/about" component={AboutWindow}/>
      <Route component={NoMatchWindow} />
    </Switch>
  </HashRouter>;
};

export default App;
