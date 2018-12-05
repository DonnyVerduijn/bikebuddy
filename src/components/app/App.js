import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import NavigatorWindowContainer from './../containers/NavigatorWindowContainer';
import HistoryWindowContainer from '../containers/HistoryWindowContainer';
import NoMatchWindow from './NoMatchWindow';
import FinderWindowContainer from '../containers/FinderWindowContainer';
import SettingsWindow from './SettingsWindow';
import AboutWindow from './AboutWindow';

const App = () => {
  return <HashRouter>
    <Switch>
      <Route path="/" exact component={FinderWindowContainer} />
      <Route path="/history" component={HistoryWindowContainer} />
      <Route path="/navigator/:id" component={NavigatorWindowContainer} />
      <Route path="/settings" component={SettingsWindow}/>
      <Route path="/about" component={AboutWindow}/>
      <Route component={NoMatchWindow} />
    </Switch>
  </HashRouter>;
};

export default App;
