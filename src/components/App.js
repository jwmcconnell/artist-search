import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import SearchView from '../containers/SearchView';
import ArtistView from '../containers/ArtistView';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/artist/:id" component={ArtistView} />
        <Route path="/" component={SearchView} />
      </Switch>
    </Router>
  );
}
