import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import SearchView from '../containers/SearchView';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchView} />
      </Switch>
    </Router>
  );
}
