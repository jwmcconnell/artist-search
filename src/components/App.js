import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import SearchView from '../containers/SearchView';
import ArtistView from '../containers/ArtistView';
import ReleaseView from '../containers/ReleaseView';
import SongView from '../containers/SongView';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/artist/:artist/:id" component={ArtistView} />
        <Route path="/release/:artist/:release/:id" component={ReleaseView} />
        <Route path="/song/:song/:id" component={SongView} />
        <Route path="/" component={SearchView} />
      </Switch>
    </Router>
  );
}
